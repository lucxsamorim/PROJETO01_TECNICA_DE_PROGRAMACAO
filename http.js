import fetch from "node-fetch";

async function validaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map(async url =>{
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}

function geraArrayDeUrl(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function checaURL(arrayLinks){
    const links = geraArrayDeUrl(arrayLinks)
    const statusLinks = await validaStatus(links)
    return statusLinks
}

export default checaURL
