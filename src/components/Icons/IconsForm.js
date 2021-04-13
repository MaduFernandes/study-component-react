import React from "react";

//Icons
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

import "../../css/index.css";

const IconsForm = () => {
  return (
    <div id="container-icon">
      <MdEmail class="icon" />
      <SiFacebook class="icon" />
      <FaTwitter class="icon" />
    </div>
  );
};

export default IconsForm;
