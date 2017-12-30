import * as React from 'react';
import * as styles from './Button.scss';

export interface Props {
  onClick?(target: EventTarget): void;
}

class Button extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {children} = this.props;

    return (
      <button className={styles.Button} onClick={this.handleClick}>
        {children}
      </button>
    );
  }

  private handleClick(event: React.MouseEvent<HTMLElement>) {
    const {onClick} = this.props;
    if (!onClick) { return; }

    onClick(event.target);
  }
}

export default Button;
