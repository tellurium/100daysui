/**
 * [From Stack Overflow]{@link http://stackoverflow.com/a/6661012}
 *
 * @example
 * 'text-form' => 'textForm'
 *
 */
function hyphenToCamelCase (str, isBigCamel) {
    if (isBigCamel) {
        str = str.replace(/^\w/, str[0].toUpperCase());
    }
    return str.replace(/-([a-z])/g,
        function (g) {
            return g[1].toUpperCase();
        }
    );
}

/**
 * @example
 * 'textForm' => 'text-form'
 */
function camelCaseToHyphen (str, isBigCamel, divider) {
    divider = divider || '-';
    if (isBigCamel) {
        str = str.replace(/^\w/, str[0].toLowerCase());
    }
    return str.replace(/([a-z][A-Z])/g,
        function (g) {
            return g[0] + divider + g[1].toLowerCase();
        }
    );
}

/**
 * @example
 * 'textForm' => 'TextForm'
 */
function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @example
 * 'I saw a dancing duck across the road', 8, '...' => 'I saw...'
 */
function clipString (str, size, tail) {
    tail = tail || '...';
    if (str.length > size) {
        str = str.substr(0, size - tail.length) + tail;
    } else {
        str += new Array(size - str.length).join(' ');
    }

    return str;
}

module.exports = { hyphenToCamelCase, camelCaseToHyphen, capFirstLetter, clipString };
