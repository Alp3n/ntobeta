import styled from '@emotion/styled';

const Locale = ({ lang }) => {
  const code = lang.slice(0, 2).toUpperCase();

  return <StyledLocal>{code === 'UK' ? 'UKR' : 'ENG'}</StyledLocal>;
};

export default Locale;

const StyledLocal = styled.span`
  font-weight: 400;
  @media only screen and (min-width: 1102px) {
    :hover {
      padding-bottom: 31px;
      border-bottom: 4px solid #2e4f78;
      color: #5d7694;
    }
  }
`;
