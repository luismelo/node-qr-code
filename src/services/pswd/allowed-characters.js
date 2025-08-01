async function allowedCharacters() {
    let characters = [];
    let pswd = '';

    const length = parseInt(process.env.PASSWORD_LENGTH) || 12;

    if (process.env.UPPERCASE_LETTERS === 'true') {
        characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (process.env.LOWERCASE_LETTERS === 'true') {
        characters.push('abcdefghijklmnopqrstuvwxyz');
    }   
    if (process.env.NUMBERS === 'true') {
        characters.push('0123456789');
    }
    if (process.env.SPECIAL_CHARACTERS === 'true') {
        characters.push('!@#$%^&*()_+[]{}|;:,.<>?');
    }

    for (let i = 0; i < length; i++) {
        const randomSet = characters[Math.floor(Math.random() * characters.length)];
        pswd += randomSet[Math.floor(Math.random() * randomSet.length)];
    }

    return pswd;
}

export default allowedCharacters;