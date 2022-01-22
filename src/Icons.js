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

const blackSearchIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000"
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

const userIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path>
        </svg>
    )
}

const downDirIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M3 6l5 5.794L13 6z"></path>
        </svg>
    )
}

const TopBarBackIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <polyline points="16 4 7 12 16 20" fill="none" stroke="currentColor"></polyline>
        </svg>
    )
}

const TopBarForwardIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <polyline points="8 4 17 12 8 20" fill="none" stroke="currentColor"></polyline>
        </svg>
    )
}

const externalIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fill-rule="evenodd" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z" clip-rule="evenodd"></path>
        </svg>
    )
}

const Icon = ({name, size}) => {
    const icons = {
        home: HomeIcon,
        search: SearchIcon,
        searchBlack: blackSearchIcon,
        collection: CollectionIcon,
        user: userIcon,
        downDir: downDirIcon,
        topBarBack: TopBarBackIcon,
        topBarForward: TopBarForwardIcon,
        external: externalIcon,
    }

    const Component = icons[name]

    return <Component size={size}></Component>
}

export {
    Icon
}
