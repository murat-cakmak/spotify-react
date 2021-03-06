import { NavLink } from "react-router-dom";
import { Icon } from "Icons";

export default function Section({ title, more = false, items }) {
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full';

            case 'podcast':
                return 'rounded-xl';

            default:
                return 'rounded';
        }
    }

    return (
        <section>
            <header className={"flex items-center justify-between mb-4"}>
                <NavLink
                    to={ more ?? '#'}
                    className={"hover:underline"}
                >
                    <h3 className={"text-2xl text-white font-semibold tracking-tight"}>{ title }</h3>
                </NavLink>
                {more && (
                    <NavLink className={"text-sm font-semibold uppercase text-link hover:underline tracking-wider"} to={ more }>
                        SEE ALL
                    </NavLink>
                )}
            </header>
            <div className={"grid grid-cols-5 gap-x-6"}>
                { items && items.map(item => (
                    <NavLink
                        key={ item.id }
                        to="/"
                        className={"bg-footer p-4 rounded hover:bg-active group"}
                    >
                        <div className={"relative"}>
                            <img
                                src={ item.image }
                                alt={ item.title }
                                className={`w-full h-full object-cover invert-0 ${ imageStyle(item) }`}
                            />
                            <button className={"w-10 h-10 rounded-full absolute bottom-2 right-2 bg-primary flex items-center justify-center hidden group-hover:flex"}>
                                <Icon name={"play"} size={16}></Icon>
                            </button>
                        </div>
                        <h6 className={"overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold"}>
                            { item.title }
                        </h6>
                        <p className={"line-clamp-2 text-link text-sm mt-1"}>
                            { item.description }
                        </p>
                    </NavLink>
                )) }
            </div>
        </section>
    )
}
