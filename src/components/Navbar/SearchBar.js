import {Icon} from "Icons";

export default function SearchBar() {
    return(
        <div className="w-full h-10 flex mx-4">
            <div className={"w-[22.75rem]  w-full h-full rounded-full flex bg-white"}>
                <div className={"flex items-center m-3"}>
                    <Icon size={24} name="searchBlack"></Icon>
                </div>
                <input
                    className={"w-full h-full py-1.5 px-2 mr-8 text-sm color-black placeholder:text-black placeholder:text-sm placeholder:opacity-80 input:border-none"}
                    placeholder="Artists, songs, or podcasts"/>
            </div>
        </div>
    )
}
