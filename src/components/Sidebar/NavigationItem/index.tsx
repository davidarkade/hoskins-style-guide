import * as React from 'react';
import * as cx from 'classnames';

import { NavLink } from "react-router-dom";

const styles = require('./navigation_item.css');

export interface Props{ name: string, label: string, active: boolean, handler: (id) => void}
export interface State{ selection: string }

class NavigationItem extends React.Component<Props, State> {
    render() {
        const active = this.props.active ? <span className="sr-only">(current)</span> : null;
        return (
            <li className={styles.navigation_item}>
                <NavLink className={cx(styles.navigation_item__link, 'body_regular_2', this.props.active ? 'active' : null)}
                         onClick={() => this.props.handler(this.props.name)}
                         to={'/' + this.props.name}
                   >
                        {this.props.label}
                        {active}
                   </NavLink>
            </li>
        );
    }
}

export default NavigationItem;