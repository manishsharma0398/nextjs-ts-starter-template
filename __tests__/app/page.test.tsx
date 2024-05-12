import IndexPage from '@app/page';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('renders a heading', () => {
    render(<IndexPage />);

    const heading = screen.getByText('Home page');

    expect(heading).toBeInTheDocument();
  });
});
