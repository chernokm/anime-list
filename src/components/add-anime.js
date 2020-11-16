import React from "react";
import { useState } from "react";
import { animeCollection } from "../data/firebase";
import "./add-anime.css";
import AnimeForm from "./anime-form";

function AddAnime() {
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");

    const onAnimeSubmit = async (title, rating, dateAired, description, genre, platform) => {
        setIsSaving(true);

        try {
            await animeCollection.add({
                title,
                rating,
                dateAired,
                description,
                genre,
                platform,
            });
            setFormMessage("Saved successfully")
            console.log("saved");
        } catch (error) {
            console.error(error);
            setFormMessage("Something went wrong, please try again")
        }
        setIsSaving(false);
    };

    return (
        <div className="add-container">
            <h1>Add Anime</h1>
            <AnimeForm onSubmit={onAnimeSubmit} isSaving={isSaving} message={formMessage} />
        </div>
    );
}

export default AddAnime;