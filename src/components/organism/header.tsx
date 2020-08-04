import React from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HeaderItem } from '../molecule/HeaderItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontWeight: 800
    },
  }),
);

const ToolBar = styled(Toolbar)`
  margin: 0 auto;
`;

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <ToolBar>
          <Typography variant="h6" className={classes.title}>
            shitumon
          </Typography>
          <HeaderItem />
        </ToolBar>
      </AppBar>
    </div>
  );
}