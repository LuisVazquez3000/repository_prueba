// ejercicio desempeño de la seleccion argentina Mundial 2022

let scores = [9,8,7,5.5,6];

let players =['Messi', 'Alvarez', 'Fernandez','Martinez', 'Romero'];


const mapeoPlayers = (scoresMundial, playersMundial)=>{
  let playerFootball =[];
  
  for (let i = 0; i < players.length; i++) {
    
    let objPlayer = {};
    objPlayer.player = playersMundial[i];
    objPlayer.score = scoresMundial[i];
    playerFootball.push(objPlayer);
    
  }

  return(playerFootball);
}
const filteroutstandingPlayers = (callback)=>{
  let outstandingPlayers = callback.filter(e=>e.score>7);
  return outstandingPlayers;
}
const filterRegularPlayer = (cb)=>{
  let regularPlayer = cb.filter(e => e.score <= 7);
  return regularPlayer;
}
const evalPerformance =(scores, players)=>{
  //jugadores con mejor performance:
  console.log("jugadores con mejor performance:");
  console.log(filteroutstandingPlayers(mapeoPlayers(scores, players)));
  console.log("---------------------");
  //juagadores con regular performance:
  console.log("jugadores con Regular performance:");
  console.log(filterRegularPlayer(mapeoPlayers(scores, players)));

}


console.log(evalPerformance(scores, players));


