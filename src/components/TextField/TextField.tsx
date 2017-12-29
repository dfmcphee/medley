import * as React from 'react';
import * as styles from './TextField.scss';

export interface Props {
  label: string;
  value: string;
  id: string;
  onChange?(value: string, id: string): void;
}

class Card extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const {label, value, id} = this.props;
    
    return (
      <div className={styles.TextField}>
        <label htmlFor={id}>{label}</label>
        <input type="text" value={value} id={id} onChange={this.handleChange} />
      </div>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {onChange} = this.props;
    if (!onChange) { return; }

    onChange(event.target.value, event.target.id);
  }
}

export default Card;
