import prompt from 'prompt';
import mainPromptSchema from './prompts/prompt-schema-main.js';
import createQRCode from './services/qr-code/create.js';
import generatePswd from './services/pswd/create.js';

async function main(params) {
    prompt.get(mainPromptSchema, async (err, choice) => {
        if(choice.select == 1) {
            await createQRCode();
        }

        if(choice.select == 2) {
            await generatePswd();
        }
    })

    prompt.start();
}

main()