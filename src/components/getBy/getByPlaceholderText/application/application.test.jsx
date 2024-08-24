import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("LoginForm - getByPlaceholderText", () => {
    test("renders the email and password inputs correctly", () => {
        render(<Application />);

        // Targeting email input by its placeholder text
        const emailInput = screen.getByPlaceholderText("Enter your email");
        expect(emailInput).toBeInTheDocument();

        // Targeting password input by its placeholder text
        const passwordInput = screen.getByPlaceholderText("Enter your password");
        expect(passwordInput).toBeInTheDocument();
    });
});