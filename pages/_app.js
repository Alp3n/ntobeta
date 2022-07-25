import '../styles/globals.css';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { linkResolver, repositoryName } from '../prismicio';

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      {/* <PrismicPreview repositoryName={repositoryName}> */}
      <Component {...pageProps} />
      {/* </PrismicPreview> */}
    </PrismicProvider>
  );
}
