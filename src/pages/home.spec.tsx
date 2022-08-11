import { render } from '@testing-library/react';
//import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./index"

it("",() => {
  const { getByText } = render(<Home />)
  expect(getByText("Ola mundo")).toBeInTheDocument()
})

