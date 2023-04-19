import fs from 'fs';

async function leituraTexto(pathFile) {
    const texto = await fs.promises.readFile(pathFile, 'utf-8')
    return(texto)
}

export default leituraTexto('./arquivos/texto.md');