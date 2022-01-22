import { Icon } from "Icons";
import { useHistory } from "react-router-dom";

export default function Navigation() {
    const history = useHistory();

    return (
        <nav className={"flex items-center gap-x-4"}>
            <button onClick={() => history.goBack()} className={"w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-60"}>
                <Icon size={24} name="topBarBack"></Icon>
            </button>
            <button onClick={() => history.goForward()} className={"w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-60"}>
                <Icon size={24} name="topBarForward"></Icon>
            </button>
        </nav>
    )
}

