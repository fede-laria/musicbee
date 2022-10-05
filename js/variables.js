// --- THEMES ---


const THEMES = {
    light: {
        colors: {
            bg: '#FFFFFF',
            bg2: '#FAFAFA',
            text: '#1A1A1A',

            primary: '#FFA146',
            secondary: '#4557B5'
        },

        darkTheme: false,
        altColors: false,

        borderRadius: '15px',

        boxShadow: {
            light: 'rgba(0, 0, 0, 0.2)',
            normal: 'rgba(0, 0, 0, 0.3)',
            strong: 'rgba(0, 0, 0, 0.6)'
        },

        beeBgOpacity: '0.02',

        svgOutlineFilter: 'invert(0%) sepia(12%) saturate(6163%) hue-rotate(347deg) brightness(97%) contrast(80%)',
        svgFillFilter: 'invert(69%) sepia(84%) saturate(621%) hue-rotate(325deg) brightness(101%) contrast(101%)'
    },

    neon: {
        colors: {
            bg: '#222326',
            bg2: '#202123',
            text: '#FAFAFA',

            primary: '#08D6AF',
            secondary: '#99D4FF'
        },

        darkTheme: true,
        altColors: false,

        borderRadius: '0px',

        boxShadow: {
            light: 'rgba(0, 0, 0,  0.6)',
            normal: 'rgba(0, 0, 0, 0.7)',
            strong: 'rgba(0, 0, 0, 0.8)'
        },

        beeBgOpacity: '0.07',

        svgOutlineFilter: 'invert(89%) sepia(99%) saturate(36%) hue-rotate(157deg) brightness(107%) contrast(96%)',
        svgFillFilter: 'invert(71%) sepia(12%) saturate(4930%) hue-rotate(118deg) brightness(94%) contrast(94%)',
    },

    arsenic: {
        colors: {
            bg: '#3B444B',
            bg2: '#373F45',
            text: '#d5dde4',

            primary: '#59A9A8',
            secondary: '#6CBAE5'
        },

        darkTheme: false,
        altColors: false,

        borderRadius: '8px',

        boxShadow: {
            light: 'rgba(0, 0, 0, 0.2)',
            normal: 'rgba(0, 0, 0, 0.3)',
            strong: 'rgba(0, 0, 0, 0.6)'
        },

        beeBgOpacity: '0.05',

        svgOutlineFilter: 'invert(95%) sepia(5%) saturate(495%) hue-rotate(178deg) brightness(92%) contrast(93%)',
        svgFillFilter: 'invert(63%) sepia(17%) saturate(967%) hue-rotate(130deg) brightness(94%) contrast(84%)',
    },

    cherry: {
        colors: {
            bg: '#fcfbf7',
            bg2: '#f9f8f4',
            text: '#4b4b4b',

            primary: '#f14321',
            secondary: '#4c7085'
        },

        darkTheme: false,
        altColors: false,

        borderRadius: '6px',

        boxShadow: {
            light: 'rgba(0, 0, 0, 0.2)',
            normal: 'rgba(0, 0, 0, 0.3)',
            strong: 'rgba(0, 0, 0, 0.6)'
        },

        beeBgOpacity: '0.02',

        svgOutlineFilter: 'invert(29%) sepia(0%) saturate(2834%) hue-rotate(32deg) brightness(94%) contrast(92%)',
        svgFillFilter: 'invert(33%) sepia(94%) saturate(3810%) hue-rotate(352deg) brightness(101%) contrast(89%)'
    },

    ocean: {
        colors: {
            bg: '#033858',
            bg2: '#033554',
            text: '#e0e2e1',

            primary: '#669acc',
            secondary: '#e0e2e1'
        },

        darkTheme: false,
        altColors: false,

        borderRadius: '20px',

        boxShadow: {
            light: 'rgba(0, 0, 0, 0.2)',
            normal: 'rgba(0, 0, 0, 0.3)',
            strong: 'rgba(0, 0, 0, 0.6)'
        },

        beeBgOpacity: '0.05',

        svgOutlineFilter: 'invert(84%) sepia(29%) saturate(9%) hue-rotate(97deg) brightness(105%) contrast(88%)',
        svgFillFilter: 'invert(62%) sepia(23%) saturate(764%) hue-rotate(168deg) brightness(89%) contrast(93%)',
    },

    commodore: {
        colors: {
            bg: '#fffef9',
            bg2: '#fffdf4',
            text: '#0c0b05',

            primary: '#0c0b05',
            secondary: '#0c0b05'
        },

        darkTheme: false,
        altColors: false,
        
        altColors: true,

        borderRadius: '0px',

        boxShadow: {
            light: 'rgba(0, 0, 0, 0.2)',
            normal: 'rgba(0, 0, 0, 0.3)',
            strong: 'rgba(0, 0, 0, 0.6)'
        },

        beeBgOpacity: '0.02',

        svgOutlineFilter: '',
        svgFillFilter: 'invert(67%) sepia(14%) saturate(125%) hue-rotate(182deg) brightness(88%) contrast(87%)'
    },

    hive: {
        colors: {
            bg: '#0a0b06',
            bg2: '#040603',
            text: '#d0a371',

            primary: '#c5994e',
            secondary: '#c5994e'
        },

        darkTheme: true,
        altColors: false,

        borderRadius: '5px',

        boxShadow: {
            light: 'rgba(0, 0, 0,  0.6)',
            normal: 'rgba(0, 0, 0, 0.7)',
            strong: 'rgba(0, 0, 0, 0.8)'
        },

        beeBgOpacity: '0.02',

        svgOutlineFilter: 'invert(75%) sepia(31%) saturate(512%) hue-rotate(349deg) brightness(86%) contrast(87%)',
        svgFillFilter: 'invert(33%) sepia(44%) saturate(493%) hue-rotate(359deg) brightness(99%) contrast(93%)'
    },

    bubblegum: {
        colors: {
            bg: '#120810',
            bg2: '#0f070d',
            text: '#fafafa',

            primary: '#e80e63',
            secondary: '#8b5be3'
        },

        darkTheme: true,
        altColors: false,

        borderRadius: '0px',

        boxShadow: {
            light: 'rgba(0, 0, 0,  0.6)',
            normal: 'rgba(0, 0, 0, 0.7)',
            strong: 'rgba(0, 0, 0, 0.8)'
        },

        beeBgOpacity: '0.07',

        svgOutlineFilter: 'invert(98%) sepia(3%) saturate(11%) hue-rotate(123deg) brightness(106%) contrast(96%)',
        svgFillFilter: 'invert(14%) sepia(70%) saturate(5231%) hue-rotate(326deg) brightness(98%) contrast(98%)',
    },
};


// --- LANGUAGES ---


const LANGS = {
    // English
    en: {
        name: 'English',
        abbreviation: 'en',

        nav: {
            home: 'Home',
            download: 'Download',
            addons: 'Add-ons',
            forum: 'Forum',
            help: 'Help',

            skins: 'Skins',
            plugins: 'Plugins',
            visualizer: 'Visualizer',
            theaterMode: 'Theater Mode',
            misc: 'Misc',

            faq: 'FAQ & Help',
            devApi: 'Developer API',
            releaseNotes: 'Release Notes',
            reportBug: 'Report a Bug',
            wiki: 'MusicBee Wiki'
        },

        themes: {
            light: 'Light',
            neon: 'Neon',
            arsenic: 'Arsenic',
            cherry: 'Cherry',
            ocean: 'Deep Ocean',
            commodore: 'Commodore',
            hive: 'Golden Hive',
            bubblegum: 'Bubblegum'
        },

        footer: {
            donate: {
                body: 'Want to support MusicBee?',
                button: 'Donate with Paypal'
            },

            copyright: [
                'Site built with ',
                'for the community',
                'Copyright © Steven Mayall 2008-2022, All Rights Reserved.'
            ] 
        },

        index: {
            pageTitle: 'MusicBee',

            header: {
                title: 'Simple. Fast. Free.',
                body: 'MusicBee is the simplest way to manage,<br> find and play music files on your computer.',
                download: 'Download Now',
                features: 'See Features'
            },

            customization: {
                title: 'Fully Customizable',
                body: `
                    Personalize MusicBee to your liking by choosing<br class="hidden-mobile">
                    from <a class="highlighted-text" href="addons.html?filter=skins">+100 user-generated skins</a>.
                `,
                random: 'Random'
            },

            sync: {
                title: 'Synching & Convertion',
                body: `
                    Sync your music with any device and convert formats on the fly<br class="hidden-mobile">
                    to listen to your favorite songs from anywhere.
                `
            },

            features: {
                title: 'Sound Quality Matters',
                list: [
                    {
                        title: 'Gapless Playback',
                        body: 'Listen to your playlists without<br>interruption between songs.'
                    },
                    {
                        title: 'Surround Sound',
                        body: 'Upmix stereo to 5.1 surround sound<br>for a more immersive experience.'
                    },
                    {
                        title: 'Groove Music Support',
                        body: 'Stream directly from MusicBee<br>or add your existing playlist.'
                    },
                    {
                        title: 'Plugin Support',
                        body: 'Add functionality to MusicBee<br>with all kinds of plugins.'
                    }
                ]
            },

            more: {
                title: 'And <span class="highlighted-text bold-text">Much, Much</span> More...',
                body: 'Enhance your music experience for free<br class="hidden-mobile">and discover all the features MusicBee has to offer.',
                download: 'Download MusicBee for Windows'
            }
        },

        download: {
            pageTitle: 'Download - MusicBee',

            title: 'MusicBee for Windows',
            body: 'The best music player for your PC, one click away.',
            buttons: [
                'Download MusicBee<br><span class="small-text">For Windows 7 / 8 / 10</span>',
                'Download Portable Version<br><span class="small-text">Can be installed on a USB.</span>',
                'Get Windows Store Version<br><span class="small-text">Includes auto update feature.</span>'
            ],
            version: 'v3.4.8003 | January 3, 2022',
            releaseNotesButton: 'Release Notes'
        },

        addons: {
            pageTitle: 'Add-ons - MusicBee',

            title: 'Add-ons for MusicBee',
            by: 'by',
            userLevel: {
                elite: 'Elite',
                admin: 'Admin'
            },
            popular: 'Popular',
            new: 'New',
            topMembers: 'Top Members',
            submit: 'Submit your Add-on',
            search: 'Search',

            filters: {
                all: {
                    title: 'All',
                    body: '&nbsp;'
                },
                skins: {
                    title: 'Skins',
                    body: 'Make MusicBee look the way you want.'
                },
                plugins: {
                    title: 'Plugins',
                    body: 'Add features to MusicBee.'
                },
                visualizer: {
                    title: 'Visualizer',
                    body: 'Get colorful visualizers for an eye-pleasing experience.'
                },
                theaterMode: {
                    title: 'Theater Mode',
                    body: 'Get a full theater mode experience for MusicBee.'
                },
                misc: {
                    title: 'Misc',
                    body: 'Other add-ons.'
                }
            }
        },

        releases: {
            pageTitle: 'Release Notes - MusicBee',

            title: 'Release Notes',
            current: 'Current Version',

            changelog: [
                'Support for Windows 10 style icons and high-dpi screens ...',
                'Several minor bug fixes and improvements'
            ],
            changelogMore: 'View More'
        },

        report: {
            pageTitle: 'Report a Bug - MusicBee',

            title: 'Report a Bug',
            body: `
                Problems with MusicBee? Make sure to
                <span class="bold-text">always have the latest version installed</span>.<br>
                If the problem persists, please fill in this report.
            `,
            form: {
                files: {
                    title: 'Upload the following files:',
                    image: `
                        Image of the problem.<br><span class="small-text">(Can be a GIF)</span>
                    `,
                    log: `
                        Error log.<br>
                        <span class="small-text">(Help &#62; Support &#62; View Error Log)</span>
                    `
                },
                steps: {
                    title: 'Provide the steps needed to replicate the issue:',
                    placeholder: 'Write down the steps.'
                },
                buttons: {
                    submit: 'Submit',
                    clear: 'Clear'
                }
            },
            alternative: `
                Alternatively, <a class="secondary-a" href="#">create a forum thread</a> 
                or <a class="secondary-a" href="#">report a bug in the website</a>. 
            `
        },

        api: {
            pageTitle: 'API - MusicBee',

            musicbee: {
                title: 'MusicBee API v3.1',
                body: `
                    MusicBee API enables plugin developers to access information
                    held in MusicBee and to control MusicBee. Enable your plugin to be
                    notified of player events, retrieve tag data, and control the player.
                `,
                buttons: {
                    cSharp: 'C# Source',
                    vbNet: 'VB.NET Source'
                }
            },

            website: {
                title: 'Website API v1.0',
                body: `
                    Website API provides a great way to get MusicBee release,
                    download, addons detail and updates as well as addons search.
                    The API is experimental and might contain unknown response/data.<br>
                    <span class="highlighted-text bold-text">Request Type:</span> GET<br>
                    <span class="highlighted-text bold-text">Return Type:</span> JSON<br>
                    <span class="highlighted-text bold-text">No API key required.</span>
                `
            },

            guide: 'API Guide'
        },

        help: {
            pageTitle: 'FAQ & Help - MusicBee',

            title: 'Help',
            mainLinks: {
                gettingStarted: 'Getting<br>Started',
                customization: 'Customization<br>Guide',
                organizing: 'Organizing<br>Libraries',
                devApi: 'Developer<br>API Guide'
            },

            faqTitle: 'Frequently Asked Questions',
            faq: [
                {
                    question: 'Who makes MusicBee?',
                    answer: `
                        MusicBee is authored by one person, Steven Mayall, who does this
                        for free in his spare time. He is very active on the forum.
                        At the time of this writing, about 1/4 of all forum posts are Steven's.
                        He responds to appropriately formatted bug reports as quickly as possible, 
                        but as MusicBee gains more users, he may not be able to address every one. 
                    `
                },
                {
                    question: 'Are there any limitations on using MusicBee?',
                    answer: `
                        MusicBee is freeware for personal use. Anything is fair game as
                        long as you're not selling it.
                    `
                },
                {
                    question: 'Is MusicBee open source?',
                    answer: `
                        No. There has been lengthy debate on this topic among users, but Steven
                        is firm that he will consider making MusicBee open source only when he's
                        no longer developing it.
                    `
                },
                {
                    question: 'How can I support MusicBee?',
                    answer: `
                        Donating via PayPal to support website expenses; developing plugins,
                        skins, or Theater Modes; helping with translation; writing documentation
                        on the wiki; answering questions from other users on the forum.
                    `
                }
            ],
            faqMore: 'More Questions'
        }
    },

    // Español
    es: {
        name: 'Español',
        abbreviation: 'es',

        nav: {
            home: 'Home',
            download: 'Descargar',
            addons: 'Complementos',
            forum: 'Foro',
            help: 'Ayuda',

            skins: 'Temas',
            plugins: 'Plugins',
            visualizer: 'Visualizador',
            theaterMode: 'Modo Teatro',
            misc: 'Otros',

            faq: 'FAQ & Ayuda',
            devApi: 'API de Desarrollador',
            releaseNotes: 'Notas de Lanzamiento',
            reportBug: 'Reportar un Bug',
            wiki: 'Wiki de MusicBee'
        },

        themes: {
            light: 'Liviano',
            neon: 'Neón',
            arsenic: 'Arsénico',
            cherry: 'Cherry',
            ocean: 'Océano',
            commodore: 'Commodore',
            hive: 'Colmena',
            bubblegum: 'Chicle'
        },

        footer: {
            donate: {
                body: '¿Quieres contribuir a MusicBee?',
                button: 'Donar con Paypal'
            },

            copyright: [
                'Sitio construido con ',
                'para la comunidad',
                'Copyright © Steven Mayall 2008-2022, Todos los Derechos Reservados.'
            ] 
        },

        index: {
            pageTitle: 'MusicBee',

            header: {
                title: 'Simple. Rápida. Gratis.',
                body: 'MusicBee es la manera más facil de organizar,<br> descubrir y reproducir música en tu computadora.',
                download: 'Descarga Ahora',
                features: 'Ver Características'
            },

            customization: {
                title: 'Totalmente Customizable',
                body: `
                    Personaliza MusicBee a tu gusto eligiendo<br class="hidden-mobile">
                    entre <a class="highlighted-text" href="addons.html?filter=skins">+100 temas creados por usuarios</a>.
                `,
                random: 'Aleatorio'
            },

            sync: {
                title: 'Sincronización & Conversión',
                body: `
                    Sincroniza tu música con cualquier dispositivo y convierte formatos en el momento<br class="hidden-mobile">
                    para escuchar tus canciones favoritas desde cualquier lado.
                `
            },

            features: {
                title: 'La Calidad del Sonido Importa',
                list: [
                    {
                        title: 'Reproducción sin pausas',
                        body: 'Escucha tus listas de reproduccion<br>sin interrupciones entre canciones.'
                    },
                    {
                        title: 'Surround Sound',
                        body: 'Transforma el stereo a surround sound 5.1<br>para una experience más inmersiva.'
                    },
                    {
                        title: 'Soporte de Groove Music',
                        body: 'Hacé stream directo de MusicBee<br>o agrega tus listas de reproducción ya creadas.'
                    },
                    {
                        title: 'Soporte de Plugins',
                        body: 'Añade funcionalidades a MusicBee<br>con plugins de todo tipo.'
                    }
                ]
            },

            more: {
                title: 'Y <span class="highlighted-text bold-text">Mucho, Mucho</span> Más...',
                body: 'Mejora tu experiencia musical gratuitamente<br class="hidden-mobile">y descubre todo lo que MusicBee tiene para ofrecer.',
                download: 'Descarga MusicBee para Windows'
            }
        },

        download: {
            pageTitle: 'Descargar - MusicBee',

            title: 'MusicBee para Windows',
            body: 'El mejor reproductor de música para tu PC, a un click de distancia.',
            buttons: [
                'Descargar MusicBee<br><span class="small-text">Para Windows 7 / 8 / 10</span>',
                'Descargar Versión Portable<br><span class="small-text">Puede ser instalada en un USB.</span>',
                'Versión de Windows Store<br><span class="small-text">Incluye actualizaciones automáticas.</span>'
            ],
            version: 'v3.4.8003 | 2 de Enero, 2022',
            releaseNotesButton: 'Notas de Lanzamiento'
        },

        addons: {
            pageTitle: 'Add-ons - MusicBee',

            title: 'Complementos para MusicBee',
            by: 'por',
            userLevel: {
                elite: 'Élite',
                admin: 'Admin'
            },
            popular: 'Popular',
            new: 'Nuevo',
            topMembers: 'Top Miembros',
            submit: 'Sube tu Complemento',
            search: 'Buscar',

            filters: {
                all: {
                    title: 'Todos',
                    body: '&nbsp;'
                },
                skins: {
                    title: 'Temas',
                    body: 'Haz que MusicBee se vea como tú quieras.'
                },
                plugins: {
                    title: 'Plugins',
                    body: 'Añade funciones a MusicBee.'
                },
                visualizer: {
                    title: 'Visualizadores',
                    body: 'Obtén coloridos visualizadores para deleitar a tu ojo.'
                },
                theaterMode: {
                    title: 'Modo Teatro',
                    body: 'Consigue una experience de teatro para MusicBee.'
                },
                misc: {
                    title: 'Otros',
                    body: 'Otros complementos.'
                }
            }
        },

        releases: {
            pageTitle: 'Notas de Lanzamiento - MusicBee',

            title: 'Notas de Lanzamiento',
            current: 'Versión actual',

            changelog: [
                'Soporte para iconos de Windows 10 y pantallas de dpi alto ...',
                'Varios arreglos de bugs y mejoras generales.'
            ],
            changelogMore: 'Ver Más'
        },
        
        report: {
            pageTitle: 'Reportar un Bug - MusicBee',

            title: 'Reportar un Bug',
            body: `
                ¿Problemas con MusicBee? Asegúrate de
                <span class="bold-text">siempre tener instalada la última versión</span>.<br>
                Si el problema persiste, por favor llena este formulario.
            `,
            form: {
                files: {
                    title: 'Sube los siguientes archivos:',
                    image: `
                        Imagen del problema.<br><span class="small-text">(Puede ser un GIF)</span>
                    `,
                    log: `
                        Historial de errores.<br>
                        <span class="small-text">(Ayuda &#62; Soporte &#62; Ver historial de errores)</span>
                    `
                },
                steps: {
                    title: 'Provee los pasos necesarios para reproducir el error:',
                    placeholder: 'Escribe los pasos.'
                },
                buttons: {
                    submit: 'Mandar',
                    clear: 'Borrar'
                }
            },
            alternative: `
                También puedes <a class="secondary-a" href="#">crear un post en el foro</a> 
                o <a class="secondary-a" href="#">reportar un bug en el sitio web.</a>. 
            `
        },

        api: {
            pageTitle: 'API - MusicBee',

            musicbee: {
                title: 'MusicBee API v3.1',
                body: `
                    La API de MusicBee les permite a los desarrolladores de plugins
                    acceder a información guardada en MusicBee y a controlar el programa.
                    Activa tu plugin para recibir notificaciones de eventos del reproductor,
                    recibir información de etiquetas, y controlar el reproductor.
                `,
                buttons: {
                    cSharp: 'C# Source',
                    vbNet: 'VB.NET Source'
                }
            },

            website: {
                title: 'API de Sitio Web v1.0',
                body: `
                    La API de Sitio Web provee una gran manera de conseguir información
                    de lanzamientos, descargas, y addons de MusicBee, además de búsquedas
                    de addons. Esta API es experimental y podría contener repuestas/data
                    desconocida.<br>
                    <span class="highlighted-text bold-text">Request Type:</span> GET<br>
                    <span class="highlighted-text bold-text">Return Type:</span> JSON<br>
                    <span class="highlighted-text bold-text">No require key.</span>
                `
            },

            guide: 'Guía de la API'
        },

        help: {
            pageTitle: 'FAQ & Ayuda - MusicBee',

            title: 'Ayuda',
            mainLinks: {
                gettingStarted: 'Empezando<br>con MusicBee',
                customization: 'Guía de<br>Customización',
                organizing: 'Organizando<br>Librerías',
                devApi: 'Guía de API<br>para Desarrolladores'
            },

            faqTitle: 'Preguntas Frecuentes',
            faq: [
                {
                    question: '¿Quién trabaja en MusicBee?',
                    answer: `
                        MusicBee es mantenido por una sola persona, Steven Mayall, quien lo
                        hace de manera gratuita en su tiempo libre. Es muy activo en el foro.
                        En el momento en que se escribió esto, cerca de un cuarto de los posts
                        en el foro son de Steven. Responde a los bugs que se hayan posteado
                        acordemente, lo más rápido posible, pero mientras más usuarios gana
                        MusicBee, quizás no pueda llegar a responderle a todos.
                    `
                },
                {
                    question: '¿Hay alguna limitación al usar MusicBee?',
                    answer: `
                        MusicBee es un programa gratis para uso personal. Cualquier cosa
                        puede hacerse con el programa mientras no lo estés vendiendo.
                    `
                },
                {
                    question: '¿MusicBee es de código abierto?',
                    answer: `
                        No. Ha habido un largo debato sobre este tema entre los usuarios, pero
                        Steven es firme en que considerará a MusicBee de código abierto recién
                        cuando él ya no lo esté desarrollando.
                    `
                },
                {
                    question: '¿Cómo puedo ayudar a MusicBee?',
                    answer: `
                        Donando a través de PayPal para ayudar con los gastos del sitio;
                        desarrollando plugins, temas, o Modos Teatro; ayudanco con las traducciones;
                        escribiendo documentación en la Wiki; respondiendo preguntas de otros usuarios
                        en el foro.
                    `
                }
            ],
            faqMore: 'Más Preguntas'
        }
    }
};


// --- PROTOTYPE ---


// Release Notes

const RELEASES = [
    {
        version: '3.4.8033',
        date: 'January 3, 2022'
    },
    {
        version: '3.4.7805',
        date: 'May 17, 2021'
    },
    {
        version: '3.4.7764',
        date: 'April 6, 2021'
    },
    {
        version: '3.3.7491',
        date: 'July 7, 2020'
    },
    {
        version: '3.3.7367',
        date: 'March 11, 2020'
    },
    {
        version: '3.3.7310',
        date: 'January 9, 2020'
    }
];

const ADDONS = {
    popular: [
        {
            title: 'Win10 Media Control Overlay',
            author: 'Steven',
            likes: 85,
            thumbnail: 'mediacontroloverlay.jpg'
        },
        {
            title: 'MusicBee Remote Plugin',
            author: 'kelsos',
            likes: 79,
            thumbnail: 'remoteplugin.jpg'
        },
        {
            title: 'DiscordBee',
            author: 'derTyp',
            likes: 78,
            thumbnail: 'discordbee.jpg'
        },
        {
            title: "Spotify's Accent Dark",
            author: 'nobuyback',
            likes: 70,
            thumbnail: 'spotifysaccentdark.jpg'
        },
        {
            title: 'Taskbar Progress',
            author: 'AvikB',
            likes: 53,
            thumbnail: 'taskbarprogress.jpg'
        },
        {
            title: 'Milkdrop Visualizer',
            author: 'Steven',
            likes: 47,
            thumbnail: 'milkdrop.jpg'
        }
    ],
    new: [
        {
            title: 'iPod & iPhone Driver 2.0',
            author: 'BoringName',
            likes: 0,
            thumbnail: 'ipoddriver.png'
        },
        {
            title: 'HomeboySpec',
            author: 'Weather',
            likes: 0,
            thumbnail: 'homeboyspec.jpg'
        },
        {
            title: 'Old AVS Presets',
            author: 'Weather',
            likes: 2,
            thumbnail: 'oldavspresets.jpg'
        },
        {
            title: 'Lyrics Reloaded',
            author: 'frankz',
            likes: 3,
            thumbnail: 'lyricsreloaded.jpg'
        },
        {
            title: 'Beenius',
            author: 'slonopot',
            likes: 3,
            thumbnail: 'beenius.jpg'
        },
        {
            title: 'The Blue Bee and the Sea',
            author: 'hiccup',
            likes: 5,
            thumbnail: 'bluebee.jpg'
        }
    ]
};

const TOPMEMBERS = [
    {
        name: 'Clarence',
        level: 0,
        addons: 96,
        picture: '1.png'
    },
    {
        name: 'raul',
        level: 0,
        addons: 75,
        picture: '2.jpg'
    },
    {
        name: 'Bee-liever',
        level: 0,
        addons: 31,
        picture: '3.png'
    },
    {
        name: 'hiccup',
        level: 0,
        addons: 29,
        picture: '4.gif'
    },
    {
        name: 'boroda',
        level: 0,
        addons: 20,
        picture: '2.jpg'
    },
    {
        name: 'lasc',
        level: 0,
        addons: 20,
        picture: '2.jpg'
    },
    {
        name: 'Weather',
        level: 0,
        addons: 16,
        picture: '2.jpg'
    },
    {
        name: 'Steven',
        level: 1,
        addons: 14,
        picture: '5.png'
    },
];