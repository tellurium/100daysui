import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Image from '../image/image.jsx';

require('./table-view-cell.scss');

/**
 * Check {@link https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/TableView_iPhone/TableViewCells/TableViewCells.html}.
 */
class TableViewCell extends React.Component {
    constructor(props) {
        super(props);
    }

    getImage() {
        let imgUrl = this.props.image;

        if (!imgUrl && !this.props.imageClass) {
            return null;
        }

        return (
            <Image className="flex" imageClass={this.props.imageClass} src={imgUrl}/>
        );
    }

    getTitle() {
        let title = this.props.title;

        if (!title) {
            return null;
        }

        return (
            <span className="title">{title}</span>
        );
    }

    getDetailText() {
        let detailText = this.props.detailText;

        if (!detailText) {
            return null;
        }

        return (
            <span className="detail-text">{detailText}</span>
        );
    }

    getEditingControl() {
        return null;
    }

    getCellContent() {
        return (
            <div className="content">
                {this.getImage()}
                <div className="text">
                    {this.getTitle()}
                    {this.getDetailText()}
                </div>
            </div>
        );
    }

    getAccessoryView() {
        return (
            <div className="accessory">

            </div>
        );
    }

    getReorderingControl() {
        return null;
    }

    render() {
        let cn = classNames({
            'table-view-cell': true
        }, ...this.props.className.split(' '));

        if (this.props.isEditing) {
            return (
                <div className={cn}>
                    {this.getEditingControl()}
                    {this.getCellContent()}
                    {this.getReorderingControl()}
                </div>
            );
        } else {
            return (
                <div className={cn}>
                    {this.getCellContent()}
                    {this.getAccessoryView()}
                </div>
            );
        }
    }
}

TableViewCell.propTypes = {
    className: React.PropTypes.string,
    image: React.PropTypes.string,
    imageClass: React.PropTypes.string,
    title: React.PropTypes.string,
    detailText: React.PropTypes.string,
    isEditing: React.PropTypes.bool
};

TableViewCell.defaultProps = {
    className: '',
    image: '',
    imageClass: '',
    title: '',
    detailText: '',
    isEditing: false
};

export default TableViewCell;
