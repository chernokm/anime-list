import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import { animeCollection } from "../data/firebase";
import { useHistory } from "react-router-dom";
import "./anime.css";

function Anime(props) {
    const { id, data } = props;
    const { title, rating, dateAired, description, genre, platform, review } = data;

    const ratingString = "💙".repeat(rating) + "🖤".repeat(5 - rating);
    const history = useHistory();
    const [isDeleting, setIsDeleting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const deleteAnime = async () => {
        setIsDeleting(true);
        setErrorMessage("");
        try {
            const docRef = animeCollection.doc(id);
            await docRef.delete();
        } catch (error) {
            console.error(error);
            setErrorMessage("Something went wrong while trying to delete. Please try again");
            setIsDeleting(false);
        }
    };

    return (
        <div className="anime">
            <div className="anime__contents">
                <div className="anime__title">{title}</div>
                <div className="anime__rating">{ratingString}</div>
                <div className="anime__year">{dateAired}</div>
                <div className="anime__description">{description}</div>
                <div className="anime__genre">{genre}</div>
                <div className="anime__platform">{platform}</div>
                <div className="anime__review">{review}</div>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </div>
            <div>
                <button className="anime__button" disabled={isDeleting} onClick={deleteAnime}>
                    <Delete />
                </button>
                <button className="anime__button" onClick={() => history.push(`/edit/${id}`)}>
                    <Edit />
                </button>
            </div>
        </div>
    );
}

export default Anime;