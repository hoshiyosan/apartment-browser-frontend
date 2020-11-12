import { Apartment } from './types/apartment'

const comment1 = `
# Mindset

A wonderful apartment in Rennes city center

## Defaults

To blue for me!
`

const comment2 = `
# Second

a way more convenient apartment [next to my work](https://www.google.fr/maps/place/5+Rue+du+Ch%C3%AAne+Germain,+35510+Cesson-S%C3%A9vign%C3%A9/@48.1298283,-1.6298681,17z/data=!3m1!4b1!4m5!3m4!1s0x480edebf3657eecd:0xd56d71213922d9b6!8m2!3d48.1298247!4d-1.6276741)

## Defaults

To close to whitefields!
`

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
        },
        costs: [
            { name: 'Facture électricité', amount: 100000 },
            { name: 'Facture eau', amount: 20000 }
        ],
        comment: comment1
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
        },
        costs: [
            { name: 'Prix achat', amount: 200000 },
            { name: 'Charges sur 25 ans', amount: 25000 },
            { name: 'Electricité sur 25 ans', amount: 50000 }
        ],
        comment: comment2
    }
}