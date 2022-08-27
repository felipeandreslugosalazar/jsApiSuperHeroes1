// alternative API 
// https://akabab.github.io/superhero-api/api/

const heroImageDiv = document.getElementById('heroImage');
const heroNameDiv = document.getElementById('heroName');
const heroButtonDiv = document.getElementById('heroButton');
const searchHeroInput = document.getElementById('searchHero');


// number of SuperHeroes in API db 731
// function to get a random number from 0 to 731
let superHeroRandomId = () => {
  randomNumber = Math.ceil(Math.random() * 731);
  // randomNumber = Math.floor(Math.random() * 2) + 1;
  console.log(randomNumber);
  return randomNumber;
}

// print the randomNumer = id of the hero 
// just to confirm the superHeroRandomId function works

// function to get the superHero info from the superheros API
// using the superHeroRandomId to get a set of "random" info
const getSuperHero = (randomId) => {
  // hardCoded superHeroe
  // const superHeroApiUrl = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/367.json`;
  // random superHeroe
  const superHeroApiUrl = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${Number(randomId)}.json`;


  fetch(superHeroApiUrl)
    .then(apiResponse => apiResponse.json())
    .then(json => {

      console.log(json)

      heroImageDiv.innerHTML = `<img src="${json.images.sm}" alt="">`
      heroNameDiv.innerHTML = json.name
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
      getSuperHero(superHeroRandomId());
    });
}

heroButtonDiv.onclick = () => {
  if (heroButtonDiv.innerHTML == 'Search Hero') {
    console.log('Search Hero');
  } else {
    console.log('Random Hero');
    getSuperHero(superHeroRandomId());
  }
};

searchHeroInput.onkeyup = () => {
  console.log(searchHeroInput.value);
  if (searchHeroInput.value != '') {
    heroButtonDiv.innerHTML = 'Search Hero';
    heroImageDiv.innerHTML = '<img src="" alt="">';
    heroNameDiv.innerHTML = '';
  } else {
    heroButtonDiv.innerHTML = 'Random Hero';
  }
}