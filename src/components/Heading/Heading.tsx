import * as React from 'react';
import * as styles from './Heading.scss';

export interface Props {
  children: React.ReactNode;
}

class Heading extends React.Component<Props, {}> {
  render() {
    const { children } = this.props;

    return (
      <h2 className={styles.Heading}>
        {children}
      </h2>
    );
  }
}

export default Heading;
