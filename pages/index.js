import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/';
import Layout from '../components/layout';

export default function Home({ page, layout, products, album, doc }) {
  return (
    <Layout layout={layout} alternateLanguages={page.alternate_languages}>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ products, album }}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const client = createClient();

  const page = await client.getByUID('homepage', 'homepage', { lang: locale });
  const layout = await client.getSingle('layout', { lang: locale });
  const products = await client.getAllByType('product', { lang: locale });
  const album = await client.getSingle('album', { lang: locale });

  return {
    props: {
      page,
      layout,
      products,
      album,
      doc: page,
    },
  };
}
