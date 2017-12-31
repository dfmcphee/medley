import * as React from 'react';
import * as styles from './Nav.css';

export interface Item {
  url: string;
  content: string;
}

export interface Props {
  branding: React.ReactNode;
  items: Item[];
}

class Nav extends React.Component<Props, {}> {
  render() {
    const {branding, items} = this.props;

    const itemsMarkup = items.map((item, index) => {
      return (
        <li key={index} className={styles.Item}>
          <a href={item.url} className={styles.Link}>
            {item.content}
          </a>
        </li>
      );
    });

    return (
      <nav className={styles.Nav}>
        <div className={styles.Branding}>
          {branding}
        </div>
        <ul className={styles.Items}>
          {itemsMarkup}
        </ul>
      </nav>
    );
  }
}

export default Nav;
