import Section from "components/Section";

export default function Home() {
    const items = [
        {
            id: 1,
            title: 'Don\'t Wanna Lose',
            description: 'Giorgio Gee',
            image: 'https://i.scdn.co/image/ab67616d000048511ce9eb600dafbc65da38911e',
            type: 'album',
        },
        {
            id: 2,
            title: 'Where Are You Now',
            description: 'Giorgio Gee',
            image: 'https://i.scdn.co/image/ab67616d000048516b64f7a7e0e7af3d604ab41e',
            type: 'album',
        },
        {
            id: 3,
            title: 'Don\'t Wanna Lose',
            description: 'Giorgio Gee',
            image: 'https://i.scdn.co/image/ab67616d00004851cc789adcbf7a9ce804ed8a46',
            type: 'album',
        },
        {
            id: 4,
            title: 'Love of You (The Violin Song)',
            description: 'Giorgio Gee',
            image: 'https://i.scdn.co/image/ab67616d0000485149649e26cd7fec43ee6217af',
            type: 'podcast',
        },
        {
            id: 5,
            title: 'Don\'t Wanna Lose',
            description: 'Giorgio Gee, Giorgio Gee, Giorgio Gee, Giorgio Gee, Giorgio Gee',
            image: 'https://i.scdn.co/image/ab67616d00004851cbf876a8d59d77bd3f8e5a0a',
            type: 'artist',
        },

    ]
    return (
        <div className={"grid gap-y-8"}>
            <Section
                title={"Recently played"}
                more={"/sea-all"}
                items={ items }
            />

            <Section
                title={"New releases"}
                more={"/sea-all"}
                items={ items }
            />

            <Section
                title={"Made For Murat"}
                more={"/sea-all"}
                items={ items }
            />
        </div>
    )
}
