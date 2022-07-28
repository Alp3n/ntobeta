import styled from '@emotion/styled';

const ModalWrapper = ({
  setIsOpen,
  item,
  nextItem,
  previouseItem,
  children,
  currentItem,
}) => {
  if (!item) return null;
  return (
    <StyledModalWrapper>
      <DesktopCloseButton onClick={() => setIsOpen(false)}>
        <svg
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
        >
          <path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z' />
        </svg>
      </DesktopCloseButton>
      <ModalBody>
        {children}
        <ButtonsWrapper>
          <ArrowButton
            onClick={() => previouseItem()}
            currentItem={currentItem}
          >
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path d='M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z' />
            </svg>
          </ArrowButton>
          <ArrowButton onClick={() => nextItem()} currentItem={currentItem}>
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path d='M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z' />
            </svg>
          </ArrowButton>
          <MobileCloseButton mobile onClick={() => setIsOpen(false)}>
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z' />
            </svg>
          </MobileCloseButton>
        </ButtonsWrapper>
      </ModalBody>
    </StyledModalWrapper>
  );
};

export default ModalWrapper;

const StyledModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'body';

  @media only screen and (min-width: 1102px) {
    gap: 1rem;
    grid-template-columns: 1fr 60px;
    grid-template-areas: 'body desktopCloseButton';
  }
`;

const ModalBody = styled.div`
  background-color: white;
  grid-area: body;
  padding: 5%;
  height: 100vh;
  /* width: 100vw; */
  @media only screen and (max-width: 1101px) {
    min-width: 100vw;
  }

  @media only screen and (min-width: 1102px) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: 1px solid #707070;
    padding: 5% 5% 1% 5%;
    height: unset;
    min-width: 70vw;
  }
`;

const ButtonsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: 60px 60px 60px;
  width: 100%;
  justify-content: center;
  grid-area: buttons;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (min-width: 1102px) {
    position: relative;
    box-shadow: unset;
    grid-template-columns: 60px 60px;
    width: 120px;
    margin: 0 calc(50% - 60px);
  }
`;
const ArrowButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  width: 60px;
  height: 60px;
  padding: 6px 12px;
  border: none;
  color: black;
  background-color: transparent;
  @media only screen and (min-width: 1102px) {
    width: 60px;
    height: 60px;

    :hover {
      cursor: pointer;
      background-color: #b1b1b1;
    }
  }
`;
const MobileCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  /* font-size: 2rem; */
  font-weight: bold;
  color: black;
  border: none;
  z-index: 999999;

  @media only screen and (min-width: 1102px) {
    display: none;
  }
`;

const DesktopCloseButton = styled.button`
  display: none;
  width: 60px;
  height: 60px;
  background-color: white;
  font-weight: bold;
  color: black;
  border: none;
  z-index: 999999;
  grid-area: desktopCloseButton;

  @media only screen and (min-width: 1102px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid #707070;
    :hover {
      background-color: #b1b1b1;
      cursor: pointer;
    }
  }
`;
