import * as React from 'react';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import * as classnames from 'classnames';

import '../../global.css';

export interface Props {
  classes: {
    root: string;
    header: string;
    content: string;
    nav: string;
    bar: string;
    headerLink: string;
    footer: string;
    hasSidebar: string;
    sidebar: string;
    logo: string;
  };
  title: string;
  homepageUrl: string;
  children: React.ReactNode;
  toc: React.ReactNode;
  hasSidebar?: boolean;
}

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }: any) => ({
  root: {
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
  },
});

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar }: Props) {
  return (
    <div className={classnames(classes.root, hasSidebar && classes.hasSidebar)}>
      <main className={classes.content}>
        {children}
        <footer className={classes.footer}>
          <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
        </footer>
      </main>
      {hasSidebar && (
        <div className={classes.sidebar}>
          <div className={classes.logo}>
            <Logo>{title}</Logo>
          </div>
          {toc}
        </div>
      )}
    </div>
  );
}

export default Styled(styles)(StyleGuideRenderer);
