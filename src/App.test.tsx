import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should display categories from api", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Categories")).toBeVisible();
      expect(screen.getAllByTestId("cat")).toHaveLength(20);
    });
  });

  it("should add category to select list on choose", async () => {
    render(<App />);

    let targetCategory: HTMLElement | null = null;

    await waitFor(() => {
      targetCategory = screen.getByText("smartphones");
      expect(targetCategory).toBeVisible();
    });

    userEvent.click(targetCategory as any);

    await waitFor(() => {
      expect(screen.getAllByTestId("chosen-element")).toHaveLength(1);
    });
  });

  it("should display products for selected category", async () => {
    render(<App />);

    await waitFor(() => {
      const targetCategory = screen.getByText("smartphones");
      userEvent.click(targetCategory as any);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("product-item")).toHaveLength(5);
    });
  });
});
