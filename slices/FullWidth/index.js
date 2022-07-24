import React from 'react';
import styled from '@emotion/styled';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Bounded from '../../components/bounded';
import Image from '../../components/image';
import FullWidthDefault from './default';
import FullWidthWithImage from './with-image';
import FullWidthCallToAction from './call-to-action';

const FullWidth = ({ slice, context }) => {
  switch (slice.variation) {
    case 'withImage':
      return <FullWidthWithImage slice={slice} />;
    case 'callToAction':
      return <FullWidthCallToAction slice={slice} context={context} />;
    case 'default':
      return <FullWidthDefault slice={slice} />;
  }
};

export default FullWidth;
