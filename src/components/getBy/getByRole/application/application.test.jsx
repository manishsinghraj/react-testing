import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application - getByRole", () => {
    test("renders correctly", () => {
        render(<Application/>);

        // const nameElement = screen.getByRole("textbox");
        // expect(nameElement).toBeInTheDocument();

        // const jobLocation = screen.getByRole("combobox");
        // expect(jobLocation).toBeInTheDocument();

        // const termsElement = screen.getByRole("checkbox");
        // expect(termsElement).toBeInTheDocument();

        // const submitElement = screen.getByRole("button");
        // expect(submitElement).toBeInTheDocument();



        //if there is input and text area, both the roleMatcher are same - textBox, this will throw error - TestingLibraryElementError: Found multiple elements with the role "textbox" - So use Options
        // const nameElement = screen.getByRole("textbox");
        // expect(nameElement).toBeInTheDocument();

        //using Options
        const nameElement = screen.getByRole("textbox", {
            name : "Name" //target name attribute with Label as Value
        });
        expect(nameElement).toBeInTheDocument();


        const bioElement = screen.getByRole("textbox", {
            name : "Bio"
        });
        expect(bioElement).toBeInTheDocument();

    })
});

