import { render, screen, fireEvent } from "@testing-library/react";
import PokemonInputField from ".";

describe("PokemonInputField Component Functionality", () => {
  test("Renders an input field and a button", () => {
    render(<PokemonInputField />);

    const inputField = screen.getByPlaceholderText("Enter new name");
    const submitButton = screen.getByRole("button", { name: "Change Name" });

    expect(inputField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Input field updates on user input", () => {
    const mockSubmit = jest.fn();
    render(<PokemonInputField onNewNameSubmit={mockSubmit} />);

    const inputField = screen.getByPlaceholderText("Enter new name");
    fireEvent.change(inputField, { target: { value: "Charizard" } });

    const submitButton = screen.getByRole("button", { name: "Change Name" });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith("Charizard");
    expect(inputField.value).toBe("");
  });

  test("Does not submit empty input", async () => {
    const mockSubmit = jest.fn();
    render(<PokemonInputField onNewNameSubmit={mockSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: "Change Name" }));

    await screen.findByRole("button", { name: "Change Name" }); // Waiting for potential state updates
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
