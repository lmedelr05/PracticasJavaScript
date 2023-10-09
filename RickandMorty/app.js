const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');

fetch(`$ { URL }/character`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.info)
        const characters = data.results;
        showCharacters(characters);
    })

/*
    <div class="card" style="width: 18rem;">
  
</div>
*/

function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width='18rem';
    const htmlCard= `
    <img src="${ character.image }" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ character.name }</h5>
    <p class="card-text">${ character.status }</p>
    <p class="card-text">${ character.origin.name }</p>
    <a href="#"
        class="btn btn-primary"
        data-id"${ character.id }">Go somewhere</a>
  </div>`
  card.innerHTML = htmlCard;
  return card;
}

function showCharacters(characters){
    containerChar.innerHTML = '';
    characters.forEach(character => {
        containerChar.appendChild(createCard(character))
    })
}