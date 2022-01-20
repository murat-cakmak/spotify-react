import { Switch, Route } from 'react-router-dom';
import Navbar from "components/Navbar";

import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

export default function Content() {
    return (
        <main className={"flex-auto overflow-auto"}>
            <Navbar />
            <nav className="px-8 py-5">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/collection">
                        <Collection />
                    </Route>
                </Switch>
            </nav>
        </main>
    )
}
