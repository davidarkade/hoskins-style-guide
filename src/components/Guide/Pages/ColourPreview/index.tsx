import * as React from 'react';

const styles = require('./colour_preview.css');

export interface Props{ widthClassName: string, className: string, children: any }
export interface State{}

class ColourPreview extends React.Component<Props, State> {
  render() {
    return (
      <div className={this.props.widthClassName}>
          <div className={`${this.props.className} ${styles.colour_preview}`}></div>
          {this.props.children}
      </div>
    );
  }
}

export default ColourPreview;