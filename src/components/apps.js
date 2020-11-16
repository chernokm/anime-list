import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddAnimePage from "../pages/add-anime-page";
import EditAnimePage from "../pages/edit-anime-page";
import AnimePage from "../pages/anime-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />

            <Switch>
                <Route path="/" exact>
                    <AnimePage />
                </Route>

                <Route path="/add">
                    <AddAnimePage />
                </Route>

                <Route path="/edit/:id">
                    <EditAnimePage />
                </Route>

                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;