const HomeIcon = ({ size }) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z" fill="currentColor"></path>
        </svg>
    )
}

const SearchIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor"
                d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path>
        </svg>
    )
}

const CollectionIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path>
        </svg>
    )
}

const TopBarBackIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <polyline points="16 4 7 12 16 20" fill="currentColor" stroke="#181818"></polyline>
        </svg>
    )
}

const TopBarForwardIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <polyline points="8 4 17 12 8 20" fill="currentColor" stroke="#181818"></polyline>
        </svg>
    )
}

const Icon = ({name, size}) => {
    const icons = {
        home: HomeIcon,
        search: SearchIcon,
        collection: CollectionIcon,
        topBarBack: TopBarBackIcon,
        topBarForward: TopBarForwardIcon,
    }

    const Component = icons[name]

    return <Component size={size}></Component>
}

export {
    Icon
}
