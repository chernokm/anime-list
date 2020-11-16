import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { animeCollection } from "../data/firebase";
import Anime from "./anime";
import "./anime-listing.css";

function AnimeListing() {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const onNext = (snapshot) => {
            setIsLoading(false);
            const docs = snapshot.docs;
            setAnime(docs);
        };
        const onError = (error) => {
            setErrorMessage("There was a problem loading your anime ratings. Please try again.");
            console.error(error);
        };
        const unsubscribe = animeCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
        return unsubscribe;
    }, []);

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
                            <Anime id={animeId} data={animeData} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AnimeListing;