import * as React from 'react';
import * as styles from './Card.scss';
import Heading from '../Heading';

/**
 * Card properties.
 */
export interface Props {
  /** Title of card */
  title?: string;
  /** Featured image */
  image?: string;
}

export class Card extends React.Component<Props, {}> {
  render() {
    const {title, children, image} = this.props;
    const imageMarkup = image
      ? (
        <div
          className={styles.imageWrapper}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ) : null;
    const titleMarkup = title
      ? (
        <Heading>{title}</Heading>
      ) : null;
    return (
      <div className={styles.Card}>
        <div className={styles.Header}>
          {imageMarkup}
        </div>
        <div className={styles.Body}>
          {titleMarkup}
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
