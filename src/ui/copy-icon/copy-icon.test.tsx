import { render, screen } from "@testing-library/react";
import { CopyIcon } from "./copy-icon";

describe("CopyIcon", () => {

  test("general", async () => {
    render(<CopyIcon />);
    const icon = await screen.findByRole("img");
    expect(icon).toBeTruthy();

    expect(icon.getAttribute("width")).toBe("24");
    expect(icon.getAttribute("height")).toBe("24");

  });

  test("custom size", async () => {

    render(<CopyIcon size={48} />);
    const icon = await screen.findByRole("img");
    expect(icon).toBeTruthy();

    expect(icon.getAttribute("width")).toBe("48");
    expect(icon.getAttribute("height")).toBe("48");

  });

  test("custom color", async () => {
    render(<CopyIcon color="green" />);
    const icon = await screen.findByRole("img");
    expect(icon).toBeTruthy();

    expect(icon.getAttribute("fill")).toBe("green");
    expect(icon.getAttribute("stroke")).toBe("green");

  });
});
