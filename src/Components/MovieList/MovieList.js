import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';
import Header from "../Header/Header";
import AddMovie from "../AddMovie/AddMovie";

function MovieList() {
  const [searchRate, setSearchRate] = useState(0);
  const [filterByTitle, setFilterByTitle] = useState("");
  const [Movies, setMovies] = useState([
    {
      title: "grizzly & the lemmings",
      type: "CARTOON COMEDY",
      posterUrl: " https://fr.web.img2.acsta.net/pictures/20/12/11/16/23/0894648.jpg ",
      rating: 5,
    },

    {
      title: "Vikings Valhalla",
      type: "ACTION",
      posterUrl: "https://fr.web.img4.acsta.net/pictures/22/01/20/09/55/4582630.jpg",
      rating: 3,
    },

    {
      title: "Squid Game",
      type: "DRAMA",
      posterUrl: " https://images.ctfassets.net/4cd45et68cgf/RcGuekGhRkHuzYRKu9jTr/b306b8c0e0cddbac04bce6ddb41f2c71/EN-US_SQdGame_Teaser_Coffin_Vertical_27x40_RGB_PRE.jpg ",
      rating: 4,
    },


    {
      title: "Gad Gone Wild",
      type: "Stand Up",
      posterUrl: "https://occ-0-114-116.1.nflxso.net/art/d1129/2d5aedb7036e2187c1b5cdbe1b7f6620835d1129.jpg",
      rating: 2,
    },

    {
      title: "Black Widow",
      type: "ACTION",
      posterUrl: " https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810 ",
      rating: 1,
    },

    {
      title: "Central Intelligence",
      type: "Blockbuster",
      posterUrl: " https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_.jpg ",
      rating: 5,
    }]);

  const addMovieClick = (objNew) => {
    setMovies([...Movies, objNew])
  }

  return (
    <>
      <Header setFilterByTitle={setFilterByTitle} setSearchRate={setSearchRate} searchRate={searchRate} />
      <AddMovie addMovieClick={addMovieClick} />

      <div className="MovieList">
        {Movies.filter(el => el.title.toLowerCase().includes(filterByTitle.toLowerCase().trim()) && el.rating >= searchRate).map((el, i) => <MovieCard Movie={el} key={i} />)}
        </div>
    </>
    )
  }

export default MovieList;
