import { render, screen } from '@testing-library/react';
import ImageStretch from '.';

vi.mock('next/image', () => ({
    default: ({ alt, src }: { alt: string; src: string }) => {
        return <img src={src} alt={alt} />;
    },
}));

describe('ImageStretch', () => {
    it('Renders correctly', () => {
        render(
            <ImageStretch
                src="/my-picture"
                alt="alt-text"
                caption="caption of my picture"
            />
        );

        screen.getByText('caption of my picture');
        expect(screen.getByAltText('alt-text').getAttribute('src')).toEqual(
            '/my-picture'
        );
    });

    it('Renders without alt', () => {
        render(
            <ImageStretch
                src="/my-picture"
                alt=""
                caption="caption of my picture"
            />
        );

        screen.getByText('caption of my picture');
        expect(screen.getByRole('img').getAttribute('alt')).toEqual('');
    });

    it('Renders without caption', () => {
        render(<ImageStretch src="/my-picture" alt="alt-text" />);

        expect(screen.getByAltText('alt-text').getAttribute('src')).toEqual(
            '/my-picture'
        );

        expect(screen.getByTestId('image-stretch').childElementCount).toEqual(
            1
        );
    });
});
