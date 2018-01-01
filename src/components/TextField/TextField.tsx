import * as React from 'react';
import * as classnames from 'classnames';

import * as styles from './TextField.css';

export interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
}

interface State {
  focused: boolean;
}

class TextField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  state = {
    focused: false,
  };

  render() {
    const {label, value, id, ...rest} = this.props;
    const {focused} = this.state;
    
    const className = classnames(
      styles.TextField,
      {
        [styles.focused]: focused,
      } 
    );
    
    return (
      <div className={className}>
        <label className={styles.Label} htmlFor={id}>{label}</label>
        <input
          {...rest}
          className={styles.Input}
          value={value}
          id={id}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {onChange} = this.props;
    if (!onChange) { return; }

    onChange(event);
  }

  private handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({focused: true});
  }

  private handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ focused: false });
  }
}

export default TextField;
