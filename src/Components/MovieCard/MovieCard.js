import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './MovieCard.css';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

function MovieCard({ Movie }) {
  return (
  <Link className='Link' to={`/MovieList/${Movie.title}`}>
      <article className="MovieCard">
        <Card  style={{ border:"3px solid rgb(255, 0, 0)", width: "15rem", height: "32rem", marginRight: "30px", marginTop:"30px", backgroundColor: " rgb(255, 0, 0) ; ", borderRadius: "8px"}}>
          <Card.Header style={{ fontWeight: "bold", fontSize: "15px", color: " rgb(255, 0, 0)  ",textAlign:"center" }}>{Movie.type}</Card.Header>
          <Image className="poster" src={Movie.posterUrl}
          style={{ borderRadius: "3%", textAlign: "center" }} />
          <Card.Body>
            <Card.Title style={{ fontSize: "18px", color: " rgb(255, 0, 0)  ", fontWeight: "bolder",fontFamily:"monospace",textAlign:"center"}}>{Movie.title}</Card.Title>
            <Card.Text style={{ fontSize: "12px", fontWeight: "bolder", color: " rgb(255, 0, 0)  ", textAlign: "center" }}>
              {Movie.rating}
              <Rating rate={Movie.rating} />
              </Card.Text>
              </Card.Body>
              </Card>
              </article>
              </Link>
              )
            }

export default MovieCard;