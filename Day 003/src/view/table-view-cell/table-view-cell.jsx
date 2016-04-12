import React from 'react';
import classNames from 'classnames';
import Image from '../image/image.jsx';
import { EMPTY_FUNC } from '../../common/common.js';

require('./table-view-cell.scss');

/**
 * Check {@link https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/TableView_iPhone/TableViewCells/TableViewCells.html}.
 */
class TableViewCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            highlighted: false
        };
    }

    onTouchStart() {
        this.setState({
            highlighted: true
        });
    }

    onClick() {
        this.props.onClick();
    }

    onTouchEnd() {
        this.setState({
            highlighted: false
        });
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
                <Image className="flex" imageClass="arrow"/>
            </div>
        );
    }

    getReorderingControl() {
        return null;
    }

    render() {
        let cn = classNames({
            'table-view-cell': true,
            'highlighted': this.state.highlighted
        }, ...this.props.className.split(' '));

        if (this.props.isEditing) {
            return (
                <div className={cn}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onTouchEnd={this.onTouchEnd.bind(this)}
                    onMouseDown={this.onTouchStart.bind(this)}
                    onMouseUp={this.onTouchEnd.bind(this)}
                    onClick={this.onClick.bind(this)}>
                    {this.getEditingControl()}
                    {this.getCellContent()}
                    {this.getReorderingControl()}
                </div>
            );
        } else {
            return (
                <div className={cn}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onTouchEnd={this.onTouchEnd.bind(this)}
                    onMouseDown={this.onTouchStart.bind(this)}
                    onMouseUp={this.onTouchEnd.bind(this)}
                    onClick={this.onClick.bind(this)}>
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
    onClick: React.PropTypes.func,
    isEditing: React.PropTypes.bool
};

TableViewCell.defaultProps = {
    className: '',
    image: '',
    imageClass: '',
    title: '',
    detailText: '',
    onClick: EMPTY_FUNC,
    isEditing: false
};

export default TableViewCell;
