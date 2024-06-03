import { Link } from "react-router-dom";
import moviePlaceholder from "../../images/movie-poster-placeholder.png"
import { useState } from "react";

export const Favorite = () => {

const [advert] = useState(() => {
    const data = JSON.parse(localStorage.getItem("favorite")) ?? []; 
    return data;
    }
);

return (
        <ul>
        {advert?.map(({id, title, release_date, poster_path, vote_average}) => 
        <li key={id}>
            <Link to={`/movie/${id}`}>
                <img loading="lazy" 
                src={ poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : moviePlaceholder}
                alt={title} />
                <h1>{title}</h1>
                <p>{release_date}</p>
                <p>{vote_average.toFixed(1)}/10</p>
            </Link>
        </li>)}
        </ul>
)
};