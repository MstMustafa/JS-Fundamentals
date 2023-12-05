function ForeignLanguage(country) {
    switch (country.toLowerCase()) {
        case 'england':
        case 'usa':
            console.log('English');
            break;
        case 'spain':
        case 'argentina':
        case 'mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
    }
}
