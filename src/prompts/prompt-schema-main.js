const mainPromptSchema = [
    {
        name: "select",
        description: "Selecione a ferramenta (1 - QR Code, 2 - Gerador de Senhas)",
        pattern: /^[1-2]$/,
        message: "Selecione 1 ou 2",
        required: true
    }
]

export default mainPromptSchema;