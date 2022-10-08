export const getDateString = (type, data) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (type === 'birthdate') {
        const date_array = data.split('/');   
        return `Born ${ months[parseInt(date_array[1]) - 1] } ${ date_array[0] }, ${ date_array[2] }`;
    } else if (type === 'joined') {
        const timestamp = parseInt(data);
        const date = new Date(timestamp);
        return `Joined ${months[date.getMonth()]} ${date.getFullYear()}`
    }
};