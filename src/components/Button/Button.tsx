import * as React from 'react';
import * as classnames from 'classnames';

import * as styles from './Button.css';

export interface Props {
  primary?: boolean;
  transparent?: boolean;
  onClick?(target: EventTarget): void;
}

class Button extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {children, primary, transparent} = this.props;

    const className = classnames(styles.Button, {
      [styles.primary]: primary,
      [styles.transparent]: transparent,
    });

    return (
      <button className={className} onClick={this.handleClick}>
        {children}
      </button>
    );
  }

  private handleClick(event: React.MouseEvent<HTMLElement>) {
    const {onClick} = this.props;

    const target = event.target as HTMLButtonElement;
    target.blur();

    if (!onClick) { return; }

    onClick(event.target);
  }
}

export default Button;
