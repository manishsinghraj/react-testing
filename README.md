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