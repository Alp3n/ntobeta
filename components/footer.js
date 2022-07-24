import styled from '@emotion/styled';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import Bounded from './bounded';

const Footer = ({ footer }) => {
  return (
    <footer className='WTF'>
      <StyledBounded id={`${footer.footerID}`}>
        <PrismicRichText
          field={footer.footerTitle}
          components={{
            heading1: ({ children }) => <StyledTitle>{children}</StyledTitle>,
          }}
        />
        <StyledGrid>
          <PrismicLink href={`tel: ${footer.footerPhoneOne[0].text}`}>
            <PrismicRichText field={footer.footerPhoneOne} />
          </PrismicLink>
          <PrismicLink href={`tel: ${footer.footerPhoneTwo[0].text}`}>
            <PrismicRichText field={footer.footerPhoneTwo} />
          </PrismicLink>
          <PrismicLink href={`mailto: ${footer.footerEmail[0].text}`}>
            <PrismicRichText field={footer.footerEmail} />
          </PrismicLink>
          <PrismicLink href={`https://${footer.footerWebsite[0].text}`}>
            <PrismicRichText field={footer.footerWebsite} />
          </PrismicLink>
        </StyledGrid>
      </StyledBounded>
    </footer>
  );
};

export default Footer;

const StyledBounded = styled(Bounded)`
  div.innerDiv {
    display: grid;
    place-content: center;
    text-align: center;
    padding: 64px 0;
    gap: 30px;
  }

  @media only screen and (min-width: 640px) {
    div.innerDiv {
      padding: 150px 0;
      gap: 44px;
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  p {
    color: #1a2c42;
  }
  > :hover p {
    color: #2e4f78;
    opacity: 0.8;
  }
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-size: 34px;
  @media only screen and (min-width: 640px) {
    font-size: 80px;
  }
`;
