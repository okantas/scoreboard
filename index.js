

let total_home_score= 0
let homeScore=document.getElementById("home_score")



function inc_one_home(){
    total_home_score+=1
    homeScore.textContent=total_home_score
    
}
function inc_two_home(){
    total_home_score+=2
    homeScore.textContent=total_home_score
}
function inc_three_home(){
    total_home_score+=3
    homeScore.textContent=total_home_score
}

let total_away_score=0
let awayScore=document.getElementById("away_score")

function inc_one_away(){
    total_away_score+=1
    awayScore.textContent=total_away_score
}
function inc_two_away(){
    total_away_score+=2
    awayScore.textContent=total_away_score
}
function inc_three_away(){
    total_away_score+=3
    awayScore.textContent=total_away_score
}
