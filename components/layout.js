import Header from './header';
import Footer from './footer';

export default function Layout({ children, layout, alternateLanguages }) {
  return (
    <>
      <Header header={layout.data} alternateLanguages={alternateLanguages} />
      <main>{children}</main>
      <Footer footer={layout.data} />
    </>
  );
}
