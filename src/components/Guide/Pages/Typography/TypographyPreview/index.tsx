import * as React from 'react';

export interface Props{ className: string, children: any }
export interface State{}

class TypographyPreview extends React.Component<Props, State> {
  render() {
    return (
      <span className={this.props.className}>
          {this.props.children}
      </span>
    );
  }
}

export default TypographyPreview;