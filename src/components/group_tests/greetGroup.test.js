import { render, screen } from "@testing-library/react"
import GreetGroup from "./GreetGroup";

describe('Greet', () => {
    test("GreetTDD renders correctly", () => {
        render(<GreetGroup />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    });

    test("GreetTDD renders with name", () => {
        render(<GreetGroup name={"Manish"} />);
        const textElement = screen.getByText("Hello Manish");
        expect(textElement).toBeInTheDocument();
    })
})

