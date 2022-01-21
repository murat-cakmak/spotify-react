import { Icon } from "Icons"

export default function Navbar() {
    return (
        <div className={"flex justify-between justify-center items-center h-16 bg-navbar"}>
            <div className={"flex flex-auto mx-4"}>
                <Icon size={16} name="topBarBack"></Icon>
                <Icon size={16} name="topBarForward"></Icon>
            </div>
            <div className={"mx-4"}>
                <button>SING UP</button>
                <button className={"border-white font-semibold text-black m-4 bg-white rounded-full h-9 w-32"}>LOG IN</button>
            </div>
        </div>
    )
};
