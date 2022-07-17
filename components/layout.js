import Header from './header';
import Footer from './footer';

export default function Layout({ children, layout }) {
  return (
    <>
      <Header header={layout.data} />
      <main>{children}</main>
      <Footer footer={layout.data} />
    </>
  );
}
