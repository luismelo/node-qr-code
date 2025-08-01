import prompt from 'prompt';
import qrCodePromptSchema from '../../prompts/prompt-schema-qr-code.js';
import handle from './handle.js';

async function createQRCode() {
    prompt.get(qrCodePromptSchema, handle)

    prompt.start();
}

export default createQRCode;