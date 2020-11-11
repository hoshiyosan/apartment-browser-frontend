
export interface Location {
    lat: number;
    lng: number;
}

export default interface Place {
    name: string;
    location: Location;
}
