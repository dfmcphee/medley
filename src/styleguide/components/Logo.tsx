import * as React from 'react';

import Styled from 'react-styleguidist/lib/rsg-components/Styled';

import logo from './logo.svg';

const styles = ({ fontFamily, color }: any) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: fontFamily.base,
    fontSize: 18,
    fontWeight: 'normal',
    color: color.baseBackground,
  },
  image: {
    width: '2.5em',
    marginLeft: '-0.5em',
  },
});

export interface Props {
  classes: {
    logo: string,
    image: string,
  };
  children: React.ReactNode;
}

export function LogoRenderer({ classes, children }: Props) {
  return (
    <h1 className={classes.logo}>
      <img className={classes.image} src={logo} />
      {children}
    </h1>
  );
}

export default Styled(styles)(LogoRenderer);
