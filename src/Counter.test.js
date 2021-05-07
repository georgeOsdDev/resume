import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "./Counter";
global.fetch = require('node-fetch');

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders loading...", async () => {
  jest.spyOn(global, "fetch").mockImplementation(async () => {
    return {
      then: function () {
        return {
          then: function(){}
        }
      }
    }
  });

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Counter/>, container);
  });

  expect(container.querySelector("img").alt).toBe(`Views: Loading...`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it("renders fetched count", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      text: () => Promise.resolve(10)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Counter/>, container);
  });

  expect(container.querySelector("img").alt).toBe(`Views: ${10}`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

it("renders error", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.reject('E')
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Counter/>, container);
  });

  expect(container.querySelector("img").alt).toBe(`Views: Error :(`);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
