import Greating from "./Greating";
import { render, screen } from "@testing-library/react";

describe("Greating component", () => {
    test("renders Hello World as a text", () => {
        render(<Greating />);
        const helloWorldElement = screen.getByText("Hello World");
        expect(helloWorldElement).toBeInTheDocument();
    });
});
