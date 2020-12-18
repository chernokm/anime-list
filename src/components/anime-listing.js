import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import useAllAnime from "../hooks/use-all-anime";
import Anime from "./anime";
import "./anime-listing.css";

function AnimeListing(props) {
    const userId = props.user.uid;
    const [anime, isLoading, errorMessage] = useAllAnime(userId);

    return (
        <div className="anime-container">
            <h1>Anime List</h1>
            {isLoading && (<LoadingSpinner size="50px" spinnerColor="white" backgroundColor="rgb(255, 255, 255, 0.2)" />)}
            {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
            <ul className="anime-list">
                {anime.map((animeDoc) => {
                    const animeId = animeDoc.id;
                    const animeData = animeDoc.data();
                    return (
                        <li key={animeId}>
                            <Anime id={animeId} data={animeData} userId={userId} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AnimeListing;