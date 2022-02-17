import { NextPage, NextPageWithStyle } from 'next';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: NextPageWithStyle<Props> = ({ className }) => (
  <div {...{ className }}>
    <div></div>
  </div>
);

const StyledComponent = styled(Component)``;

const Container: NextPage<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
