import React from "react";
import { useState } from "react";
import { animeCollection } from "../data/firebase";
import useSaveAnime from "../hooks/use-save-anime";
import "./add-anime.css";
import AnimeForm from "./anime-form";

function AddAnime(props) {

    const userId = props.user.uid;
    const [save, isSaving, formMessage] = useSaveAnime();

    const onAnimeSubmit = async (title, rating, dateAired, description, genre, platform, currentlyWatching) => {
        save({ title, rating, dateAired, description, genre, platform, currentlyWatching }, userId);

    };

    return (
        <div className="add-container">
            <h1>Add Anime</h1>
            <AnimeForm onSubmit={onAnimeSubmit} isSaving={isSaving} message={formMessage} />
        </div>
    );
}

export default AddAnime;