export const championshipService = {
  prepareTable,
  processTable
};

function prepareTable(data) {

         var actual_JSON = JSON.parse(data);
         var result = [];

         var items = actual_JSON[0].matches;


         for (var item, i = 0; item = items[i++];) {
             var a = Object.keys(item)
             result = result.concat(a);
             result.concat(a);
         }
       return getStartTable(result);
 }


function processTable(data, table){
  var actual_JSON = JSON.parse(data);
  var rounds = [];

  for(let tour, i=0;tour = actual_JSON[i++];){
    let matches = [];
    let round = new Round(i, matches);

    for(let matchScheme, j=0; matchScheme= tour.matches[j++];){
      let clubs = Object.keys(matchScheme);
      let team1 = clubs[0];
      let team2 = clubs[1];
      let score1 = matchScheme[team1];
      let score2 = matchScheme[team2];

      let club1=  findTeam(table, team1);
      let club2 = findTeam(table, team2)
      let match = new Match(team1, score1, team2, score2);
      matches.push(match);
      countResult(club1, score1, club2, score2);
      table.clubs.sort(sortTable);
      for(let club, k=0; club = table.clubs[k++];){
        club.position = k;
      }
    }

    rounds.push(round);
  }

  return rounds;
}


function sortTable(l, r) {
  return l.points < r.points ? 1 : l.points > r.points ? -1 :
    l.goals_difference < r.goals_difference ? 1 : l.goals_difference > r.goals_difference ? -1 :
      l.goals_for < r.goals_for ? 1 : l.goals_for > r.goals_for ? -1 : 0
}

function getStartTable(teams){
    var table = [];
    for(let i=0;i<teams.length; i++){
        let club = new Club(teams[i], i+1);
        table.push(club);
    }

    let champinshipTable = new Table(table);
    return champinshipTable;
}

function findTeam(table, name){
  return table.clubs.find((club) => club.team === name);
}

function countResult(club1, score1, club2, score2){

  if(score1 > score2){
    club1.points = club1.points+3;
    club1.won++;
    club2.lost++;
  }
  else if(score1 < score2){
    club2.points = club2.points+3;
    club2.won++;
    club1.lost++;
  }
  else{
    club1.points = club1.points+1;
    club2.points = club2.points+1;
    club1.drawn++;
    club2.drawn++;
  }

  club1.goals_for += score1;
  club1.goals_against += score2;
  club2.goals_for += score2;
  club2.goals_against += score1;

  club1.goals_difference = club1.goals_for -  club1.goals_against;
  club2.goals_difference = club2.goals_for -  club2.goals_against;
}

function Match(club1, score1, club2, score2){
  this.club1 = club1;
  this.club2= club2;
  this.score1= score1;
  this.score2= score2;
}

function Round(roundNum, matches){
  this.number = roundNum,
  this.matches = matches;
}

function Club(team, position){
	this.team = team;
	this.position = position;
	this.won = 0;
	this.drawn = 0;
	this.lost = 0;
	this.goals_for = 0;
	this.goals_against = 0;
	this.goals_difference = 0;
  this.points = 0;
}

function Table(clubs){
    this.clubs = clubs;
    this.fields = Object.getOwnPropertyNames(clubs[0]).map(field =>  {
      return {
        key: field,
        sortable: true
      }
    });
}



