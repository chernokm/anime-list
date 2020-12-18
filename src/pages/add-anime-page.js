import React from "react";
import { Helmet } from "react-helmet";
import AddAnime from "../components/add-anime";

function AddAnimePage(props) {
    return (
        <main>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <AddAnime {...props} />
        </main>
    );
}

export default AddAnimePage;