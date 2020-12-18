import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddAnimePage from "../pages/add-anime-page";
import EditAnimePage from "../pages/edit-anime-page";
import AccountPage from "../pages/account-page";
import AnimePage from "../pages/anime-page";
import NotFoundPage from "../pages/not-found-page";
import { auth } from "../data/firebase";
import Nav from "./nav";

function AuthenticatedRoute(props) {
    const { isAuthenticated, children, ...routeProps } = props;
    return <Route {...routeProps}>
        {isAuthenticated ? children : <Redirect to="/account" />}
    </Route>
}

function App() {
    const [user, setUser] = useState(null);
    const isAuthenticated = user !== null;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);
    return (
        <BrowserRouter>
            <Nav user={user} />

            <Switch>
                <Route path="/account">
                    <AccountPage user={user} />
                </Route>

                <AuthenticatedRoute path="/" exact isAuthenticated={isAuthenticated}>
                    <AnimePage user={user} />
                </AuthenticatedRoute>

                {/* <Route path="/" exact>
                    {isAuthenticated ? <AnimePage /> : <Redirect to="/account" />}
                </Route> */}

                <AuthenticatedRoute path="/add" isAuthenticated={isAuthenticated}>
                    <AddAnimePage user={user} />
                </AuthenticatedRoute>

                {/* <Route path="/add">
                    {isAuthenticated ? <AddAnimePage /> : <Redirect to="/account" />}
                </Route> */}

                <AuthenticatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
                    <EditAnimePage user={user} />
                </AuthenticatedRoute>

                {/* <Route path="/edit/:id">
                    {isAuthenticated ? <EditAnimePage /> : <Redirect to="/account" />}
                </Route> */}

                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;