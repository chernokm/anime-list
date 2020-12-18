import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./anime-form.css";

function AnimeForm(props) {
    const { initialState = {}, message, isSaving, onSubmit } = props;

    if (initialState.title === undefined) initialState.title = "";
    if (initialState.rating === undefined) initialState.rating = 3;
    if (initialState.dateAired === undefined) initialState.dateAired = 2020;
    if (initialState.description === undefined) initialState.description = "";
    if (initialState.genre === undefined) initialState.genre = "";
    if (initialState.platform === undefined) initialState.platform = "";
    if (initialState.currentlyWatching === undefined) initialState.currentlyWatching = "";

    const [title, setTitle] = useState(initialState.title);
    const [rating, setRating] = useState(initialState.rating);
    const [dateAired, setDateAired] = useState(initialState.dateAired);
    const [description, setDescription] = useState(initialState.description);
    const [genre, setGenre] = useState(initialState.genre);
    const [platform, setPlatform] = useState(initialState.platform);
    const [currentlyWatching, setCurrentlyWatching] = useState(initialState.currentlyWatching);
    const [errorMessage, setErrorMessage] = useState("");

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const onRatingChange = (event) => {
        setRating(event.target.value);
    };
    const onDateAiredChange = (event) => {
        setDateAired(event.target.value);
    };
    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };
    const onPlatformChange = (event) => {
        setPlatform(event.target.value);
    };

    const onCurrentlyWatchingChange = (event) => {
        setCurrentlyWatching(event.target.value);
    };

    const onAnimeSubmit = async (event) => {
        event.preventDefault();
        onSubmit(title, rating, dateAired, description, genre, platform, currentlyWatching)
    };

    return (
        <form className="anime-form" onSubmit={onAnimeSubmit}>
            <h2 className="anime-form__title">Anime Details</h2>
            {message && <p className="anime-form__message">{message}</p>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <fieldset className="anime-form__controls" disabled={isSaving}>
                <label className="anime-form__label">Movie Title:</label>
                <input className="anime-form__input" type="text" value={title} onChange={onTitleChange} />
                <label className="anime-form__label">Rating:</label>
                <input className="anime-form__input" type="number" value={rating} min="1" max="5" onChange={onRatingChange} />
                <label className="anime-form__label">Year Aired:</label>
                <input className="anime-form__imput" type="number" value={dateAired} onChange={onDateAiredChange} />
                <label className="anime-form__label">Description:</label>
                <input className="anime-form__input" type="text" value={description} onChange={onDescriptionChange} />
                <label className="anime-form__label">Genre:</label>
                <input className="anime-form__input" type="text" value={genre} onChange={onGenreChange} />
                <label className="anime-form__label">Platform:</label>
                <input className="anime-form__input" type="text" value={platform} onChange={onPlatformChange} />
                <label className="anime-form__label">Progress:</label>
                <input className="anime-form__input" type="text" value={currentlyWatching} onChange={onCurrentlyWatchingChange} />
                <input className="anime-form__submit" type="submit" value={isSaving ? "Saving..." : "Save"} />

            </fieldset>
        </form>
    );

}

export default AnimeForm;