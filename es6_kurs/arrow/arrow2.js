//when to use fat arrow
//To by sie wyswietlio gdyby nie uzyc fat arrow
//Dlatego uzywalo sie prototypow bo one robily unikniecie tego
//[ 'Jane is on team undefined',
// 'bill is on team undefined' ]
//bo mamy zly this
//jezeli dajemy funkcje anonimowa i bierzemy w niej this to
//te this odnosi sie do obiektu globalnego
//z fat arrow mamy leksykalny this ktory zawiera sie
//w kontekscie funkcji

const team = {
    members: ['Jane', 'bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        //this === team
        return this.members.map((member)=>{
            //nasze this odwoluje sie teraz do team
            return `${member} is on team ${this.teamName}`;
        });
    }
};


console.log(team.teamSummary());

//Przyklad jak mozemy poradzic sobie uzywajac bind
//bindujemy funkcje z this naszego obiektu
const secondTeam = {
    members: ['Jane', 'bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
      let self = this; //inne rozwiazani
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`;
        }.bind(this));
    }
};

console.log(secondTeam.teamSummary());

