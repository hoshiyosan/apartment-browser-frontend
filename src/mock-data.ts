import { Apartment } from './types/apartment'

export const APPARTMENTS: { [id: string]: Apartment } = {
    'f454f5ez4fez54fe5z': {
        _id: 'f454f5ez4fez54fe5z',
        title: 'Bel appartement sud de Rennes',
        url: 'https://google.com',
        rooms: {
            total: 4,
            kitchen: 1,
            bedroom: 1,
            bathroom: 1,
            livingroom: 1
        },
        place: {
            name: 'Gare de Rennes',
            location: {
                lat: 7447487,
                lng: 48748748
            }
        }
    },
    '4dz4ez4f544ez56': {
        _id: '4dz4ez4f544ez56',
        title: 'Un second appart pas si mal',
        url: 'https://google.com',
        rooms: {
            total: 3,
            kitchen: 1,
            bedroom: 1,
            bathroom: 1,
            livingroom: 0
        },
        place: {
            name: '5 rue du Chênes Germain, Cesson-Sévigné',
            location: {
                lat: 5458451,
                lng: 659858954
            }
        }
    }
}