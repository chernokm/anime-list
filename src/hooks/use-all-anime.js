import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllAnime(userId) {
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
            setIsLoading(false);
            setErrorMessage("There was a problem loading your anime ratings. Please try again.");
            console.error(error);
        };
        const unsubscribe = usersCollection.doc(userId).collection("anime").orderBy("rating", "desc").onSnapshot(onNext, onError);

        return unsubscribe;
    }, []);

    return [anime, isLoading, errorMessage];
}

export default useAllAnime;