import * as React from 'react';

import * as styles from './Theme.css';

export interface Config {
  colorPalette?: any;
  colorSemantics?: {
    primary?: string;
    secondary?: string;
    positive?: string;
    negative?: string;
  };
}

export interface Props {
  children: React.ReactNode;
  config?: Config;
}

export default function Theme({config, children}: Props) {

  const themeStyles = config ? getThemeStyles(config) : {};
  
  return (
    <div className={styles.Theme} style={themeStyles}>
      {children}
    </div>
  );
}

function getThemeStyles(config: Config) {
  let themeStyles = {};

  if (config.colorSemantics && config.colorSemantics.primary) {
    themeStyles['--color-primary'] = config.colorSemantics.primary;
  }

  if (config.colorSemantics && config.colorSemantics.secondary) {
    themeStyles['--color-secondary'] = config.colorSemantics.secondary;
  }

  return themeStyles;
}
