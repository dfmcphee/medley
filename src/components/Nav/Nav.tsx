import * as React from 'react';
import * as classnames from 'classnames';
import autobind from 'autobind-decorator';

import { Button, Icon } from '../';

import closeIcon from '../../icons/close.svg';

import * as styles from './Nav.css';

export interface Item {
  url: string;
  content: string;
}

export interface Props {
  branding: React.ReactNode;
  items: Item[];
}

interface State {
  visible: boolean;
}

class Nav extends React.Component<Props, State> {
  state = {
    visible: false,
  };

  render() {
    const {branding, items} = this.props;
    const {visible} = this.state;

    const menuClassName = classnames(styles.Menu, {
      [styles.visible]: visible,
    });

    const itemsMarkup = items.map((item, index) => {
      return (
        <li key={index} className={styles.Item}>
          <a href={item.url} className={styles.Link}>
            {item.content}
          </a>
        </li>
      );
    });

    const menuToggleMarkup = visible
      ? null
      : <Button onClick={this.handleMenuOpen} transparent>Menu</Button>;

    const closeToggleMarkup = visible
      ? (
          <div className={styles.CloseToggle}>
            <Button onClick={this.handleMenuClose} transparent>
                                                                                                                                   <Icon src={closeIcon} />
            </Button>
          </div>
        )
      : null;

    return (
      <nav className={styles.Nav}>
        <div className={styles.Branding}>
          {branding}
        </div>
        <div className={styles.Toggle}>
          {menuToggleMarkup}
        </div>
        <div className={menuClassName}>
          <ul className={styles.Items}>
            {itemsMarkup}
          </ul>
          {closeToggleMarkup}
        </div>
      </nav>
    );
  }

  @autobind
  handleMenuOpen() {
    this.setState({visible: true});
  }

  @autobind
  handleMenuClose() {
    this.setState({visible: false});
  }
}

export default Nav;
