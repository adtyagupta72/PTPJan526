const singleRose = 8
const singleTulip = 2
const singleLily  = 10

let quantityRose = 50
let quantityTulip = 120
let quantityLily = 20

 let valueRose = singleRose * quantityRose
 let valueTulip = singleTulip * quantityTulip
 let valueLily = singleLily * quantityLily

 let total = valueRose + valueTulip + valueLily


console.log("Rose-unit price:"+ singleRose +", quantity:"+ quantityRose + ", Value:"+ valueRose)
console.log("Lily-unit price:"+ singleLily +", quantity:"+ quantityTulip + ", Value:"+ valueLily)
console.log("Tulip-unit price:"+ singleTulip +", quantity:"+ quantityTulip + ", Value:"+ valueTulip)
console.log("Total:"+total)