import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import PortalModal from '../../components/portal-modal';
import MyModal from '../../components/modal';
import Bounded from '../../components/bounded';

const TwoColumns = ({ slice, context }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(context);
  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const nextItem = () => {
    let currentItem = context.indexOf(selectedItem);
    if (currentItem === context.length - 1) return;
    setSelectedItem(context[currentItem + 1]);
  };

  const previouseItem = () => {
    let currentItem = context.indexOf(selectedItem);
    if (currentItem === 0) return;
    setSelectedItem(context[currentItem - 1]);
  };
  return (
    <>
      <StyledBounded as='section' id={`${slice.primary.sliceID}`}>
        <StyledLeftColumn>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => <StyledTitle>{children}</StyledTitle>,
            }}
          />
          <StyledGrid>
            {slice.items.map((item, i) => (
              <PrismicRichText
                key={i}
                field={item.paragraph}
                components={{
                  paragraph: ({ children }) => <p>{children}</p>,
                }}
              />
            ))}
          </StyledGrid>
        </StyledLeftColumn>
        <StyledRightColumn>
          {prismicH.isFilled.group(context)
            ? context.map((item) => (
                <StyledProduct key={item.uid} onClick={() => openModal(item)}>
                  <PrismicRichText
                    field={item.data.productName}
                    components={{
                      paragraph: ({ children }) => (
                        <p className='name'>{children}</p>
                      ),
                    }}
                  />
                  <StyledArrowBox>
                    <StyledArrow>{`>`}</StyledArrow>
                  </StyledArrowBox>
                </StyledProduct>
              ))
            : null}
        </StyledRightColumn>
      </StyledBounded>
      <PortalModal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <MyModal
          setIsOpen={setModalIsOpen}
          item={selectedItem}
          nextItem={nextItem}
          previouseItem={previouseItem}
        />
      </PortalModal>
    </>
  );
};

export default TwoColumns;

const StyledBounded = styled(Bounded)`
  div.innerDiv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 64px 0;
  }
  @media only screen and (min-width: 640px) {
    div.innerDiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 150px 0;
    }
  }
`;

const StyledTitle = styled.h1`
  margin-bottom: 44px;
  font-size: 38px;
  @media only screen and (min-width: 640px) {
    font-size: 80px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;

  @media only screen and (min-width: 640px) {
    width: 80%;
  }
`;
const StyledLeftColumn = styled.div`
  line-height: 30px;
  @media only screen and (min-width: 640px) {
    line-height: 35px;
  }
`;
const StyledRightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  align-content: space-between;
  @media only screen and (min-width: 640px) {
    border-left: 1px solid #707070;
    padding-left: 10%;
  }
`;

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: 90% 1fr 28px;
  grid-template-areas: 'name . arrow';
  p {
    line-height: 28px;
  }
  &:hover p.name {
    cursor: pointer;
    color: #2e4f78;
    opacity: 0.7;
  }
  &:hover div {
    cursor: pointer;
    opacity: 0.7;
  }

  @media only screen and (min-width: 640px) {
    grid-template-columns: 85% 1fr 38px;
    p {
      grid-area: name;
      font-size: 28px;
      line-height: 42px;
      width: 80%;
    }
  }
`;

const StyledArrowBox = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 28px;
  background-color: #2e4f78;
  grid-area: arrow;
  @media only screen and (min-width: 640px) {
    height: 38px;
  }
`;

const StyledArrow = styled.p`
  font-weight: 800;
  color: white;
  @media only screen and (min-width: 640px) {
    p {
      font-size: 32px;
      width: 80%;
    }
  }
`;
