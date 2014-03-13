/*
Name: Heather Kastens
Date: 3/12/2014
Assignment: Goal4: Assignment: Duel3
 */

fighter1={name: 'Spiderman', damage:20,health:100};
fighter2={name: 'Batman',damage:20,health:100};
//self-executing function
(function(){

console.log("FIGHT!!!");

    //var fighter1 = ["Spiderman", 20, 100];
    //var fighter2 = ["Batman", 20, 100];

    //Initiate Round
    var round=0;

    function fight(){
    console.log('in the fight function');
    //alert(fighter1 [0]+":"+fighter1 [2]+" *START* "+fighter2 [0]+":"+fighter2 [2]);
        for (var i=0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);



            //inflict damage
            fighter1.health-=f1;
            fighter2.health-=f2;

            console.log(fighter1.name+":"+fighter1.health+" "+fighter2.name+":"+fighter2.health);

    var results = winnerCheck();
            console.log(results);

            if (results ==="no winner"){
              round++;
               // alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER* "+ fighter2[0]+":"+fighter2[2]);

            }else{
               // alert(results);
                break;
            };
        };
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";
        if(fighter1[2]< 1 && fighter2[2]<1){
            result="You Both Die";
        }else if (fighter1[2]<1){
            result=fighter2[0]+ " WINS!!!"
        }else if (fighter2[2]<1){
            result = fighter1[0]+ " WINS!!!"

    };
        return result;
    };

/********The Program gets started below*******/
    console.log('program starts')
    fight();

})();
