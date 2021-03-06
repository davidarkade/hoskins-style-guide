import * as React from 'react';

class Button extends React.Component{
  render() {
    return (
      <button type="button" className={'button '+this.props.className}>
          {this.props.children}
      </button>
    );
  }
}

export default Button;