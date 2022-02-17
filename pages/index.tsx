import { NextPage, NextPageWithStyle } from 'next';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import Link from 'next/link';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: NextPageWithStyle<Props> = ({ className }) => (
  <div {...{ className }}>
    <div>
      <div className='emoji'>🌱</div>
      <h1>Next.js Playground</h1>

      <Link href='/ssg'>SSG</Link>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;

  > div {
    background-color: #fff;
    min-width: 50vmin;
    min-height: 50vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    border-radius: 4px;
    box-shadow: 0 5px 20px -3px #0003;
  }

  h1 {
    color: #80beaf;
  }

  .emoji {
    font-size: 120px;
    opacity: 0.6;
  }
`;

const Container: NextPage<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
