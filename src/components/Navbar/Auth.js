import {Menu} from '@headlessui/react'
import {Icon} from "Icons";

export default function Auth() {
    return (
        <Menu as={"nav"} className={"relative"}>
            {({open}) => (
                <>
                    <Menu.Button
                        className={`flex items-center justify-center h-8 w-full rounded-3xl bg-black bg-opacity-70 ${open ? 'bg-active' : 'bg-black'}`}>
                        <span className="w-8 h-8 rounded-full p-px flex items-center justify-center">
                            <Icon size={16} name="user"></Icon>
                        </span>
                        <span className={"text-sm font-semibold whitespace-nowrap"}>Current User</span>
                        <span className={`px-2 ${open && 'rotate-180'}`}>
                            <Icon size={16} name="downDir"></Icon>
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2"}>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={`h-10 flex justify-between items-center px-3 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                                    href="#"
                                >
                                    Account
                                    <Icon size={16} name="external"></Icon>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={`h-10 flex items-center px-3 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                                    href="#"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={`h-10 flex items-center px-3 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
                                    href="#"
                                >
                                    Log out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}
