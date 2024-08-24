# React Testing

## RTL & Jest

React Testing Library (RTL) and Jest are commonly used together to test React components. Jest serves as the testing framework, while RTL provides utilities to render and interact with your components in a way that simulates how users interact with your app.

### Example Test File: `src/App.test.js`

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### Explanation and Information

1. **Importing Dependencies**:
   - `render`: A function from RTL used to render a React component for testing.
   - `screen`: An object from RTL that provides utilities to query the rendered output, like finding elements.
   - `App`: The React component being tested.

2. **Writing a Test**:
   - The `test` function defines a single test case. It takes a descriptive string (the test's name) and a callback function where the test logic is written.
   - Inside the test, `render(<App />)` renders the `App` component.
   - `screen.getByText(/learn react/i)` searches for an element containing the text "learn react". The `i` in the regex pattern makes the search case-insensitive.
   - `expect(linkElement).toBeInTheDocument()` asserts that the found element is indeed present in the DOM.

3. **Running the Test**:
   - To run the test, use the following command in your terminal:
     ```bash
     npm test
     ```
   - Jest will automatically find and execute all test files that match the pattern `*.test.js` or `*.spec.js`.

### Types of Tests

1. **Unit Tests**:
   - Test individual components or functions in isolation.
   - Example: Testing if a button renders with the correct text.

2. **Integration Tests**:
   - Test how multiple components work together.
   - Example: Testing a form component to ensure it correctly handles user input and submits the data.

3. **End-to-End (E2E) Tests**:
   - Test the entire application as a user would interact with it.
   - Typically involves tools like Cypress or Selenium, not just Jest and RTL.

### Test Result

- When you run the test, Jest provides detailed feedback in your terminal.
- **Pass**: If the test passes, you'll see a green checkmark and a message indicating success.
- **Fail**: If the test fails, Jest will show a red "x" along with information about what went wrong.

Example output:
```
 PASS  src/App.test.js
  ✓ renders learn react link (35ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.087s
```

This output indicates that all tests in `App.test.js` have passed successfully.

---


# First Custom Test

In this section, you'll create a simple React component named `Greet` and write a test for it using React Testing Library (RTL) and Jest. This example will help you understand the basics of writing and running tests for custom components.

### Step 1: Create the `Greet` Component

Create a file named `Greet.jsx` in your `src` directory with the following content:

```js
// Greet.jsx
import React from 'react';

const Greet = () => {
  return (
    <div>Hello</div>
  );
};

export default Greet;
```

**Explanation**:
- The `Greet` component is a simple functional component that returns a `div` containing the text "Hello".

### Step 2: Write a Test for the `Greet` Component

Create a test file named `greet.test.js` in the same directory as `Greet.jsx` with the following content:

```js
// greet.test.js
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("renders Greet", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
});
```

**Explanation**:
1. **Importing Dependencies**:
   - `render` and `screen` are imported from RTL. `render` is used to render the `Greet` component, and `screen` is used to query the rendered DOM.
   - `Greet` is imported from the `Greet.jsx` file.

2. **Defining the Test**:
   - The `test` function defines a test case named "renders Greet".
   - Inside the test, `render(<Greet />)` renders the `Greet` component.
   - `screen.getByText("Hello")` searches for an element containing the exact text "Hello".
   - `expect(textElement).toBeInTheDocument()` asserts that the found element is indeed present in the DOM.

### Step 3: Run the Test

To run the test, open your terminal and execute the following command:

```bash
npm test
```

Jest will find and run all tests, including the one you just created for the `Greet` component.

### Expected Test Result

If everything is set up correctly, you should see output similar to this:

```
 PASS  src/greet.test.js
  ✓ renders Greet (25ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.432s
```

This output indicates that the test for the `Greet` component passed successfully.

---

# Simulating a Test Failure

In this section, we'll simulate a test failure to understand how Jest and React Testing Library handle errors. We'll modify the `greet.test.js` to look for text that doesn't exist in the `Greet` component.

### Step 1: Modify the Test to Simulate a Failure

In your `greet.test.js` file, change the test to look for text that is not present in the `Greet` component. Update the file as follows:

```js
// greet.test.js
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("renders Greet", () => {
    render(<Greet />);
    const textElement = screen.getByText("Goodbye");
    expect(textElement).toBeInTheDocument();
});
```

**Explanation**:
- The test now tries to find an element containing the text "Goodbye" instead of "Hello". Since the `Greet` component only renders "Hello", this test will fail.

### Step 2: Run the Test to Observe the Failure

Run the test in your terminal using the same command:

```bash
npm test
```

### Expected Test Failure Result

You should see output indicating that the test failed:

```
 FAIL  src/greet.test.js
  ✕ renders Greet (45ms)

  ● renders Greet

    TestingLibraryElementError: Unable to find an element with the text: Goodbye. 
    This could be because the text is broken up by multiple elements. 
    ...

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.836s
```

**Explanation of the Failure**:
- The test fails because `screen.getByText("Goodbye")` cannot find an element with the text "Goodbye". The `Greet` component only renders "Hello", so the test assertion fails.

- Jest provides a detailed error message, showing that the text "Goodbye" could not be found. This output is crucial for debugging tests and ensuring that your components behave as expected.

### Step 3: Fixing the Test

To resolve the failure, simply revert the text in the test back to "Hello":

```js
// greet.test.js
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("renders Greet", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
});
```

Running the test again with this correction should pass:

```
 PASS  src/greet.test.js
  ✓ renders Greet (30ms)
```

---

# Test-Driven Development (TDD) with React

This section demonstrates how to use Test-Driven Development (TDD) to create a React component. TDD is a software development process where tests are written before the code that makes the tests pass. This approach ensures that the codebase remains well-tested and that all features are implemented according to specifications.

### TDD Example: `GreetTDD` Component

We will create a `GreetTDD` component that renders a greeting message. If a `name` prop is passed, the component should render "Hello" followed by the name.

#### Step 1: Write the Test

We start by writing tests for the component before implementing its logic. The tests are placed in `component/TDD/greetTDD.test.js`.

```js
// component/TDD/greetTDD.test.js
import { render, screen } from "@testing-library/react";
import GreetTDD from "./GreetTDD";

test("GreetTDD renders correctly without name", () => {
    render(<GreetTDD />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
});

test("GreetTDD renders with name", () => {
    render(<GreetTDD name="Manish" />);  // Pass the name prop here
    const textElement = screen.getByText("Hello Manish");
    expect(textElement).toBeInTheDocument();
});
```

**Explanation**:
1. **Test 1**: Checks that the `GreetTDD` component renders "Hello" when no `name` prop is provided.
2. **Test 2**: Checks that the `GreetTDD` component renders "Hello Manish" when the `name` prop is provided as "Manish".

#### Step 2: Implement the Component

With the tests in place, the next step is to implement the `GreetTDD` component to pass these tests. The component is created in `component/TDD/GreetTDD.jsx`.

```js
// component/TDD/GreetTDD.jsx
import React from 'react';

const GreetTDD = (props) => {
  return (
    <div>Hello {props.name}</div>
  );
};

export default GreetTDD;
```

**Explanation**:
- The `GreetTDD` component is a functional component that accepts a `name` prop. It renders "Hello" followed by the value of `props.name`. If `name` is not provided, it will render "Hello undefined" (which can be refined later).

#### Step 3: Run the Tests

With the component implemented, you can now run the tests to ensure everything works as expected:

```bash
npm test
```

**Expected Output**:

```
 PASS  component/TDD/greetTDD.test.js
  ✓ GreetTDD renders correctly without name (25ms)
  ✓ GreetTDD renders with name (20ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.298s
```

Both tests should pass, indicating that the component works correctly for the cases tested.

### Summary

In this example, we've used the TDD approach to build the `GreetTDD` component. We started by writing tests that specify the desired behavior, and then we implemented the component to pass those tests. This process helps ensure that your component meets its requirements and reduces the likelihood of bugs.

---




# Running and Watching Specific Tests in Jest

If you have a large number of tests but are only interested in running or watching specific ones, Jest provides several ways to focus on the tests you care about.

When working with a large codebase, you may want to focus only on specific tests. Jest provides several ways to do this, making it easier to debug or develop features without running the entire test suite.

### Method 1: Using `.only` to Focus on Specific Tests

Jest allows you to focus on individual tests or test suites by using the `.only` method. This method will run only the test or test suite marked with `.only`, ignoring all others.

```js
// Only this test will run
test.only("renders GreetTDD correctly without name", () => {
  render(<GreetTDD />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

// This test will be skipped
test("renders GreetTDD with name", () => {
  render(<GreetTDD name="Manish" />);
  const textElement = screen.getByText("Hello Manish");
  expect(textElement).toBeInTheDocument();
});
```

### Method 2: Running Tests by Filename Pattern

If you want to run or watch only the tests in specific files, you can use the `-t` option (for test name patterns) or `p` (for filename patterns) in Watch Mode.

#### Running Tests by Test Name Pattern

You can use the `-t` option to run tests with names that match a specific pattern. For example, to run all tests that include the word "Greet":

```bash
npm test -- -t="Greet"
```

This will run all tests with names that match the pattern "Greet".

#### Running Tests by Filename Pattern in Watch Mode

In Watch Mode, you can filter tests by filename pattern using the `p` key. After starting Jest in Watch Mode:

1. Press `p` to filter by filename.
2. Enter the filename or part of the filename you want to focus on.

For example, to run tests only in files related to "Greet":

```bash
npm test -- --watch
```

Then, in Watch Mode, press `p` and type `Greet` to filter and run only those tests.

### Method 3: Using Test Name Regex in Watch Mode

You can also filter which tests to run based on test names using a regex pattern in Watch Mode:

1. Start Jest in Watch Mode:

    ```bash
    npm test -- --watch
    ```

2. Press `t` to filter by test name.
3. Enter a regex pattern to match the test names you want to run.

For example, if you have a test named "GreetTDD renders with name" and want to run it, you can type `GreetTDD` as the pattern.

### Method 4: Specifying Test Files with `--testPathPattern`

You can use the `--testPathPattern` option to specify which test files to run:

```bash
npm test -- --testPathPattern="Greet"
```

This will run only the test files that match the pattern "Greet".



### Method 5:  Committing and Watching Specific Tests in Jest

When working on a feature or debugging a specific issue, you might want to commit certain tests to Git and continue watching them using Jest. This ensures that your work is version-controlled and that the tests continue to run automatically as you make further changes.

### Step 1: Write or Modify Tests

Start by writing or modifying the tests you want to focus on. You might want to use `.only` to isolate specific tests:

```js
// greetTDD.test.js
import { render, screen } from "@testing-library/react";
import GreetTDD from "./GreetTDD";

test.only("GreetTDD renders with name", () => {
    render(<GreetTDD name="Manish" />);
    const textElement = screen.getByText("Hello Manish");
    expect(textElement).toBeInTheDocument();
});
```

### Step 2: Commit the Test Changes

Once you've written or modified your tests, commit them to your Git repository:

```bash
git add component/TDD/greetTDD.test.js
git commit -m "Add test for GreetTDD component with name prop"
```

### Step 3: Watch the Committed Tests in Jest

After committing your changes, you can continue to use Jest’s Watch Mode to automatically re-run the tests whenever related files are updated:

```bash
npm test -- --watch
```

In Watch Mode, you can:

- Press `p` to filter by filename and watch only the tests in the committed file.
- Press `t` to filter by test name, allowing you to focus on the committed test cases.

### Step 4: Continue Development and Testing

As you continue to develop, any changes you make will trigger Jest to re-run the relevant tests. This allows you to ensure that your committed tests continue to pass as you make changes to your codebase.

### Step 5: Finalize and Commit All Changes

After completing your development, you can remove `.only` from the test cases to include all tests in your suite and then commit the final changes:

```bash
git add .
git commit -m "Finalize feature and include all tests"
```

### Conclusion

These methods allow you to efficiently run or watch specific tests, focusing on the ones you need without running the entire suite. This can save time and streamline your development process, especially when debugging or working on a specific feature.

---

# Grouping Tests in Jest

When working on a project with multiple tests, it's often useful to group related tests together. Jest provides the `describe` block to organize your tests into groups, making your test suite more readable and easier to manage.

## What is a `describe` Block?

The `describe` block is a function in Jest that allows you to group together related tests. This can be particularly useful when you have several tests for the same component or functionality.

- **Structure**: Inside a `describe` block, you can have multiple `test` blocks. Each `test` block represents an individual test case.
- **Purpose**: Grouping tests with `describe` helps you organize your test suite and provides better context in your test reports.

## Example: Grouping Tests for `GreetGroup` Component

In this example, we have a React component named `GreetGroup` that takes a `name` prop and renders a greeting message. We will write tests to check if it renders correctly with and without the `name` prop.

### `GreetGroup` Component

```js
// component/TDD/GreetGroup.jsx
import React from 'react';

const GreetGroup = (props) => {
  return (
    <div>Hello {props.name}</div>
  );
};

export default GreetGroup;
```

### Grouping Tests for `GreetGroup`

Here, we use the `describe` block to group the tests related to the `GreetGroup` component:

```js
// component/TDD/greetGroup.test.js
import { render, screen } from "@testing-library/react";
import GreetGroup from "./GreetGroup";

describe('Greet', () => {
    test("GreetGroup renders correctly without name", () => {
        render(<GreetGroup />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    });

    test("GreetGroup renders with name", () => {
        render(<GreetGroup name={"Manish"} />);
        const textElement = screen.getByText("Hello Manish");
        expect(textElement).toBeInTheDocument();
    });
});
```

### Explanation

- **`describe('Greet', () => {...})`**: This block groups all tests related to the `GreetGroup` component under the "Greet" category.
- **`test("GreetGroup renders correctly without name", () => {...})`**: This test checks if the `GreetGroup` component renders "Hello" when no `name` prop is provided.
- **`test("GreetGroup renders with name", () => {...})`**: This test checks if the `GreetGroup` component renders "Hello Manish" when the `name` prop is provided as "Manish".

### Test Output

When you run these tests, you'll see a grouped output in your test report:

```bash
 PASS  src/components/group_tests/greetGroup.test.js
  Greet
    √ GreetGroup renders correctly without name (93 ms)
    √ GreetGroup renders with name (4 ms)
    
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.95 s
```

### Benefits of Grouping Tests

- **Improved Organization**: Grouping tests makes it easier to navigate and maintain your test suite.
- **Better Reporting**: The test report output is more structured, showing related tests together under a common heading.
- **Contextual Understanding**: Grouped tests provide better context, making it clear which component or functionality the tests are associated with.

### Summary

Using `describe` blocks to group tests in Jest helps you create a well-organized and readable test suite. It’s particularly useful when you have multiple related tests, allowing you to see the results of grouped tests in a clear and structured manner.

---

# Test Coverage with Jest

## Overview

Test coverage measures how much of your code is tested by your test suite. Jest provides built-in support for generating coverage reports, allowing you to see which parts of your code are covered by tests and which are not. This helps ensure that your tests are comprehensive and that your code is robust.

## Running Coverage

To generate a test coverage report with Jest, you can use the `--coverage` flag. This command will run your tests and produce a coverage report showing various metrics such as statement, branch, function, and line coverage.

### Coverage Command

In your `package.json`, you have the following scripts:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "coverage": "npm test -- --coverage"
}
```

To run the coverage report, use:

```bash
npm run coverage
```

Alternatively, you can run:

```bash
npm test -- --coverage
```

Both commands will execute your tests and generate a coverage report.

### Example Coverage Output

When you run the coverage command, Jest will output a summary of coverage metrics in the terminal:

```
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |                   
 TDD             |     100 |      100 |     100 |     100 |                   
  GreetTDD.jsx   |     100 |      100 |     100 |     100 |                   
 greet           |     100 |      100 |     100 |     100 |                   
  Greet.js       |     100 |      100 |     100 |     100 | 
 group_tests     |     100 |      100 |     100 |     100 | 
  GreetGroup.jsx |     100 |      100 |     100 |     100 | 
-----------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        5.384 s
Ran all test suites related to changed files.
```

### Coverage Metrics

- **% Stmts**: Percentage of statements covered by tests.
- **% Branch**: Percentage of branches (e.g., if statements) covered by tests.
- **% Funcs**: Percentage of functions covered by tests.
- **% Lines**: Percentage of lines of code covered by tests.
- **Uncovered Line #s**: Line numbers of code that are not covered by tests.

### Viewing Coverage Reports

In addition to the terminal output, Jest generates an HTML coverage report in the `coverage` directory. You can view this report in your browser for a detailed breakdown:

1. Open the `coverage` directory.
2. Open `index.html` in a web browser.

**To open the report:**

- **On macOS/Linux**: `open coverage/index.html`
- **On Windows**: `start coverage/index.html`

### Summary

Using Jest’s coverage reporting tools helps ensure that your tests cover a significant portion of your code. By running `npm run coverage`, you can easily track test coverage and make informed decisions about where to add or improve tests.

---

# Assertions in Jest

## Overview

Assertions are the foundation of automated testing. They are statements that check whether a specific condition is true. If the condition is true, the test passes; if not, the test fails. Using assertions, you can verify that your code behaves as expected and meets the requirements.

## Common Jest Assertions

Jest provides a wide range of assertion methods that you can use to validate different types of conditions. Here are some commonly used assertions:

- **`toBe(value)`**: Checks if a value is strictly equal (`===`) to the expected value.
  ```js
  expect(2 + 2).toBe(4);
  ```

- **`toEqual(value)`**: Checks if a value deeply equals the expected value, useful for objects and arrays.
  ```js
  expect({ name: 'John' }).toEqual({ name: 'John' });
  ```

- **`toBeTruthy()`**: Checks if a value is truthy (evaluates to true in a boolean context).
  ```js
  expect('hello').toBeTruthy();
  ```

- **`toBeFalsy()`**: Checks if a value is falsy (evaluates to false in a boolean context).
  ```js
  expect('').toBeFalsy();
  ```

- **`toBeNull()`**: Checks if a value is `null`.
  ```js
  expect(null).toBeNull();
  ```

- **`toBeDefined()`**: Checks if a value is defined (not `undefined`).
  ```js
  expect(variable).toBeDefined();
  ```

- **`toContain(item)`**: Checks if an array or string contains a specific item.
  ```js
  expect([1, 2, 3]).toContain(2);
  ```

- **`toHaveLength(number)`**: Checks if an array or string has the expected length.
  ```js
  expect([1, 2, 3]).toHaveLength(3);
  ```

- **`toMatch(regex)`**: Checks if a string matches a regular expression.
  ```js
  expect('hello world').toMatch(/world/);
  ```

- **`toThrow(error)`**: Checks if a function throws an error.
  ```js
  function badFunction() {
    throw new Error('Error occurred');
  }
  expect(badFunction).toThrow('Error occurred');
  ```

## Example: Testing the `GreetTDD` Component

Let's look at an example where we test the `GreetTDD` component using assertions.

### `GreetTDD.jsx` Component

```js
import React from 'react';

const GreetTDD = (props) => {
  return (
    <div>Hello {props.name}</div>
  );
};

export default GreetTDD;
```

### Test Cases with Assertions

```js
import { render, screen } from "@testing-library/react";
import GreetTDD from "./GreetTDD";

test("GreetTDD renders correctly", () => {
  render(<GreetTDD />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();  // Assertion to check if "Hello" is rendered
});

test("GreetTDD renders with name", () => {
  render(<GreetTDD name="Manish" />);
  const textElement = screen.getByText("Hello Manish");
  expect(textElement).toBeInTheDocument();  // Assertion to check if "Hello Manish" is rendered
});
```

### Explanation of Assertions

- **`toBeInTheDocument()`**: This assertion checks if the selected element is present in the DOM. In our tests, we're verifying that the "Hello" text is rendered correctly.

- **`screen.getByText()`**: This method is used to select an element by its text content. In the first test, it checks for "Hello", and in the second test, it checks for "Hello Manish".

### Test-Driven Development (TDD) Approach

In a TDD approach, you write tests before writing the actual code. The idea is to define the expected behavior of your component through assertions and then implement the code that satisfies those assertions.

For example, you would write the above test cases first and then create the `GreetTDD` component to make the tests pass.

## Conclusion

Assertions are a powerful tool for verifying the behavior of your code. By using Jest's built-in assertion methods, you can ensure that your components and functions work as expected, leading to more reliable and maintainable code.

---

# React Testing Library (RTL) Queries

## Overview

React Testing Library (RTL) provides a set of methods to query and interact with elements in your React components during testing. These queries help you select elements based on different attributes like role, label text, placeholder text, and more. Understanding how to use these queries effectively is key to writing robust and maintainable tests.

## Types of Queries

### 1. **`getBy` Queries**
- **Description**: `getBy` queries throw an error if no matching element is found. They are suitable for finding elements that are expected to be present in the DOM immediately.
- **Example**:
  ```javascript
  const buttonElement = screen.getByRole('button');
  ```

### 2. **`queryBy` Queries**
- **Description**: `queryBy` queries return `null` if no matching element is found. They are useful when you expect an element might not be present.
- **Example**:
  ```javascript
  const alertElement = screen.queryByText('Error');
  ```

### 3. **`findBy` Queries**
- **Description**: `findBy` queries return a promise that resolves when the element is found or rejects if it is not found within the timeout. They are useful for testing asynchronous code.
- **Example**:
  ```javascript
  const loadingElement = await screen.findByText('Loading...');
  ```

### 4. **`getAllBy` Queries**
- **Description**: `getAllBy` queries return all matching elements. If no elements match, it throws an error.
- **Example**:
  ```javascript
  const listItems = screen.getAllByRole('listitem');
  ```

### 5. **`queryAllBy` Queries**
- **Description**: `queryAllBy` queries return all matching elements or an empty array if no elements are found.
- **Example**:
  ```javascript
  const menuItems = screen.queryAllByRole('menuitem');
  ```

### 6. **`findAllBy` Queries**
- **Description**: `findAllBy` queries return a promise that resolves when all matching elements are found or rejects if none are found within the timeout.
- **Example**:
  ```javascript
  const images = await screen.findAllByAltText('user avatar');
  ```

## Suffixes: How to Use Them

The suffixes help you specify which attribute you want to query by:

- **`Role`**: Finds elements by their ARIA role.
  - Example: `getByRole('button')`
- **`LabelText`**: Finds elements by the text associated with a `<label>`.
  - Example: `getByLabelText('Username')`
- **`PlaceholderText`**: Finds elements by their `placeholder` attribute.
  - Example: `getByPlaceholderText('Enter your name')`
- **`Text`**: Finds elements by their text content.
  - Example: `getByText('Submit')`
- **`DisplayValue`**: Finds elements by the current value of the form element.
  - Example: `getByDisplayValue('John Doe')`
- **`AltText`**: Finds elements by the `alt` attribute, typically used for images.
  - Example: `getByAltText('Profile picture')`
- **`Title`**: Finds elements by their `title` attribute.
  - Example: `getByTitle('Close')`
- **`TestId`**: Finds elements by the `data-testid` attribute.
  - Example: `getByTestId('custom-element')`

## Examples

Here’s how you might use these queries in a test:

```javascript
import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);
        
        const nameElement = screen.getByRole("textbox"); // Query by Role
        expect(nameElement).toBeInTheDocument();

        const jobLocation = screen.getByRole("combobox"); // Query by Role
        expect(jobLocation).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox"); // Query by Role
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole("button"); // Query by Role
        expect(submitElement).toBeInTheDocument();
    });

    test("checks the placeholder text", () => {
        render(<Application />);
        
        const nameInput = screen.getByPlaceholderText("Enter your name");
        expect(nameInput).toBeInTheDocument();
    });

    test("finds an element by testId", () => {
        render(<Application />);
        
        const customElement = screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();
    });
});
```

## Best Practices

- Prefer `getBy` and `getAllBy` for elements that should always be present.
- Use `queryBy` and `queryAllBy` for elements that may or may not be present.
- Use `findBy` and `findAllBy` for asynchronous operations.

## Conclusion

Understanding and utilizing the different types of queries provided by RTL is essential for writing effective and reliable tests. By leveraging the appropriate query method and suffix, you can more accurately target elements in your component's DOM, making your tests more meaningful and resilient.

---

# Application Component Testing with `getByRole`

## Overview

This section explains how to test the `Application` component using Jest and React Testing Library (RTL). The focus is on using the `getByRole` query to select elements by their roles in the component.

## Application Component

The `Application` component renders a simple form that includes:

- A text input for "Name"
- A dropdown (select) for "Job location"
- A checkbox for agreeing to terms and conditions
- A submit button

### Component Code

```javascript
// src/components/getByRole/application/Application.jsx

export const Application = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" /> I agree to the terms and
                    conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};
```

## Testing the Application Component

### Test Structure

The test suite for the `Application` component uses the `getByRole` method from React Testing Library to verify the presence of form elements. Each form element has an associated ARIA role, which makes `getByRole` an ideal choice for selecting these elements.

### Test Code

```javascript
// src/components/getByRole/application/application.test.jsx

import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);
        
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();

        const jobLocation = screen.getByRole("combobox");
        expect(jobLocation).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole("button");
        expect(submitElement).toBeInTheDocument();
    });
});
```

### Explanation of Test Cases

- **`getByRole("textbox")`**: Selects the text input for the "Name" field.
- **`getByRole("combobox")`**: Selects the dropdown for "Job location."
- **`getByRole("checkbox")`**: Selects the checkbox for terms and conditions.
- **`getByRole("button")`**: Selects the submit button.

### Running the Tests

To run the tests, use the following command in your terminal:

```bash
npm test
```

You should see output indicating that all tests have passed.

### Directory Structure

Here’s the directory structure for this component and its tests:

```
src
│
├── components
│   └── getByRole
│       └── application
│           ├── Application.jsx
│           └── application.test.jsx
│
├── App.js
├── App.test.js
├── index.js
└── README.md
```

This structure helps in organizing your components and tests logically within the project.

## Conclusion

Using the `getByRole` method provides a reliable way to select elements in your tests based on their roles, which improves accessibility testing. The above tests ensure that the `Application` component renders all the necessary form elements correctly.

---

# React Testing Library: `getByRole` with Options

## Overview

In React Testing Library, `getByRole` is a powerful query for selecting elements by their ARIA roles. However, when there are multiple elements with the same role on the page, using `getByRole` alone can result in errors due to ambiguity. To handle this, you can pass additional options to `getByRole` to precisely target the element you want to interact with.

## Usage of `getByRole`

### Basic Usage

The basic `getByRole` query is used to find elements based on their ARIA role. For example, if you want to find a button, you might use:

```javascript
const submitElement = screen.getByRole("button");
expect(submitElement).toBeInTheDocument();
```

### Handling Multiple Elements with the Same Role

When there are multiple elements with the same role (e.g., multiple `textbox` elements), using `getByRole` without options will result in an error:

```javascript
// This will throw an error if there are multiple textboxes
const nameElement = screen.getByRole("textbox");
```

To avoid this, you can use the `name` option to specify the label text associated with the element:

### Using the `name` Option

The `name` option allows you to target an element by the text content of its associated label:

```javascript
const nameElement = screen.getByRole("textbox", {
    name: "Name" // This targets the input with the label "Name"
});
expect(nameElement).toBeInTheDocument();
```

### Example

Here’s a complete example demonstrating the use of `getByRole` with options in a form that includes multiple elements with the same role:

```javascript
export const Application = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio" />
            </div>
            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" /> I agree to the terms and
                    conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};

import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        // Target the specific textbox by its label
        const nameElement = screen.getByRole("textbox", {
            name: "Name"
        });
        expect(nameElement).toBeInTheDocument();

        const jobLocation = screen.getByRole("combobox");
        expect(jobLocation).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole("button");
        expect(submitElement).toBeInTheDocument();
    });
});
```

## Options for `getByRole`

Here are some common options you can pass to `getByRole`:

- **`name`**: The accessible name of the element, usually derived from the element’s label or content.
  - Example: `{ name: 'Submit' }`

- **`checked`**: For form controls, whether the element is checked.
  - Example: `{ checked: true }`

- **`selected`**: For options within a `select` element, whether the option is selected.
  - Example: `{ selected: true }`

- **`level`**: For heading elements (`h1`, `h2`, etc.), specifies the heading level.
  - Example: `{ level: 1 }`

## Best Practices

- Always use `getByRole` with options when there are multiple elements with the same role to avoid ambiguity.
- Leverage the `name` option to target elements based on their label text, which enhances the readability and reliability of your tests.

## Conclusion

Using `getByRole` with options allows you to write more precise and maintainable tests by disambiguating between elements with the same role. This is especially useful in complex forms and interfaces where multiple interactive elements share the same role.

---

# React Testing Library: `getByLabelText`

## Overview

In React Testing Library, `getByLabelText` is a query used to select form elements based on their associated labels. This is particularly useful for testing forms, where you want to ensure that inputs, text areas, and other form controls are correctly labeled and accessible.

## Why Use `getByLabelText`?

Using `getByLabelText` ensures that your tests are closely aligned with how users interact with the form. When a user interacts with a form, they typically read the labels associated with each input. `getByLabelText` mimics this behavior by selecting elements based on their labels, making your tests more reliable and user-centric.

## Basic Usage

The `getByLabelText` query finds elements by matching them with their associated `<label>` element. It works with all types of form controls, including `input`, `textarea`, `select`, and others.

### Example

Let’s consider a form with inputs for a user's name, bio, job location, and a checkbox for terms and conditions:

```javascript
export const Application = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio" />
            </div>
            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" /> I agree to the terms and
                    conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};
```

### Testing with `getByLabelText`

Here’s how you can write tests using `getByLabelText` to target these elements:

```javascript
import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test("renders the form correctly", () => {
        render(<Application />);

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
    });
});
```

## Best Practices

- **Use Labels Effectively**: Always associate form elements with labels using the `htmlFor` attribute. This improves accessibility and makes your tests more robust.
- **Case Insensitivity**: You can use regular expressions with `getByLabelText` to match labels in a case-insensitive manner, as shown in the checkbox example.
- **Clear Labeling**: Ensure that your form labels are clear and descriptive, as this will make your tests more intuitive and easier to maintain.

## Conclusion

`getByLabelText` is a valuable tool in React Testing Library for selecting and interacting with form elements based on their labels. It promotes accessibility and mirrors the way users interact with forms, resulting in tests that are both user-focused and maintainable.

---

# React Testing Library: `getByPlaceholderText`

## Overview

The `getByPlaceholderText` query in React Testing Library allows you to select form elements based on the placeholder text within them. This query is particularly useful when testing forms where placeholders are used to guide users on what input is expected in a particular field.

## Why Use `getByPlaceholderText`?

Placeholder text is often used as a hint for the user, providing an example or instruction inside an input field before the user enters any data. Testing for these placeholders can ensure that your application is providing the right guidance and maintaining consistent user experience.

## Basic Usage

The `getByPlaceholderText` query targets input elements (such as `input`, `textarea`, etc.) by matching the text inside the `placeholder` attribute.

### Example

Let’s consider a simple form where a user is required to enter their email and password, both of which have placeholder text.

```javascript
export const LoginForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};
```

### Testing with `getByPlaceholderText`

You can write tests to ensure that the placeholders are rendered correctly:

```javascript
import { render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
    test("renders the email and password inputs correctly", () => {
        render(<LoginForm />);

        // Targeting email input by its placeholder text
        const emailInput = screen.getByPlaceholderText("Enter your email");
        expect(emailInput).toBeInTheDocument();

        // Targeting password input by its placeholder text
        const passwordInput = screen.getByPlaceholderText("Enter your password");
        expect(passwordInput).toBeInTheDocument();
    });
});
```

## Best Practices

- **Be Descriptive with Placeholders**: Ensure that your placeholder text is descriptive and informative, as it serves as a key guide for users.
- **Placeholder Text vs. Labels**: While placeholders can provide helpful hints, they should not replace labels. Always use labels in conjunction with placeholders to ensure accessibility.
- **Avoid Overusing Placeholders**: Placeholders should be used sparingly and only when they add value to the user experience. Overusing them can lead to cluttered interfaces and diminished accessibility.

## Conclusion

`getByPlaceholderText` is a straightforward yet powerful query in React Testing Library that helps you test the presence and accuracy of placeholders in your forms. By ensuring that your placeholders are correct, you can maintain a better user experience and provide clear guidance to your users.

---