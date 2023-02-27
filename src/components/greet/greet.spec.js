import { render, screen } from "@testing-library/react"
import Greet from "./greet"


describe("Greet", () => {
    it('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
  
   
}) 

describe("Nested", () => {
    it("renders correctly", () => {
        render(<Greet name="Fadayomi"/> )
        const textElement = screen.getByText("Hello Fadayomi")
        expect(textElement).toBeInTheDocument()
    })
})