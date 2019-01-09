import * as React from 'react';
import { Route, Redirect } from "react-router-dom";
import * as cx from 'classnames';

/**
 * Import highlight styles for code formatting.
 */
import '!style-loader!css-loader!../../../node_modules/highlight.js/styles/atom-one-light.css';
const highlightStyles = require('../../../node_modules/highlight.js/styles/atom-one-light.css');

import Overview from './Pages/Overview';
import Identity from './Pages/Identity';
import Typography from './Pages/Typography';
import Colours from './Pages/Colours';
import Spacing from './Pages/Spacing';
import Icons from './Pages/Icons';
import Inputs from './Pages/Inputs';
import Buttons from './Pages/Buttons';
import Navigation from './Pages/Navigation';
import Loaders from './Pages/Loaders';
import Notifications from './Pages/Notifications';

const styles = require('./guide.css');

export interface Props{}
export interface State{ label: string }

class Guide extends React.Component<Props, State> {
    render() {
        return (
            <main className={cx(styles.guide, 'col-sm-7 offset-sm-4 col-md-8 offset-md-3')}>
                <Route path="/overview" component={Overview} />
                <Route path="/identity" component={Identity} />
                <Route path="/typography" component={Typography}  />
                <Route path="/colours" component={Colours} />
                <Route path="/spacing" component={Spacing} />
                <Route path="/icons" component={Icons} />
                <Route path="/inputs" component={Inputs} />
                <Route path="/buttons" component={Buttons} />
                <Route path="/navigation" component={Navigation} />
                <Route path="/loaders" component={Loaders} />
                <Route path="/notifications" component={Notifications} />
                <Redirect from="/" to="/overview" />
            </main>
        );
    }
}

export default Guide;