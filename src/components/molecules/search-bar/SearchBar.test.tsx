import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchBar } from "./SearchBar.tsx";
import { render } from "../../../tests/utils/test-utils";

describe("SearchBar", () => {
  let handleSearch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    handleSearch = vi.fn();
  });

  it("renders with placeholder and default input", () => {
    render(
      <SearchBar
        searchedText=""
        placeholder="Search here..."
        handleSearch={handleSearch}
      />,
    );

    const input = screen.getByPlaceholderText("Search here...");
    expect(input).toBeInTheDocument();
  });

  it("calls handleSearch after debounce time", async () => {
    render(
      <SearchBar
        searchedText=""
        placeholder="Search..."
        handleSearch={handleSearch}
        debounceTime={300}
      />,
    );

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "apple" } });

    await waitFor(
      () => {
        expect(handleSearch).toHaveBeenCalledWith("apple");
      },
      { timeout: 500 },
    ); // allow time for debounce
  });

  it("calls handleSearch when search button is clicked", () => {
    render(
      <SearchBar
        searchedText=""
        placeholder="Search..."
        handleSearch={handleSearch}
      />,
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "banana" } });

    const searchButton = screen.getByLabelText("Search text");
    fireEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalledWith("banana");
  });

  it("calls handleSearch when Enter key is pressed", () => {
    render(
      <SearchBar
        searchedText=""
        placeholder="Search..."
        handleSearch={handleSearch}
      />,
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "grape" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleSearch).toHaveBeenCalledWith("grape");
  });

  it("clears input when clear button is clicked", () => {
    render(
      <SearchBar
        searchedText=""
        placeholder="Search..."
        handleSearch={handleSearch}
      />,
    );

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "kiwi" } });

    const clearButton = screen.getByLabelText("Clear input");
    fireEvent.click(clearButton);

    expect((input as HTMLInputElement).value).toBe("");
  });

  it("shows initial searchedText when provided", () => {
    render(
      <SearchBar
        searchedText="initial"
        placeholder="Search..."
        handleSearch={handleSearch}
      />,
    );

    const input = screen.getByPlaceholderText("Search...");
    expect((input as HTMLInputElement).value).toBe("initial");
  });
});
