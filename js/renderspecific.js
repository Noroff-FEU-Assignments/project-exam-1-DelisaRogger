import {specificPost} from "./postId.js"
const ingredientsHeading = document.querySelector(".ingredients-Heading");
const ingredients = document.querySelector(".ingredients");
const heading = document.querySelector("h1");
const img = document.querySelector(".post-image");
const description = document.querySelector(".description");
const instructions = document.querySelector(".instructions");
const date = document.querySelector(".date");
const modal = document.querySelector(".modal");
let ingredientsString = specificPost.acf.ingredients;
let ingredientsArray = ingredientsString.split('\n');
let instructionsString = specificPost.acf.instructions;
let instructionsArray = instructionsString.split('\n')


function renderspecific() {
  document.title = specificPost.acf.title;
    modal.innerHTML+=`<img src="${specificPost.acf.image}" alt="image of ${specificPost.acf.title}">`
    img.innerHTML +=`<img src="${specificPost.acf.image}">`
    heading.innerHTML+= `${specificPost.acf.title}`
    description.innerHTML+= `${specificPost.acf.description}`
    date.innerHTML+= `${specificPost.acf.post_date}`
    ingredientsHeading.innerHTML += `${specificPost.acf.ingredients_title}`
  for(let i = 0; i < ingredientsArray.length; i++){
    ingredients.innerHTML += `<li>${ingredientsArray[i]}</li>`
  }
 for(let i = 0; i < instructionsArray.length; i++){
  instructions.innerHTML += `<li>${instructionsArray[i]}</li>`
 }
 

}




renderspecific();

