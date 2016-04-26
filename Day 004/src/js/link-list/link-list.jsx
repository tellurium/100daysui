import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

require('./link-list.scss');

class LinkList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    getLinks() {
        let route = this.props.route;

        // Check route object
        if (route && route.links) {
            return route.links;
        }

        return [];
    }

    render() {
        let cn = classNames('category-list', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <ul>
                    {
                        this.getLinks().map(l => (
                            <li key={l.name}><Link to={l.path}>{l.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

LinkList.propTypes = {
    className: React.PropTypes.string
};

LinkList.defaultProps = {
    className: ''
};

export default LinkList;
