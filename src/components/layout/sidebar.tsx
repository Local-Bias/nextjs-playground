import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import Link from 'next/link';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div>
      <Link href='/'>🏠 Home</Link>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  border-right: 1px solid #0000000a;
  > div {
    min-height: 100vh;
    position: sticky;
    top: 0;
    padding: 1em;
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
