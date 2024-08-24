import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application - getByLabelText", () => {
    test("renders correctly", () => {
        render(<Application />);

        //getByLabelText
        // Targeting input by label "Name"
        const nameInput = screen.getByLabelText("Name");
        expect(nameInput).toBeInTheDocument();

        // Targeting textarea by label "Bio"
        const bioTextarea = screen.getByLabelText("Bio");
        expect(bioTextarea).toBeInTheDocument();

        // Targeting select by label "Job location"
        const jobLocationSelect = screen.getByLabelText("Job location");
        expect(jobLocationSelect).toBeInTheDocument();

        // Targeting checkbox by partial label match
        const termsCheckbox = screen.getByLabelText(/terms and conditions/i);
        expect(termsCheckbox).toBeInTheDocument();
    })
});

