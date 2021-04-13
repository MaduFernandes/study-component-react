import React from "react";

import "../../css/index.css";

const AccountForm = () => {
  return (
    <div class="container-input">
      <form id="form" noValidate autoComplete="off">
        <input
          class="input-class"
          id="input"
          type="email"
          placeholder="Email"
          autoComplete
        ></input>
        <input
          class="input-class"
          id="input"
          type="password"
          placeholder="Password"
          autoComplete
        ></input>
      </form>
    </div>
  );
};

export default AccountForm;
