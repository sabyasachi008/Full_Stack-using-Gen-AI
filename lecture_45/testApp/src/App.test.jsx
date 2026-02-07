import {  render, screen} from '@testing-library/react';
import App from './App';


test('Renders greeting heading', () => {
    render(<App />);
    expect(
        screen.getByRole('heading', {name: /Greetings for testing purpose/i})
    ).toBeInTheDocument();
});