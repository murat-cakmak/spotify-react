import { Icon } from "Icons"
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className={"px-2"}>
            <ul className={"flex flex-col"}>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeClassName={"bg-active text-white"}
                        className={"h-10 flex items-center text-sm font-semibold text-link px-4 rounded gap-x-4"}>
                        <Icon size={16} name="home"></Icon>
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search"
                        activeClassName={"bg-active text-white"}
                        className={"h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-x-4"}>
                        <Icon size={16} name="search"></Icon>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/collection"
                        activeClassName={"bg-active text-white"}
                        className={"h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded gap-x-4"}>
                        <Icon size={16} name="collection"></Icon>
                        Kitaplığım
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
