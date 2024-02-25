import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>Employer Dashboard</h1>
        <p>
          The task is to create a simple dashboard application which will
          display a list of users (see below). You should be able to click on a
          user and it will open up a modal with the option to edit or delete the
          user.
        </p>
        <p>
          Clicking edit will take you to a new page with the information on the
          user displayed in a form. There should be the option to also delete
          the user here.
        </p>
      </div>
    </>
  );
};

export default Header;
