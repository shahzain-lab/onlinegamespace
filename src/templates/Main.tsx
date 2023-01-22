import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}
    <Header />
      {props.children}
    <Footer />
  </div>
);

export { Main };
