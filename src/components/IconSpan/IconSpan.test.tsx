import { render, screen } from '@testing-library/react';
import IconSpan from '.';
import { IconType } from 'react-icons';

const IconStub: IconType = (props: any) => {
    return <span {...props}>Icon</span>;
};

describe('IconSpan', () => {
    it('Renders correctly', () => {
        render(<IconSpan Icon={IconStub} text="Hello World!" />);

        screen.findByText('Icon');
        screen.findByText('Hello World!');
    });

    it('Adds aria-label if defined', () => {
        render(
            <IconSpan
                Icon={IconStub}
                text="Hello World!"
                aria-label="greeting"
            />
        );

        screen.getByText('Hello World!');
        expect(
            screen.queryByText('Hello World!')?.getAttribute('aria-label')
        ).toEqual('greeting');
    });

    it('Adds aria-hidden if defined', () => {
        render(
            <IconSpan Icon={IconStub} text="Hello World!" aria-hidden={true} />
        );

        screen.getByText('Hello World!');
        expect(screen.queryByText('Icon')?.hasAttribute('aria-hidden')).toEqual(
            true
        );
    });
});
