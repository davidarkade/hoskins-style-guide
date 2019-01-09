import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Sidebar from '../Sidebar/index'
import Guide from '../Guide/index'

/*
  This imports the stylesheet in global scope so that we can use it as
   a fragment of a compiled scss file which would be usable on none react
   projects. Remember to stick with the BEM methodology for namespacing.
 */
import '!style-loader!css-loader!sass-loader!../../BrandLibrary/Global/styles.scss'

const brandStyles = require('../../BrandLibrary/Global/styles.scss');

export interface AppProps {}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <div className="row">
              <Sidebar />
              <Guide />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;