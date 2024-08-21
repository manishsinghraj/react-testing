import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("renders Greet", () => {
    render(<Greet/>);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
})