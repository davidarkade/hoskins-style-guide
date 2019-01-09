import * as React from 'react';
import * as cx from "classnames";

const styles =  require('./navigation_group.css');

export interface NavigationGroupProps{ label?: string }
 
class NavigationGroup extends React.Component<NavigationGroupProps> {
    render() {

        const title = this.props.label ?
                <h3 className={styles.navigation_group__title}>
                    {this.props.label}
                </h3> : null;

        return (
            <div className={styles.navigation_group}>
                {title}
                <ul className={cx(styles.navigation_group__list, "nav flex-column")}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default NavigationGroup;