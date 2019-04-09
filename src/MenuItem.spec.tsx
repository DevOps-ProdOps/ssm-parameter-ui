import React from "react";
import { MenuItem } from "./MenuItem";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";

describe("MenuItem", () => {
  it("renders an active Menu.Item when the URL matches", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/examples"]} initialIndex={0}>
        <>
          <MenuItem name="lemons" path="/lemons" />
          <MenuItem name="examples" path="/examples" />
        </>
      </MemoryRouter>
    );

    const lemons = component.find("a").at(0);
    expect(lemons).not.toHaveClassName("active");

    const examples = component.find("a").at(1);
    expect(examples).toHaveClassName("active");
  });

  it("renders an active Menu.Item when the URL exactly matches", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/foods"]} initialIndex={0}>
        <>
          <MenuItem name="foods" path="/foods" exactMatch />
          <MenuItem name="pizza" path="/foods/pizza" />
        </>
      </MemoryRouter>
    );

    const foods = component.find("a").at(0);
    expect(foods).toHaveClassName("active");

    const pizzas = component.find("a").at(1);
    expect(pizzas).not.toHaveClassName("active");
  });

  it("navigates away when clicked", () => {
    const history = { push: jest.fn() };

    const component = mount(
      <MemoryRouter initialEntries={["/a"]} initialIndex={0}>
        <>
          <MenuItem name="a" path="/a" />
          <MenuItem name="b" path="/b" />
          <Route path="/a" component={() => <p>a</p>} />>
          <Route path="/b" component={() => <p>b</p>} />>
        </>
      </MemoryRouter>
    );

    expect(component.find("p")).toHaveText("a");

    component
      .find("a")
      .at(1)
      .simulate("click");

    expect(component.find("p")).toHaveText("b");
  });
});
