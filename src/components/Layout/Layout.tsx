import * as React from 'react';
import * as styles from './Layout.css';

export interface Props {
  title?: string;
}

class Layout extends React.Component<Props, {}> {
  render() {
    const {children, title} = this.props;

    const titleMarkup = title
      ? (
        <h1>{title}</h1>
      ) : null;

    return (
      <div className={styles.Layout}>
        {titleMarkup}
        <div className={styles.Items}>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
