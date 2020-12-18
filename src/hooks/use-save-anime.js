import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveAnime() {
    const [isSaving, setIsSaving] = useState(false);
    const [formMessage, setFormMessage] = useState("");



    const save = async (animeData, userId, animeId) => {
        setIsSaving(true);
        setFormMessage("");
        try {
            if (animeId === undefined) {
                await usersCollection.doc(userId).collection("anime").add(animeData);
            } else {
                await usersCollection.doc(userId).collection("anime").doc(animeId).set(animeData);
            }
            setFormMessage("Saved!")
        } catch (error) {
            setFormMessage("Something went wrong");
            console.error(error);
        }
        setIsSaving(false);
    };

    return [save, isSaving, formMessage];
}

export default useSaveAnime;