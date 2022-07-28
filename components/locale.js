const Locale = ({ lang }) => {
  const code = lang.slice(0, 2).toUpperCase();

  return <span>{code === 'UK' ? 'UKR' : 'ENG'}</span>;
};

export default Locale;
