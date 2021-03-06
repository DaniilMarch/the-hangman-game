import React from "react";
import MenuLink from "../buttons/MenuLink";
import { connect } from "react-redux";
import NewUserForm from "./NewUserForm";

const WonDisplay = ({ user }) => {
  const renderContent = user.token ? (
    <div>
      <h1>You won!</h1>
      <MenuLink to="/game" onClick={() => window.location.reload()}>
        play again
      </MenuLink>
      <MenuLink to="/stats">stats</MenuLink>
    </div>
  ) : (
    <div>
      <h1>You won!</h1>
      <NewUserForm />
      <MenuLink to="/game" onClick={() => window.location.reload()}>
        play again
      </MenuLink>
      <MenuLink to="/stats">stats</MenuLink>
    </div>
  );
  return renderContent;
};

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  {}
)(WonDisplay);
