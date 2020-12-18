import React, { useState } from "react";
import { useEffect } from "react";
import { animeCollection } from "../data/firebase";
import useAnime from "../hooks/use-anime";
import useSaveAnime from "../hooks/use-save-anime";
import "./edit-anime.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import AnimeForm from "./anime-form";

function EditAnime(props) {
    const animeId = props.id;
    const userId = props.user.uid;

    const [animeData, isLoading, errorMessage] = useAnime(userId, animeId);
    const [save, isSaving, formMessage] = useSaveAnime();

    const onAnimeSubmit = async (title, rating, dateAired, description, genre, platform, currentlyWatching) => {
        save({ title, rating, dateAired, description, genre, platform, currentlyWatching }, userId, animeId);
    };

    return (
        <div className="edit-container">
            <h2>Edit Anime</h2>
            {isLoading && (
                <LoadingSpinner
                    size="50px"
                    spinnerColor="white"
                    backgroundColor="rgb(255, 255, 255, 0.2)"
                />
            )}
            {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
            {animeData && (
                <AnimeForm
                    initialState={animeData}
                    onSubmit={onAnimeSubmit}
                    isSaving={isSaving}
                    message={formMessage}
                />
            )}
        </div>
    );
}

export default EditAnime;