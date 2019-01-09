import * as React from 'react';
import '!style-loader!css-loader!sass-loader!./_icons.scss';

export interface Props{ icon: string }
export interface State{}

class Icon extends React.Component<Props, State> {
  render() {
    const className = "icon-" + this.props.icon;
    return (
      <div className={className}></div>
    );
  }
}

export default Icon;