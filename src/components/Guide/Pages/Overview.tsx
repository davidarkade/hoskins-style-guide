import * as React from 'react';
import Highlight from 'react-highlight';

const styles = require('./guide_page.css');
const overviewHeadingImage = require('./assets/overview_heading.png');

export interface Props{ route: any }
export interface State{}

class Overview extends React.Component<Props, State> {

render() {
  return (
      <div>
        <header className={styles.heading}>
            <h1 className={styles.heading__title}>Hoskings Jewellers Style Guide and UI Kit</h1>
        </header>
        <div className={styles.container}>

            <img src={overviewHeadingImage} alt="Hoskings Jewellers Heading" width="100%" />

            <br />
            <br />

            <p>The Hoskings Jewellers living style guide is a single source of reference for brand specific layout, identity
                usages rules, colours and typography. It also contains a library of UI elements with pre-defined styling
                and usage examples. There is also a library of react components available which can be used in
                react projects to ensure that the basic HTML building blocks follow brand guidelines.</p>

            <h3 className={styles.section_title}>Usage</h3>

            <p>You can import a full set of library styles using the compile stylesheet at:</p>

            <h3 className={styles.variant_title}>Brand CSS Bundle</h3>

            <Highlight className={styles.code_block}>
                //{window.location.host}/dist/styles/brand.bundle.css<br />
            </Highlight>

            <h3 className={styles.variant_title}>Brand SCSS Bundle</h3>

            <Highlight className={styles.code_block}>
                //{window.location.host}/dist/BrandLibrary/Global/styles.scss<br /><br />
            </Highlight>

            <h3 className={styles.variant_title}>Brand SCSS Components</h3>

            <Highlight className={styles.code_block}>
                //{window.location.host}/dist/BrandLibrary/Global/ <br /><br />

                 _typography.scss`  // Import typography.<br />
                 _colours.scss`     // Import colours.<br />
                 _fonts.scss`       // Import fonts.<br />
                 _components.scss`  // Import components.<br />
                 _icons.scss`       // Import components.<br />
            </Highlight>

            <h3 className={styles.variant_title}>React Components</h3>

            <Highlight className={styles.code_block}>
                //{window.location.host}/dist/BrandLibrary/ <br /><br />

                Button/index.tsx    // Button component (TypeScript).<br />
                Button/index.js     // Button component (React).
            </Highlight>

        </div>
      </div>
    );
  }
}

export default Overview;