import { Commit } from 'vuex'
import { APPARTMENTS } from '@/mock-data';
import { Apartment, ApartmentSimple } from '@/types/apartment';
//import axios from 'axios'

/**
 * Defines typing used by store
 */
export interface State {
    selectedApartment?: Apartment;
}

export interface Context { commit: Commit; state: State }


/**
 * Effective store definition
 */
export default {
    namespaced: true,
    state: {
        selectedApartment: null
    },
    mutations: {
        setSelectedApartment(state: State, apartment: Apartment) {
            state.selectedApartment = apartment;
            console.log('selected apartment', apartment);
        }
    },
    actions: {
        selectApartment(context: Context, apartmentId: string): Promise<Apartment> {
            //return
            return new Promise(resolve => {
                const apartment = APPARTMENTS[apartmentId];
                context.commit('setSelectedApartment', apartment);
                resolve(apartment);
            })
        },
        getApartmentDetails(context: Context, apartmentId: string): Promise<Apartment> {
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
        createApartment(context: Context, apartment: Apartment): Promise<Apartment> {
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
