import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom'
import EditAnime from "../components/edit-anime";

function EditAnimePage() {
    const { id } = useParams();
    return (
        <main>
            <Helmet>
                <title>Edit</title>

            </Helmet>
            <EditAnime id={id} />
        </main>
    );
}

export default EditAnimePage;