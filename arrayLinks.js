function formaArrayDeUrl(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}
function validaArrayURL(arrayLinks){
    return formaArrayDeUrl(arrayLinks)
}
export default validaArrayURL;
