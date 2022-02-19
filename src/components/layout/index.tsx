import styled from '@emotion/styled';
import { FCX } from 'react';
import Sidebar from './sidebar';

import GlobalStyle from './global-style';

const Component: FCX = ({ children, className }) => (
  <>
    <GlobalStyle />
    <div {...{ className }}>
      <Sidebar />
      <main>{children}</main>
    </div>
  </>
);

const StyledComponent = styled(Component)`
  display: grid;
  grid-template:
    'sidebar main' 1fr
    'footer footer' 300px /
    minmax(200px, 300px) 1fr;

  > main {
    grid-area: main;
  }
`;

export default StyledComponent;
