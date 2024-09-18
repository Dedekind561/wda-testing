import { test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Quiz from "./components/Quiz";

test("renders the initial UI", () => {
  // pass props through to a component
  // render the component we are testing
  // check we get the initial phrase

  // Arrange: define props
  // Act: render the component we're testing
  // Assert: check the functionality

  const props = {
    words: [
      { word: "I", display: true },
      { word: "think", display: false },
      { word: "therefore", display: true },
      { word: "I", display: false },
      { word: "am", display: true },
    ],
    options: ["think", "therefore", "swim", "wonder"],
  };

  render(<Quiz {...props} />);

  screen.getByText("I _ therefore _ am"); // will throw an error if it can't element with this text
});

test("can update the phrase with chosen word", () => {
  const props = {
    words: [
      { word: "I", display: true },
      { word: "think", display: false },
      { word: "therefore", display: true },
      { word: "I", display: false },
      { word: "am", display: true },
    ],
    options: ["think", "therefore", "swim", "wonder"],
  };
  render(<Quiz {...props} />);
  // access the button element
  // click on it
  // check the phrase has been updated

  fireEvent.click(screen.getByRole("button", { name: /think/ }));
  screen.getByText("I think therefore _ am");

  fireEvent.click(screen.getByRole("button", { name: /swim/ }));
  screen.getByText("I think therefore swim am");
});

test("can check if user has inputted correct answer", () => {
  const words = [
    { word: "I", display: true },
    { word: "think", display: false },
    { word: "therefore", display: true },
    { word: "I", display: false },
    { word: "am", display: true },
  ];
  const props = {
    words,
    options: ["think", "therefore", "swim", "wonder", "I"],
    answer: words.map(({ word }) => word).join(" "),
  };
  render(<Quiz {...props} />);

  fireEvent.click(screen.getByRole("button", { name: /think/ }));
  screen.getByText("I think therefore _ am");

  fireEvent.click(screen.getByRole("button", { name: /I/ }));
  screen.getByText("I think therefore I am");

  fireEvent.click(screen.getByRole("button", { name: /check/i }));

  screen.getByText("Well done!");
});
