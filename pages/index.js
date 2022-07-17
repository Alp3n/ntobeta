import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/';
import Layout from '../components/layout';

export default function Home({ page, layout, products }) {
  return (
    <Layout layout={layout}>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={products}
      />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('homepage', 'homepage');
  const layout = await client.getSingle('layout', 'layout');
  const products = await client.getAllByType('product');

  return {
    props: {
      page,
      layout,
      products,
    },
  };
}
