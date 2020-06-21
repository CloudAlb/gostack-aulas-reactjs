module.exports = {
    presets: [
        // converte o código do JS para um JS mais antigo dependendo do browser
        '@babel/preset-env',
        // vai acrescentar as funcionalidades do React nessa conversão, por exemplo, vai entender o JS e passar convertido para o browser
        '@babel/preset-react'
    ],
}