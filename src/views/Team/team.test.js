import { render } from '@testing-library/react';

test('should render an h2 that says players', async () => {
  const header = render(<h2>Players</h2>);
  expect(header).toMatchSnapshot();
});
