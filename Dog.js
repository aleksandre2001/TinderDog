// Create the Dog class here// // Create the Dog class here
import {dogs} from './data.js'

export class Dog{
    constructor (data){
        Object.assign(this, data)
    }

    getProfileHtml (){
        
        return` <img class="dog-image" src="${this.avatar}" />
                <img class="badge-like " src="./images/badge-like.png">
                <img class="badge-nope " src="./images/badge-nope.png">
                <div class="gradient-layer">
                    <div class="profile-text">
                        <h2>${this.name}, ${this.age}</h2>
                        <p>${this.bio}</p>
                    </div> 
                </div>
                `
    }
}