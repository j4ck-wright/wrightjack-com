import { render, screen } from '@testing-library/react';
import IconCta from '.';
import { UI } from '@/types/ui';

describe('IconCta', () => {
    it.only('Renders correctly', () => {
        const medias = ['Github', 'LinkedIn', 'Twitter'] as const;

        medias.forEach((media: UI.SocialMedias) => {
            render(
                <IconCta
                    href={media.toLowerCase()}
                    alt={`${media} alt title`}
                    media={media}
                />
            );

            const icon = screen.getByTitle(`${media} alt title`);
            expect(icon.getAttribute('href')).toBe(media.toLowerCase());
        });
    });
});
