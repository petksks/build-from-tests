import { render, screen, fireEvent } from "@testing-library/react";
import PokemonVote from ".";

describe("Testing PokemonVote Display Features", () => {
  test("Check if All Essential Elements are Rendered", () => {
    render(<PokemonVote />);

    const pokemonTitles = screen.getAllByRole("heading", { level: 3 });
    const votingButtons = screen.getAllByTestId(/vote-/i); // Selecting only the Vote buttons
    const votingScores = screen.getAllByTestId("vote-count");

    expect(pokemonTitles).toHaveLength(3);
    expect(votingButtons).toHaveLength(3);
    expect(votingScores).toHaveLength(3);
  });

  test("Ensure Winner's Display is Present", () => {
    render(<PokemonVote />);
    const leaderBoard = screen.getByRole("heading", { level: 2 });
    expect(leaderBoard).toBeVisible();
  });

  test("Verify Multiple Input Fields and Buttons for Name Changes", () => {
    render(<PokemonVote />);
    const nameChangeInputs = screen.getAllByPlaceholderText("Enter new name");
    const nameChangeSubmitButtons = screen.getAllByText("Change Name");

    expect(nameChangeSubmitButtons).toHaveLength(3);
    expect(nameChangeInputs).toHaveLength(3);
  });
});

describe("Interaction Tests for PokemonVote", () => {
  test("Name Change Inputs Work for Each Pokemon", async () => {
    render(<PokemonVote />);

    const inputs = screen.getAllByPlaceholderText("Enter new name");
    const names = ["Venusaur", "Charmeleon", "Wartortle"];
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: names[index] } });
      expect(input.value).toBe(names[index]);
    });
  });
});
