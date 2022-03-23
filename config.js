var config = {
    style: 'mapbox://styles/f1kuni/ckzocfyk2005016kdvj2q55o0',
    accessToken: 'pk.eyJ1IjoiZjFrdW5pIiwiYSI6ImNrdzJ4ZWhtNDBwaXAzMW1veXN5cGYwM2EifQ.-NTeimXFcbrFi2g5ZHDgjA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'ULTRA MUSIC FESTIVAL 2022 in Miami',
    subtitle: 'UMF will back in Miami',
    byline: 'Main Stage Linup',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [10.85442, 63.35575],
                zoom: 3.81,
                pitch: 4.50,
                bearing: -3.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'admin-1-fill',
            alignment: 'right',
            hidden: false,
            title: 'Kygo',
            music: '',
            description: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX60EDqDORwwI?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            image: 'images/kygo.jpeg',
            location: {
                center: [-74.75892, 40.16435],
                zoom: 11.02,
                pitch: 45.00,
                bearing: -40.00},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'admin-1-fill',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        }
    ]
};
