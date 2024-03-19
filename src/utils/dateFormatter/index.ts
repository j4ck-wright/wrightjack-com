export const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleString('en-gb', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
        year: 'numeric',
    });

    if (newDate === 'Invalid Date') {
        return '';
    }

    return newDate;
};
