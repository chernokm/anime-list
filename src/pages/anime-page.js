import React from "react";
import { Helmet } from "react-helmet";
import AnimeListing from "../components/anime-listing";

function AnimePage(props) {
    return (
        <main>
            <Helmet>
                <title>Anime</title>
            </Helmet>
            <AnimeListing {...props} />
        </main>
    );
}

export default AnimePage;