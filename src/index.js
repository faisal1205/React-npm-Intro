import navbar from "../components/navbar"

//console.log(navbar)
document.getElementById("navbar").innerHTML = navbar()

import "../styles/navbar.css"

import "../styles/trending.css"

let trendingContainer = document.getElementById("trendingMovies")
function trendingFunction()
{
//console.log("in")


fetch("https://api.themoviedb.org/3/movie/popular?api_key=01726d68992df3e5dd6d63d950787411&language=en-US&page=1")
.then(function(res){
return res.json()
})
.then(function(res)
{
    appendTrending(res.results)
    //console.log(res.results)
})
.catch(function(err)
{
    console.log(err)
})
}

function appendTrending(data)
{
  //  console.log(data)
    
  
    trendingContainer.innerHTML = null
    data.forEach(function(ele)
   {
    let Div = document.createElement("div")

   var image = document.createElement("img")
   image.src = `https://image.tmdb.org/t/p/original${ele.poster_path}` 
console.log(image)
   var title = document.createElement("h4")
   title.innerText = ele.title

   var date = document.createElement("p")
   date.innerText = `Release Date : ${ele.release_date}`

   var rating = document.createElement("p")
   rating.innerText = `IMDB_Rating : ${ele.vote_average}` 

   Div.append(image,title,date,rating)

   trendingContainer.append(Div)
   })
   



}
trendingFunction()