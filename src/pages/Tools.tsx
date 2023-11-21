import { FC } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';

const style = {
}

const Root: FC = () => {
  return (
    <DefaultLayout>
      <div style={style}>Hello world.</div>
    </DefaultLayout>
  );
};

export default Root;