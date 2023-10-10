const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');

function createPag() {
  let buttons = '';
  for (let i = 1; i <= 42; i++) {
    buttons += `
      <li class="page-item">
        <a class="page-link" href="#" data-id="${i}">${i}</a>
      </li>`;
  }
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = buttons;
}

function getCharacters(page = 1) {
  fetch(`${URL}/character/?page=${page}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.info);
      const characters = data.results;
      showCharacters(characters);
    });
}

const page = parseInt(prompt('Que pagina?'));
getCharacters(page);

function createCard(character) {
  const card = document.createElement('div');
  card.classList.add('card', 'mt-3');
  card.style.width = '18rem';
  const htmlCard = `
    <img src="${character.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
      <p class="card-text">${character.status}</p>
      <p class="card-text">${character.origin.name}</p>
      <a href="#" class="btn btn-success btn-lg" data-id="${character.id}">Go somewhere</a>
    </div>`;
  card.innerHTML = htmlCard;
  return card;
}

function showCharacters(characters) {
  containerChar.innerHTML = '';
  characters.forEach(character => {
    containerChar.appendChild(createCard(character));
  });
}

function getButton(e) {
  e.preventDefault();
  if (e.target.classList.contains('page-link')) {
    const id = e.target.getAttribute('data-id');
    getCharacters(id);
  }
}

const pagination = document.querySelector('.pagination');
pagination.addEventListener('click', getButton);
createPag();