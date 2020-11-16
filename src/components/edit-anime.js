import React, { useState } from "react";
import { useEffect } from "react";
import { animeCollection } from "../data/firebase";
import "./edit-anime.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import AnimeForm from "./anime-form";

function EditAnime(props) {
    const { id } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [animeData, setAnimeData] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");

    useEffect(() => {
        async function getAnime() {
            setIsLoading(true);
            try {
                const animeSnapshot = await animeCollection.doc(id).get();
                if (!animeSnapshot.exists) {
                    throw new Error("No such anime exists");
                }
                const data = animeSnapshot.data();
                setAnimeData(data);
            } catch (error) {
                setErrorMessage("Something went wrong");
                console.error(error);
            }
            setIsLoading(false);
        }
        getAnime();
    }, [id]);

    const onAnimeSubmit = async (title, rating, dateAired, description, genre, platform) => {
        setIsSaving(true);
        setFormMessage("");
        try {
            await animeCollection.doc(id).set({
                title,
                rating,
                dateAired,
                description,
                genre,
                platform,
            });
            setFormMessage("Saved!")
        } catch (error) {
            setFormMessage("Something went wrong");
            console.error(error);
        }
        setIsSaving(false);
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