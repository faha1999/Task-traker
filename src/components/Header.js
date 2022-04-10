const Header = (props) => {
  return <header>{props.title}</header>;
};

Header.defaultProps = {
  title: 'task tracker',
};

export default Header;
