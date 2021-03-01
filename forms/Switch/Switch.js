//Declares Variable as prompts
var firstName = prompt ("Please enter your first name")
var temperature = prompt ("Please enter the current temperature in F")
var usState = prompt ("Please enter your state, either FL or NE")

//Declares Array message as variable
message = ["wear a warm coat, hat, scarf, and gloves.", "wear a warm coat but you won't need a hat, scarf, or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."] 

//Switch for temperature and state cases
switch (true){
    case (usState == "NE" && temperature < 32):
        console.log(`${firstName}, ${message[0]}`)
        break
    case (usState == "NE" && temperature >= 32 && temperature <= 50):
        console.log(`${firstName}, ${message[1]}`)
        break
    case (usState == "FL" && temperature >= 32 && temperature <= 50):
        console.log(`${firstName}, ${message[2]}`)
        break
    case (usState == "FL" && temperature >= 50 && temperature <= 70):
        console.log(`${firstName}, ${message[3]}`)
        break
    default:
        console.log(`Unable to give recommendation.`)
        break
}
    