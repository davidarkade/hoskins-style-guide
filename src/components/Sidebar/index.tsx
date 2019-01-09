import * as React from 'react';
import * as cx from 'classnames';
import GlobalNavigation from './GlobalNavigation/index';

const styles = require('./sidebar.css');
const hoskingsLogo = require('./assets/images/hoskingslogo.jpg');

class Sidebar extends React.Component<{}, {}> {
    render() {
        return (  
            <div className={cx(styles.sidebar, 'col-sm-3 col-md-2 hidden-xs-down bg-faded')}>
                <img className={styles.sidebar__identity} src={hoskingsLogo} alt={'Arkade CX and Loyalty Agency'} />
                <GlobalNavigation />
            </div>
        );
    }
}

export default Sidebar;