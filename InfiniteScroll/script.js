let pageNumber = 1;
let movieList = [];

const MovieContainer = document.getElementById("movie-container");
const Parent = document.getElementById("parent");

const createLiElement = (data) => {
  let listItem = document.createElement("div");
  let imgItem = document.createElement("img");
  let title = document.createElement("div");
  title.innerText = data.title

  listItem.setAttribute("class", "movie-item")
  imgItem.setAttribute("src", data.img);
  imgItem.style.width = "auto"
  listItem.appendChild(imgItem);
  listItem.appendChild(title);
  // listItem.style
  return listItem
}

const getMovies = async (pageNum) => {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=670303602e5e5bcf8eb83062ba3f715e&language=en-US&page=${pageNum}`);
  const result = await movies.json();
  result.results.forEach((movie) => { return movieList.push(createLiElement({title: movie.title, img: `https://image.tmdb.org/t/p/w185${movie.poster_path}`}))})
  AddMoviesToUi(movieList)
}

getMovies(pageNumber++)

const AddMoviesToUi = (list) => {
  list.forEach((item) => {
    MovieContainer.appendChild(item);
  });
};

parent.addEventListener("scroll", () => {
  console.log(parent.scrollX, parent.scrollY, "here")

})

window.addEventListener("scroll", (e) => {

  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    getMovies(pageNumber++);
  }
})

