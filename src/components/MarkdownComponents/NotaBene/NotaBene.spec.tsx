import { render, screen } from '@testing-library/react';
import NotaBene from '.';

describe('NotaBene', () => {
    it('Renders correctly', () => {
        render(<NotaBene content="Hello World!" />);

        screen.getByText('Hello World!');
    });

    it('Renders correctly', () => {
        render(
            <NotaBene content="You can view [more posts here](link-to-post)" />
        );
        expect(
            screen.getByText('more posts here').getAttribute('href')
        ).toEqual('link-to-post');
    });
});
