import { describe, expect, it } from "vitest";
import { getByText } from "@testing-library/dom";
import { html } from "./page-module";

function dom() {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div;
}

describe("Page module", () => {
  it("renders page module", async () => {
    const container = dom();

    expect(getByText(container, "This is a page module")).toBeTruthy();
  });
});
