export const checkHeaderOrder = (ctx: string) => {
    let lastHeaderIndex: number | undefined;
    for (const line of ctx.split('\n')) {
        if (line.startsWith('#')) {
            const headerLevel = line.split(' ')[0]?.length as number;

            if (!lastHeaderIndex) {
                lastHeaderIndex = headerLevel;
                continue;
            }

            if (headerLevel - lastHeaderIndex > 1) {
                return false;
            }

            if (headerLevel > lastHeaderIndex) {
                lastHeaderIndex = headerLevel;
                continue;
            }

            if (headerLevel === lastHeaderIndex) {
                lastHeaderIndex = headerLevel;
                continue;
            }

            return false;
        }
    }
    return true;
};
