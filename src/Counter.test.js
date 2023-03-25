/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import { act } from "react-dom/test-utils";
import Counter from "./Counter";
global.fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
global.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders loading...", async () => {
  jest.spyOn(global, "fetch").mockImplementation(async () => {
    return {
      then: function () {
        return {
          then: function () {},
        };
      },
    };
  });

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    ReactDOMClient.createRoot(container).render(<Counter />);
  });

  expect(container.querySelector("img").alt).toBe(`Views: Loading...`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it("renders fetched count", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      text: () => Promise.resolve(10),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    ReactDOMClient.createRoot(container).render(<Counter />);
  });

  expect(container.querySelector("img").alt).toBe(`Views: ${10}`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it("renders error if response is not number", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      text: () => Promise.resolve("page not found"),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    ReactDOMClient.createRoot(container).render(<Counter />);
  });

  expect(container.querySelector("img").alt).toBe(`Views: Error :(`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it("renders error", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject("E"));

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    ReactDOMClient.createRoot(container).render(<Counter />);
  });

  expect(container.querySelector("img").alt).toBe(`Views: Error :(`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
