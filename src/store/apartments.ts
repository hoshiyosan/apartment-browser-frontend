import { APPARTMENTS } from '@/mock-data';
import { Apartment, ApartmentSimple } from '@/types/apartment';
//import axios from 'axios'


export default {
    actions: {
        getApartmentDetails(context: object, apartmentId: string): Promise<Apartment> {
            return new Promise(resolve => {
                /*
                axios.get(process.env.VUE_APP_BACKEND_URL + '/apartments/' + apartmentId)
                    .then(response => resolve(response.data))
                */
                // MOCKED
                resolve(APPARTMENTS[apartmentId]);
            });
        },
        browseApartments(): Promise<ApartmentSimple[]> {
            return new Promise(resolve => {
                /*
                axios.get(process.env.VUE_APP_BACKEND_URL + '/apartments')
                    .then(response => resolve(response.data));
                */
                // MOCKED
                resolve(Object.values(APPARTMENTS));
            })
        },
        createApartment(context: object, apartment: Apartment): Promise<Apartment> {
            return new Promise(resolve => {
                /*
                axios.post(process.env.VUE_APP_BACKEND_URL + '/apartments', apartment)
                    .then(response=>resolve(response.data));
                */
                // MOCKED
                resolve(apartment);
            })
        }
    }
};
