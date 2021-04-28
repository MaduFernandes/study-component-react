import React from "react";
import { shallow } from "enzyme";

import ButtonForm from "../../components/Buttons/ButtonForm";

describe("Button Form", () => {
  it("Renders a button", () => {
    const response = shallow(<ButtonForm />);

    expect(response).toMatchSnapshot();
  });

  it("Renders text Sing Up", () => {
    const text = "Sing Up";
    const returnSignUp = shallow(<ButtonForm>{text}</ButtonForm>);

    expect(returnSignUp.contains(text)).toEqual(true);
  });

  it("Renders text Sing In", () => {
    const text = "Sing In";
    const returnSignIn = shallow(<ButtonForm>{text}</ButtonForm>);

    expect(returnSignIn.contains(text)).toEqual(true);
  });
});
