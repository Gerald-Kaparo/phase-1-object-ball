 { const homeTeam = {
  teamName: "Brooklyn Nets",
  colors: ["Black", "White"],
  players: {
    playerName: {
    "Alan Anderson":
    {number: 0,
      Shoe: 16,
      points: 22,
      rebounds: 12,
      Assist: 12,
      Steals: 12,
      blocks: 1,
      slumDunks: 1},
      
    "Reggie Evans":
    {number: 30,
        Shoe: 14,
        points: 12,
        rebounds: 12,
        Assist: 12,
        Steals: 12,
        blocks: 12,
        slumDunks: 7,},

      "Brook Lopez":
      {number: 11,
        Shoe: 17,
        points: 17,
        rebounds: 19,
        Assist: 10,
        Steals: 3,
        blocks: 1,
        slumDunks: 15},


    "Mason Plumlee":
    {number: 1,
      Shoe: 19,
      points: 26,
      rebounds: 12,
      Assist: 6,
      Steals: 3,
      blocks: 8,
      slumDunks: 5},
  
  "Jason Terry":
  {number: 31,
    Shoe: 15,
    points: 19,
    rebounds: 2,
    Assist: 2,
    Steals: 4,
    blocks: 11,
    slumDunks: 1}
    

   }

 }
}

const awayTeam = {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          playerName: {
          "Jeff Adrien":
          {number: 4,
            Shoe: 18,
            points: 10,
            rebounds: 1,
            Assist: 1,
            Steals: 2,
            blocks: 7,
            slumDunks: 2},
            
          "Bismak Biyombo":
          {number: 0,
              Shoe: 16,
              points: 12,
              rebounds: 4,
              Assist: 7,
              Steals: 7,
              blocks: 15,
              slumDunks: 10},
      
            "DeSagna Diop":
            {number: 2,
              Shoe: 14,
              points: 24,
              rebounds: 12,
              Assist: 12,
              Steals: 4,
              blocks: 5,
              slumDunks: 5},
      
      
          "Ben Gordon":
          {number: 8,
            Shoe: 15,
            points: 33,
            rebounds: 3,
            Assist: 2,
            Steals: 1,
            blocks: 1,
            slumDunks: 0},
      
        " Brendan Haywood":
        {number: 33,
          Shoe: 15,
          points: 6,
          rebounds: 12,
          Assist: 12,
          Steals: 22,
          blocks: 5,
          slumDunks: 12}
          }
        
     }
    }
}   





// let dj = { mbuziNaLion: reggae, Shavweru: Kiss100rnb, jacmar: hipHop };
// for (let key in dj) {
//   let value = dj[key];
//   console.log("key:", key, "value:", value);
// }


function gameObjec(teamName, key, value) {
  teamName = Object.assign({}, teamName, { [key]: value });
  teamName[key] = value;
  return teamName;
}

let gameObje = (home, away) => {
  if (String == home) {
    const teamName = Object.assign({}, teamName, { [home]: Arsenal });
    const colors = Object.assign({}, colors, { [home]: Yellow });
    const players = Object.assign({}, players, { [home]: 40 });

    console.log(home);
  } else {
    String == away;

    const teamName = Object.assign({}, teamName, { [home]: Arsenal });
    const colors = Object.assign({}, colors, { [home]: Yellow });
    const players = Object.assign({}, players, { [home]: 40 });
    console.log(away);
  }
};
