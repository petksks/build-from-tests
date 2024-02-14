import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component Rendering Tests", () => {
  test("Renders Main Title", () => {
    render(<App />);
    const mainTitle = screen.getByRole("heading", { level: 1 });
    expect(mainTitle).toBeTruthy();
  });

  test("Displays Current Vote Winner", () => {
    render(<App />);
    const voteWinnerDisplay = screen.getByRole("heading", { level: 2 });
    expect(voteWinnerDisplay).toBeVisible();
  });

  test("User Input Field and Submit Button Existence", () => {
    render(<App />);
    const nameInputField = screen.getByPlaceholderText("Enter your name");
    const submitVoteButton = screen.getByRole("button", { name: /submit/i });
    expect(nameInputField).toBeInTheDocument();
    expect(submitVoteButton).toBeInTheDocument();
  });

  test("Pokemon Information Rendered Correctly", () => {
    render(<App />);
    const pokemonNames = screen.getAllByRole("heading", { level: 3 });
    const voteButtons = screen.getAllByRole("button", { name: /Vote/i });
    const voteCounts = screen.getAllByTestId("vote-count");

    expect(pokemonNames).toHaveLength(3);
    expect(voteButtons).toHaveLength(3);
    expect(voteCounts).toHaveLength(3);
  });

  test("Multiple User Inputs Rendered", () => {
    render(<App />);
    const nameChangeInputs = screen.getAllByPlaceholderText("Enter new name");
    const nameChangeButtons = screen.getAllByRole("button", { name: /Change name/i });

    expect(nameChangeButtons).toHaveLength(3);
    expect(nameChangeInputs).toHaveLength(3);
  });

  test("Footer Component Render Check", () => {
    render(<App />);
    const footerComponent = screen.getByTestId("footer");
    expect(footerComponent).toBeVisible();
  });
});

describe("User Input Interaction Tests", () => {
  test("User Input Submission", () => {
    render(<App />);
    expect(screen.queryByTestId("user-input-display")).toBeNull();

    fireEvent.change(screen.getByPlaceholderText("Enter your name"), { target: { value: "" } }); 
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByTestId("user-input")).toBeVisible();
  });

  test("Display Value Changes Upon Input Submission", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), { target: { value: "Timo Calzone" } }); 
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  
    expect(screen.getByPlaceholderText("Enter your name")).toHaveValue(""); 
  });  
});
