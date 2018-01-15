import * as React from 'react';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';

export interface Props {
  classes: any;
  name: string;
  heading: React.ReactNode;
  pathLine?: string;
  tabButtons?: React.ReactNode;
  tabBody?: React.ReactNode;
  description?: React.ReactNode;
  docs?: React.ReactNode;
  examples?: React.ReactNode;
  isolated?: boolean;
}

const styles = ({ color, fontSize, space }: any) => ({
  root: {
    marginBottom: space[6],
  },
  header: {
    marginBottom: space[3],
  },
  tabs: {
    marginBottom: space[3],
  },
  tabButtons: {
    marginBottom: space[2],
  },
  docs: {
    color: color.base,
    fontSize: fontSize.text,
  },
});

export function ReactComponentRenderer({
  classes,
  name,
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabButtons,
  tabBody,
}: Props) {
  return (
    <div className={classes.root} id={name + '-container'}>
      {tabButtons && (
        <div className={classes.tabs}>
          <div className={classes.tabButtons}>{tabButtons}</div>
          {tabBody}
        </div>
      )}
      {examples}
    </div>
  );
}

export default Styled(styles)(ReactComponentRenderer);
