import * as React from 'react';

export interface Props{ className?: string, children: any }
export interface State{}

class Button extends React.Component<Props, State> {
  render() {
    return (
      <button type="button" className={'button '+this.props.className}>
          {this.props.children}
      </button>
    );
  }
}

export default Button;