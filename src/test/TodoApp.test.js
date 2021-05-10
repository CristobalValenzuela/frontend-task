import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import TodoApp from "../TodoApp";

describe("Probamos el componente <TodoApp />", () => {
  let wrapper = shallow(<TodoApp />);

  beforeEach(() => {
    wrapper = shallow(<TodoApp />);
  });
  test("debería mostrar <TodoApp /> correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
