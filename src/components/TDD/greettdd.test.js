// Greet should render the text hello and if a name is passed into the component It should render hello followed by the name

import { render, screen } from "@testing-library/react"
import GreetTDD from "./GreetTDD"

test("GreetTDD renders correctly", () => {
    render(<GreetTDD/>);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
});

test("GreetTDD renders with name", () => {
    render(<GreetTDD name={"Manish"}/>);
    const textElement = screen.getByText("Hello Manish");
    expect(textElement).toBeInTheDocument();
})