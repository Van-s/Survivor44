
const players = {
    1 : {
      name: 'Brandon Cottom',
      alive: true,
      img: './images/brandonCottom.jpg',
      challenges: ['Age: 29', 'Job: Security Specialist'],
      tribeColor: '#FFD580',
      tribe: 'Ratu Tribe',
      moves: ['none']
    },
    2 : {
      name: 'Jaime Lynn Ruiz',
      alive: true,
      img: './images/jaimeLynn.jpg',
      challenges: ['Age: 35', 'Job: Yogi'],
      tribeColor: '#FFD580',
      tribe: 'Ratu Tribe',
      moves: ['none']
    },
    3 : {
      name: 'Kane Fritzier',
      alive: true,
      img: './images/kaneFritzier.jpg',
      challenges: ['Age: 25', 'Job: Law Student'],
      tribeColor: '#FFD580',
      tribe: 'Ratu Tribe',
      moves: ['none']
    },
    4 : {
      name: 'Lauren Harpe',
      alive: true,
      img: './images/laurenHarpe.jpg',
      challenges: ['Age: 31', 'Job: Elem Teacher'],
      tribeColor: '#FFD580',
      tribe: 'Ratu Tribe',
      moves: ['none']
    },
    5 : {
      name: 'Maddy Pomilla',
      alive: true,
      img: './images/maddyPomilla.jpg',
      challenges: ['Age: 28', 'Job: Charity Project Manager'],
      tribeColor: '#FFD580',
      tribe: 'Ratu Tribe',
      moves: ['none']
    },
    6 : {
      name: 'Matthew Grinstead-Mayle',
      alive: true,
      img: './images/matthewGrinstead.jpg',
      challenges: ['Age: 43', 'Job: Barbershop Owner'],
      tribeColor: '#FFD580',
      tribe: 'Ratu Tribe',
      moves: ['none']
    },
    7 : {
      name: 'Bruce Perreault',
      alive: true,
      img: './images/brucePerreault.jpg',
      challenges: ['Age: 46', 'Job: Insurance Agent'],
      tribeColor: '#CF9FFF',
      tribe: 'Tika Tribe',
      moves: ['none']
    },
    8 : {
      name: 'Yamil "Yam Yam" Arocho',
      alive: true,
      img: './images/yamyamArocho.jpg',
      challenges: ['Age: 36', 'Job: Salon Owner'],
      tribeColor: '#CF9FFF',
      tribe: 'Tika Tribe',
      moves: ['none']
    },
    9 : {
      name: 'Carson Garrett',
      alive: true,
      img: './images/carsonGarrett.jpg',
      challenges: ['Age: 20', 'Job: Eningeer Student'],
      tribeColor: '#CF9FFF',
      tribe: 'Tika Tribe',
      moves: ['none']
    },
    10 : {
      name: 'Helen Li',
      alive: true,
      img: './images/helenLi.jpg',
      challenges: ['Age: 29', 'Job: Product Manager'],
      tribeColor: '#CF9FFF',
      tribe: 'Tika Tribe',
      moves: ['none']
    },
    11 : {
      name: 'Sarah Wade',
      alive: true,
      img: './images/sarahWade.jpg',
      challenges: ['Age: 27', 'Job: Management Consultant'],
      tribeColor: '#CF9FFF',
      tribe: 'Tika Tribe',
      moves: ['none']
    },
    12 : {
      name: 'Carolyn Wiger',
      alive: true,
      img: './images/carolynWiger.jpg',
      challenges: ['Age: 35', 'Job: Drug Counselor'],
      tribeColor: '#CF9FFF',
      tribe: 'Tika Tribe',
      moves: ['none']
    },
    13 : {
      name: 'Matt Blankinship',
      alive: true,
      img: './images/mattBlankinship.jpg',
      challenges: ['Age: 27', 'Job: Security Software Engineer'],
      tribeColor: '#90EE90',
      tribe: 'Soka Tribe',
      moves: ['none']
    },
    14 : {
      name: 'Heidi Lagares-Greenblatt',
      alive: true,
      img: './images/heidiLagares.jpg',
      challenges: ['Age: 43', 'Job: Engineer Manager'],
      tribeColor: '#90EE90',
      tribe: 'Soka Tribe',
      moves: ['none']
    },
    15 : {
      name: 'Frannie Marin',
      alive: true,
      img: './images/frannieMarin.jpg',
      challenges: ['Age: 23', 'Job: Research Coordinator'],
      tribeColor: '#90EE90',
      tribe: 'Soka Tribe',
      moves: ['none']
    },
    16 : {
      name: 'Danny Massa',
      alive: true,
      img: './images/dannyMassa.jpg',
      challenges: ['Age: 32', 'Job: NYC Firefighter'],
      tribeColor: '#90EE90',
      tribe: 'Soka Tribe',
      moves: ['none']
    },
    17 : {
      name: 'Claire Rafson',
      alive: true,
      img: './images/claireRafson.jpg',
      challenges: ['Age: 25', 'Job: Tech Investor'],
      tribeColor: '#90EE90',
      tribe: 'Soka Tribe',
      moves: ['none']
    },
    18 : {
      name: 'Josh Wilder',
      alive: true,
      img: './images/joshWilder.jpg',
      challenges: ['Age: 34', 'Job: Surgical Podiatrist'],
      tribeColor: '#90EE90',
      tribe: 'Soka Tribe',
      moves: ['none']
    }
  
  }
  
  for(let i = 1; i <= 18; i++){
    if(players[i].alive === true){
      document.getElementById('playerHolder').innerHTML += `<section id='${i}' class="playerCard">
      <section class="inner">
        <section id = "front${i}" class="front">
          <img src=${players[i].img} alt=${players[i].name}>
          <span class="name">${players[i].name}</span>
          <span class="tribe">${players[i].tribe}</span>
        </section>
        <section id = "back${i}" class="back">
          </section>
        </section>
      </section>`
      document.getElementById(`${i}`).style.backgroundColor = `${players[i].tribeColor}`
      for(let j = 0; j < players[i].challenges.length; j++){
        document.getElementById(`back${i}`).innerHTML += `<span class="challenges">${players[i].challenges[j]}</span>`
      }
      for(let k = 0; k < players[i].moves.length; k++){
        document.getElementById(`back${i}`).innerHTML += `<span class="moves">${players[i].moves[k]}</span>`
      }
  
    } else {
        document.getElementById('playersOutHolder').innerHTML += `<section id='${i}' class="playerCard">
          <section class="inner">
            <section id = "front${i}" class="front">
              <img src=${players[i].img} alt=${players[i].name}>
              <span class="name">${players[i].name}</span>
            </section>
            <section id = "back${i}" class="back">
            </section>
          </section>
        </section>`
        document.getElementById(`front${i}`).style.boxShadow = '5px 5px 5px gray'
        for(let j = 0; j < players[i].challenges.length; j++){
          document.getElementById(`back${i}`).innerHTML += `<span class="challenges">${players[i].challenges[j]}</span>`
        }
        for(let k = 0; k < players[i].moves.length; k++){
          document.getElementById(`back${i}`).innerHTML += `<span class="moves">${players[i].moves[k]}</span>`
        }
    }
  }