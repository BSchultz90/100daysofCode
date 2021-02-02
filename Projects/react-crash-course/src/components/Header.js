import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clickity Click Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" onClick={onClick} text="Add an Item" />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
