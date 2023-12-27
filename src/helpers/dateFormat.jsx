export function dateFormat(date){
    const shortFormat = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('nl-NL', shortFormat);
}