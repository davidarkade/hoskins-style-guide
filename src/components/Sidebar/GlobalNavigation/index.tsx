import * as React from 'react';
import * as cx from 'classnames';
import NavigationGroup from '../NavigationGroup/index';
import NavigationItem from '../NavigationItem/index';

const styles =  require('./global_navigation.css');

export interface Props{ }
export interface State{ selection: string }

class GlobalNavigation extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            selection: 'overview'
        };
        this._selectItem = this._selectItem.bind(this);
    }

    _selectItem(id) {
        this.setState({
            selection: id
        });
    };

    render() {
        const active = (id) => id === this.state.selection;
        return (
            <nav className={styles.global_navigation}>
                <NavigationGroup>
                    <NavigationItem name={'overview'} label={'Overview'} active={active('overview')}
                                    handler={this._selectItem}/>
                </NavigationGroup>
                <NavigationGroup label={'Branding'}>
                    {/*<NavigationItem name={'identity'} label={'Identity'} active={active('identity')}*/}
                                    {/*handler={this._selectItem}/>*/}
                    <NavigationItem name={'colours'} label={'Colours'} active={active('colours')}
                                    handler={this._selectItem}/>
                    <NavigationItem name={'typography'} label={'Typography'} active={active('typography')}
                                    handler={this._selectItem}/>
                    <NavigationItem name={'icons'} label={'Icons'} active={active('icons')}
                                    handler={this._selectItem}/>
                    <NavigationItem name={'spacing'} label={'Spacing'} active={active('spacing')}
                                    handler={this._selectItem}/>
                </NavigationGroup>
                <NavigationGroup label={'Components'}>
                    {/*<NavigationItem name={'inputs'} label={'Inputs'} active={active('inputs')} handler={this._selectItem} />*/}
                    <NavigationItem name={'buttons'} label={'Buttons'} active={active('buttons')}
                                    handler={this._selectItem}/>
                    {/*<NavigationItem name={'navigation'} label={'Navigation'} active={active('navigation')} handler={this._selectItem} />*/}
                    {/*<NavigationItem name={'loaders'} label={'Loaders'} active={active('loaders')} handler={this._selectItem} />*/}
                    {/*<NavigationItem name={'notifications'} label={'Notifications'} active={active('notifications')} handler={this._selectItem} />*/}
                </NavigationGroup>
            </nav>
        );
    }
}

export default GlobalNavigation;