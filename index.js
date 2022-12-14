fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) => {
    const firstFilm = data.find((obj) => obj.id == 1);
    //console.log(firstFilm);

    //display the poster
    const posterDiv = document.getElementById("moviePoster");
    let imageElement = document.createElement("img");

    imageElement.src = firstFilm.poster;
    imageElement.alt = "Poster image";
    imageElement.width = "300";
    imageElement.height = "400";
    posterDiv.appendChild(imageElement);

    //displays title of first film
    const titleAndRuntime = document.getElementById("titleAndRuntime");
    let paraTitle = document.createElement("p");
    let paraRuntime = document.createElement("p");

    paraTitle.innerText = firstFilm.title;
    paraRuntime.innerText = `${firstFilm.runtime} minutes`;
    titleAndRuntime.appendChild(paraTitle);
    titleAndRuntime.appendChild(paraRuntime);

    const moreDetails = document.getElementById("moreDetails");
    let paraDescription = document.createElement("p");
    let showtimeBtn = document.createElement("button");

    let remTickets = firstFilm.capacity - firstFilm.tickets_sold;

    let spanElement = document.createElement("span");
    let ticketBtn = document.createElement("button");
    let breakEle = document.createElement("br");

    showtimeBtn.innerText = firstFilm.showtime;
    paraDescription.innerText = firstFilm.description;
    spanElement.innerText = `${remTickets} remaining tickets`;
    ticketBtn.innerText = "Buy ticket";

    moreDetails.appendChild(paraDescription);
    moreDetails.appendChild(showtimeBtn);
    moreDetails.appendChild(spanElement);
    moreDetails.appendChild(breakEle);
    moreDetails.appendChild(ticketBtn);

    ticketBtn.addEventListener("click", () => {
      if (remTickets === 1) {
        //alert('No more tickets')
        ticketBtn.innerText = "SOLD OUT";
        spanElement.innerText = ``;
      } else {
        --remTickets;
        //console.log(remTickets);
        spanElement.innerText = `${remTickets} remaining tickets`;
      }
    });
  });
function getMovies(){
    //fetches data
    fetch('http://localhost:3000/films')
    .then((resp) => resp.json())
    .then(renderMovies)
}
getMovies();

  // renders movies

function renderMovies(movies){
    movies.forEach(movieDetails);
}


//displays list of movies
const listElement = document.getElementById("titles");

function movieDetails(films){
    let li = document.createElement("li");
    li.innerText = films.title;
    listElement.appendChild(li);
}