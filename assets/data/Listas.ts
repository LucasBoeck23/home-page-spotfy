import { ImageProps } from "react-native"


export interface Estacoes{
    name:string,
    image:ImageProps["source"]
}

export interface Albuns{
    name:string,
    image:ImageProps["source"]
    tipo: string,
    artista: string
}


const Blond = require("../capas/Blond.jpeg");
const Dawn = require("../capas/DawnFm.jpeg");
const Yandhi = require("../capas/Yandhi.jpeg");
const Validation = require("../capas/Validation.jpeg");
const NWA = require("../capas/Nwa.jpeg");
const Dre = require("../capas/Dre.jpeg");
const Nsync = require("../capas/Nsync.jpeg");
const Yeezus = require("../capas/Yeezus.jpeg");
const Channel = require("../capas/ChannelOrange.jpeg");

const tyler = require("../this_is/Tyler.jpeg")
const Love = require("../this_is/Love.jpeg")
const Kaiky = require("../this_is/Kaiky.jpeg")
const Billie = require("../this_is/Billie.jpeg")
const Paul = require("../this_is/Paul.jpg")

const RadioYe = require("../Radio/RadioYe.png")
const RadioTravis = require("../Radio/RadioTravis.png")
const RadioMendes = require("../Radio/RadioMendes.png")
const RadioMatue = require("../Radio/RadioMatue.png")
const RadioAriana = require("../Radio/RadioAriana.png")

const Foo = require("../capas/Foo.jpeg")
const Astro = require("../capas/Astro.jpeg")
const Taylor = require("../capas/Reputation.jpeg")
const Kendrick = require("../capas/Kendrick.jpeg")
const MfDoom = require("../capas/MfDoom.jpeg")

export const melhorDeCadaArtista: Estacoes[] =[
    {
    name: "Aproveite o melhor da nova geração do rap",
    image: tyler
    },
    {
    name: "Pra escutar com o Mozão!!",
    image: Love
    },
    {
    name: "Imagine all the people",
    image: Paul
    },
    {
    name: "Louvor de igreja parede preta",
    image: Kaiky
    },
    {
    name: "Pra você mandar pro ex e dizer: nós dois",
    image: Billie
    },
]



export const EstacoesRecomendadas: Estacoes[] =[
    {
    name: "Kanye West, Kendrick Lamar, The Weeknd, ...",
    image: RadioYe
    },
    {
    name: "Travis Scott, Playboi Carti, A$AP Rocky, ...",
    image: RadioTravis
    },
    {
    name: "Shawn Mendes, Camilla Cabello, OneRepublic, ...",
    image: RadioMendes
    },
    {
    name: "Matuê, WIU, Teto, Xamã, Marcos Baroni",
    image: RadioMatue
    },
    {
    name: "Taylor Swift, Billie Eilish, Ariana Grande, ...",
    image: RadioAriana
    },
]

export const RecomendadoDeHoje: Albuns[] = [
    {
        name: "Channel Orange",
        image: Channel,
        tipo:"Álbum",
        artista:"Frank Ocean"
    },
    {
        name: "Straight Outta Compton",
        image: NWA,
        tipo:"Álbum",
        artista:"N.W.A."
    },
    {
        name: "The Chronic",
        image: Dre,
        tipo:"Álbum",
        artista:"Dr.Dre"
    },
    {
        name: "No strings attached",
        image: Nsync,
        tipo:"Álbum",
        artista:"Nsync"
    },
    {
        name: "Yeezus",
        image: Yeezus,
        tipo:"Álbum",
        artista:"Ye"
    },
]

export const Novidades: Albuns[] = [
    {
        name: "The Colour and the Shape",
        image: Foo,
        tipo:"Álbum",
        artista:"Foo Fighters"
    },
    {
        name: "Damn",
        image: Kendrick,
        tipo:"Álbum",
        artista:"Kendrick lamar"
    },
    {
        name: "Reputation",
        image: Taylor,
        tipo:"Álbum",
        artista:"Taylor Swift"
    },
    {
        name: "MM...FOOD",
        image: MfDoom,
        tipo:"Álbum",
        artista:"MfDoom"
    },
    {
        name: "Astroworld",
        image: Astro,
        tipo:"Álbum",
        artista:"Travis Scott"
    },
]