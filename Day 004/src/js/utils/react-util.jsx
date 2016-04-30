import React from 'react';

/**
 * Todo ...
 */
function genComponents (items) {
    return items.map((item, index)=> {
        return (<item.type key={index} {...item.props}/>);
    });
}

module.exports = { genComponents };
