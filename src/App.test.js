import { render, screen } from "@testing-library/react";
import BookingForm from 'src/components/sections/reservePages/BookingFor';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})