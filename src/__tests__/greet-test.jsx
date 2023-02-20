import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/Greet"


describe("Greet", () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
  
   
}) 

describe("Nested", () => {
    test("renders correctly", () => {
        render(<Greet name="Fadayomi"/> )
        const textElement = screen.getByText("Hello Fadayomi")
        expect(textElement).toBeInTheDocument()
    })
})