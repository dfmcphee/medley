import * as React from 'react';

import * as styles from './Theme.css';

export type ColorPalette = {
  [key: string]: {
    base: string,
    [key: string]: string;
  }
};
export interface Config {
  colorPalette?: ColorPalette;
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

const defaultConfig = {
  colorPalette: {
    blue: {
      base: '#3336DB',
      light: '#0092F2',
      dark: '#1D1F7A',
    },
    green: {
      base: '#00B936',
    },
    red: {
      base: '#FF4052',
    },
    white: {
      base: '#FFFFFF',
    },
    gray: {
      base: '#757575',
      lighter: 'rgb(247, 248, 245)',
      light: '#BDBDBD',
      dark: '#404040', 
      darker: '#1A1A1A',
    },
    shade: {
      base: 'rgba(0, 0, 0, 0.15)',
    }
  },
  colorSemantics: {
    primary: 'blue',
    bodyText: ['gray', 'darker'],
    subduedText: ['gray', 'dark'],
    invertedText: 'white',
    navBackground: ['gray', 'lighter'],
    shadow: 'shade',
    positive: 'green',
    negative: 'red',
    info: ['blue', 'light'],
  }
};

export default function Theme({config, children}: Props) {
  const themeStyles = config ? configureThemeStyles(config) : configureThemeStyles({});
  
  return (
    <div className={styles.Theme} style={themeStyles}>
      {children}
    </div>
  );
}

function configureThemeStyles(config: Config) {
  const themeConfig = Object.assign(defaultConfig, config);

  if (!themeConfig.colorPalette) { return {}; }

  let themeStyles = {};

  // Set palette variables
  Object.keys(themeConfig.colorPalette).forEach(color => {
    Object.keys(themeConfig.colorPalette[color]).forEach(shade => {
      themeStyles[`--color-${color}-${shade}`] = themeConfig.colorPalette[color][shade];
    });
  });

  // Set semantic variables
  Object.keys(themeConfig.colorSemantics).forEach(key => {
    const color = Array.isArray(themeConfig.colorSemantics[key])
      ? `${themeConfig.colorSemantics[key][0]}-${themeConfig.colorSemantics[key][1]}`
      : `${themeConfig.colorSemantics[key]}-base`;
    themeStyles[`--color-${key}`] = `var(--color-${color})`;
  });

  return themeStyles;
}
