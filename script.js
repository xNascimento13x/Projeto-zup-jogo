const image = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');
const pontuacaoContainer = document.querySelector('.pontuacao-container');
const pontuacao = document.querySelector('.pontuacao');
const nomeDeErrp = document.getElementById('nomeDoPersonagem');

const nemueroMaximoDepersonagem = 671;
let points = 0;

let nomeDoPersonagem ;

generateRandomNumeber = () => {
    return Math.floor(Math.random() * nemueroMaximoDepersonagem);
}


getCharacter = () => {
    const id = generateRandomNumeber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method:'GET',
    headers: {
        accept: 'application/json',
        "Content-Type" : 'application/json'
    }
}) .then ((response) => response.json()).then ((data) => {
    image.src = data.image;
    image.alt = 'imagem do personagem:' + data.name;
    nomeDoPersonagem = data.name;
    })
}
handleWithTheGame = () => {
    this.getCharacter()
    pontuacaoContainer.style.display = 'flex'
    button.innerHTML ='jogar'
    input.style.opacity = 1;
    nomeDoPersonagem = nomeDoPersonagem.toLowerCase();
    inputValue = input.value.toLowerCase();
    this.handlePoints(nomeDoPersonagem, inputValue);
}
handlePoints = (characterName, inpuValue) => {
    if(characterName == inpuValue){
    points = points+1;
    }else{
    nomeDeErrp.innerHTML =`Errou nome era ${characterName.toUpperCase()}`
    pontuacao.innerHTML = points;
    } 
    }
    button.onclick = handleWithTheGame ;