// Spread Destructuring Functions Exercise

// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
  ];

// 1b
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
  }
  seeDinos(...jPDinos); 

// 2a
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Goldblum`
};

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
};

seeCharacters(jPCharacters);