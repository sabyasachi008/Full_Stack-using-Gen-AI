import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';


//describe((App js test ))=> (
    // )

/* TestCase -1 */
// eslint-disable-next-line no-undef
test('Render learn react link', ()=> {
    render(<App />);

    const button = screen.getByText(/increment/i);
    fireEvent.click(button);
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Count : 1')).toBeInTheDocument();
})

/* TestCase -2 */
// eslint-disable-next-line no-undef
test('Test Modal open', ()=> {
    render(<App />);

    const button = screen.getByText(/open modal/i);
    fireEvent.click(button);
    // eslint-disable-next-line no-undef
    expect(screen.getByText('Modal is open')).toBeInTheDocument();

})
