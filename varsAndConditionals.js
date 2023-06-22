/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

// create variable for Jon and Jamie's attack strengths

let jonSnowAttack = 25
let jamieLanisterAttack = 45

// if (jonSnowAttack > jamieLanisterAttack){
//     console.log("Jon's attack is greater.")
// } else if (jamieLanisterAttack > jonSnowAttack){
//     console.log("Jamie's attack is greater.")
// } else {
//     console.log("They're attacks are the same")
// }


let jonSnowHealth = 100
let jonSnowDefense = 0

// if (jonSnowHealth <= jamieLanisterAttack){
//     console.log('Jon has been slain')
// } else {
//     jonSnowHealth = jonSnowHealth - jamieLanisterAttack
//     console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
// }


jonSnowDefense += 25

// if (jonSnowHealth <= jamieLanisterAttack - jonSnowDefense){
//     console.log('Jon has been slain')
// } else {
//     jonSnowHealth = jonSnowHealth - (jamieLanisterAttack - jonSnowDefense)
//     console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
// }

// if (jonSnowHealth <= 50) {
//     jonSnowHealth += 50
// } else {
//     jonSnowHealth = 100
// }
// console.log(jonSnowHealth)

// coinLandsHead = false

// if (coinLandsHead === true){
//     console.log(`The fight continues`)
// } else {
//     console.log(`Jon runs away`)
// }

// for (let i = 1; i <= 5; i++){
//     jonSnowHealth -= (jamieLanisterAttack - jonSnowDefense)
//     console.log(`Jon Snow's health is now ${jonSnowHealth}`)
// }


// for (let i = 1; i <= 6; i++){
//     if (jonSnowHealth <= 0 ){
//         console.log(`Jon Snow has been slain`)
//     } else {
//         jonSnowHealth -= (jamieLanisterAttack - jonSnowDefense)
//         console.log(`Jon Snow's health is now ${jonSnowHealth}`)
//     }
// }

while(jonSnowHealth>0){
    jonSnowHealth -= (jamieLanisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is now ${jonSnowHealth}`)
    if (jonSnowHealth<=0){
        console.log(`Jon Snow has been slain`)
    }
}