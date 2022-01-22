import Navigation from "components/Navbar/Navigation";
import Auth from "components/Navbar/Auth";
import SearchBar from "components/Navbar/SearchBar";
import { useRouteMatch } from "react-router-dom";

export default function Navbar() {
    const searchRoute = useRouteMatch('/search');
    return (
        <div className={"flex justify-between justify-center items-center h-16 bg-navbar px-8"}>
            <Navigation></Navigation>

            {searchRoute && (
                <SearchBar></SearchBar>
            )}

            <Auth></Auth>
        </div>
    )
};
