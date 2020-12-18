import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAnime(userId, animeId) {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [animeData, setAnimeData] = useState(null);
    useEffect(() => {
        async function getAnime() {
            setIsLoading(true);
            try {
                const animeSnapshot = await usersCollection.doc(userId).collection("anime").doc(animeId).get();
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
    }, [animeId]);

    return [animeData, isLoading, errorMessage];
}

export default useAnime;