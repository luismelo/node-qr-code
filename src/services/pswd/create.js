import allowedCharacters from './allowed-characters.js';

async function generatePswd() {
    const pswd = await allowedCharacters();

    console.log('Generated Password:', pswd);
}

export default generatePswd;