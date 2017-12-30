import * as React from 'react';
import * as classnames from 'classnames';

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
  /** Set image to full width */
  fullBleed?: boolean;
}

export class Card extends React.Component<Props, {}> {
  render() {
    const {title, children, image, fullBleed} = this.props;
    const imageClassnames = classnames(
      styles.imageWrapper, {
        [styles.fullBleed]: fullBleed,
      }
    );
    const imageMarkup = image
      ? (
        <div
          className={imageClassnames}
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
