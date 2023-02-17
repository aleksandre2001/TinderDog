// // Remember to import the data and Dog class!// Remember to import the data and Dog class!
import {dogs} from './data.js'
import {Dog} from './Dog.js'



//make array of class's objects
const dogObjectArray = dogs.map((dog)=>{
    return new Dog(dog)
})
let objectIndex = 0
let currentDog = dogObjectArray[objectIndex]
 document.getElementById('profile').innerHTML = currentDog.getProfileHtml()


document.getElementById('like').addEventListener("click", function(){
    if(!currentDog.hasBeenLiked && !currentDog.hasBeenSwiped){
        currentDog.hasBeenLiked = true
        document.querySelector('.badge-like').classList.add('active')
        setTimeout(renderNext, 500)
        
    }
})

document.getElementById('cross').addEventListener("click", function(){
    if(!currentDog.hasBeenSwiped && !currentDog.hasBeenLiked){
        currentDog.hasBeenSwiped = true
        document.querySelector('.badge-nope').classList.add('active')
        setTimeout(renderNext, 500)
        
    }
})

function renderNext(){
    objectIndex++ 
    if(dogObjectArray[objectIndex]){
        console.log(objectIndex)
    currentDog = dogObjectArray[objectIndex]
    document.getElementById('profile').innerHTML = currentDog.getProfileHtml()
    }
    
}