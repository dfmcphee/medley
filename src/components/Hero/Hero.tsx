import * as React from 'react';
import * as styles from './Hero.css';

export interface Props {
  title: string;
  description: string;
  background: string;
}

class Hero extends React.Component<Props, {}> {
  render() {
    const {title, description, background} = this.props;

    return (
      <div
        className={styles.Hero}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className={styles.Container}>
          <div className={styles.Content}>
            <h2 className={styles.Title}>{title}</h2>
            <p className={styles.Description}>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
