const qrCodePromptSchema = [
    {
        name: "link",
        description: "Digite o link ou texto para gerar o QR Code",
        pattern: /^(https?:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/,
        message: "Por favor, insira um link válido",
        required: true
    },
    {
        name: "type",
        description: "Escolha o tipo de QR Code (1 - Normal, 2 - Terminal)",
        pattern: /^[1-2]$/,
        message: "Selecione 1 ou 2",
    }
]

export default qrCodePromptSchema;