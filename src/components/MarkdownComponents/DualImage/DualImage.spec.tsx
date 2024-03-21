import { render, screen } from '@testing-library/react';
import DualImage from '.';

vi.mock('@/components/MarkdownComponents/SingleImageStretch', () => ({
    default: () => {
        return <div>SingleImage</div>;
    },
}));

describe('Dual Image', () => {
    it('Renders correctly', () => {
        render(
            <DualImage
                leftSrc="/post-assets/example/trees.jpeg"
                leftAlt="left-alt"
                leftCaption="caption"
                rightSrc="/post-assets/example/trees.jpeg"
                rightAlt="right-alt"
                rightCaption="caption"
            />
        );
        expect(screen.queryAllByText('SingleImage').length).toEqual(2);
    });
});
