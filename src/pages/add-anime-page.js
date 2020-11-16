import React from "react";
import { Helmet } from "react-helmet";
import AddAnime from "../components/add-anime";

function AddAnimePage() {
    return (
        <main>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <AddAnime />
        </main>
    );
}

export default AddAnimePage;