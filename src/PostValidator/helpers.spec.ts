import { checkHeaderOrder } from './helpers';

describe('PostValidator helpers', () => {
    describe('checkHeaderOrder', () => {
        it('returns true in descending order', () => {
            expect(
                checkHeaderOrder(`## Heading 2\n### Heading 3`)
            ).toBeTruthy();
        });

        it('returns true with identical headers', () => {
            expect(
                checkHeaderOrder(`## Heading 2\n## Heading 2 again`)
            ).toBeTruthy();
        });

        it('returns true if no headers', () => {
            expect(checkHeaderOrder(`no headers here`)).toBeTruthy();
        });

        it('returns true with large set of headers', () => {
            const ctx = `# Header 1 lorem ipsum\n## Header 2 lorem\n## Header 2 again\n## Another header 2\n### Header 3`;
            expect(checkHeaderOrder(ctx)).toBeTruthy();
        });

        it('returns false in ascending order', () => {
            expect(checkHeaderOrder(`### Heading 3\n## Heading 3`)).toBeFalsy();
        });

        it('returns false while skipping header level', () => {
            expect(
                checkHeaderOrder(`## Heading 2\n#### Heading 4!?!?!`)
            ).toBeFalsy();
        });
    });
});
