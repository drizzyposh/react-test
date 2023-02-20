import { render, screen } from "@testing-library/react"
import Greet from "./greet"


test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
})

test("Greet renders correctly", () => {
    render(<Greet name="Fadayomi"/> )
    const textElement = screen.getByText("Hello Fadayomi")
    expect(textElement).toBeInTheDocument()
})