import pegaArquivo from "./index.js";
import validaURL from "./http.js";
import leituraTexto from "./leitura.js";
import validaArrayURL from './arrayLinks.js';

const caminho = process.argv;

async function geraTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === 'validar') {
        console.log('lista dos validados', await validaURL(resultado));
    } else if (caminho[3] === 'links') {
        console.log('lista dos links em array', validaArrayURL(resultado));
    }else if(caminho[3] === 'leitura'){
        console.log('leitura do arquivo por completo', (leituraTexto))
    }
    else {
        console.log('O arquivo selecionado não apresenta link');
    }
}

geraTexto(caminho);