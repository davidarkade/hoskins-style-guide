import * as React from 'react';

import Icon from '../../../../../BrandLibrary/Icon';

const styles = require('./icon_preview.css');

export interface Props{ icon: string, children: any }
export interface State{}

class IconPreview extends React.Component<Props, State> {
  render() {
    return (
      <div className={'col-1'}>
          <div className={styles.icon_preview}>
             <Icon icon={this.props.icon} />
          </div>
      </div>
    );
  }
}

export default IconPreview;