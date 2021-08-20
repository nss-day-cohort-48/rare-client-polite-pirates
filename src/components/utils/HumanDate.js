export const HumanDate = ( date ) => {
    return new Date(date * 1000).toLocaleDateString("en-US",
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Chicago'
    })
}