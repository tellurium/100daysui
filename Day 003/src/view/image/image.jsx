import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

require('./image.scss');

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cn = classNames({
            'image': true
        }, ...this.props.className.split(' '));

        let style;

        if (this.props.src) {
            style = {
                backgroundImage: `url(${this.props.src})`
            };
        }

        let cnRaw = classNames({
            'raw-img': true
        }, ...this.props.imageClass.split(' '));

        return (
            <div className={cn}>
                <div className={cnRaw} style={style}></div>
            </div>
        );
    }
}

Image.propTypes = {
    className: React.PropTypes.string,
    imageClass: React.PropTypes.string,
    src: React.PropTypes.string
};

Image.defaultProps = {
    className: '',
    imageClass: '',
    src: null
};

export default Image;
