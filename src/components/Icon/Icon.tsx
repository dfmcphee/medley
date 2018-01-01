import * as React from 'react';

import * as styles from './Icon.css';

export interface Props {
  src: string;
}

class Icon extends React.Component<Props, {}> {
  render() {
    const {src} = this.props;

    return (
      <svg className={styles.Icon} dangerouslySetInnerHTML={{ __html: src }} />
    );
  }
}

export default Icon;
