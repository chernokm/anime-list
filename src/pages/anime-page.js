import React from "react";
import { Helmet } from "react-helmet";
import AnimeListing from "../components/anime-listing";

function AnimePage() {
    return (
        <main>
            <Helmet>
                <title>Anime</title>
            </Helmet>
            <AnimeListing />
        </main>
    );
}

export default AnimePage;