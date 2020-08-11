import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HeaderItem } from '../molecule/HeaderItem';
import DefaultLink from '../atom/DefaultLink';

export const ButtonAppBar = () => (
    <StyledAppBar position="static" color="default">
      <ToolBar>
        <LeftArea>
          <HeaderTitle variant="h6">
            <DefaultLink>
              Shitumon
            </DefaultLink>
          </HeaderTitle>
        </LeftArea>
        <RightArea>
          <HeaderItem/>
        </RightArea>
      </ToolBar>
    </StyledAppBar>
);

const StyledAppBar = styled(AppBar)`
  display: block;
`;
const ToolBar = styled(Toolbar)`
  max-width: 1024px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
const LeftArea = styled.div`
  display: flex;
`;
const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  font-weight: 800;
`;
const RightArea = styled.div``;