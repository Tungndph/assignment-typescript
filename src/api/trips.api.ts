import { ITrip } from "../interfaces";
import instance from "./instance";
export const getTrips = (query: string) => {
  const uri = "/trips?" + query;
    const data = instance.get(uri)
    return data
}


export const getTripById = (id: number | string) => {
    const data = instance.get("/trips/" + id)
    return data
}
export const postTrip = async (tripData) => {
  const data = await instance.post("/trips", tripData);
  return data;
}


// export const putTrip = async (id: string | number, data: ITrip) => {
//     const url = "trips/" + id
//     return instance.put(url, data)
// }

// export const deleteTrip = async (id: string | number) => {
//     const url = "trips"
//     return instance.delete(url)
// }


export const putTrip = async (id: string | number, data: ITrip) => {
  const url = `/trips/${data.id}`;
  const response = await instance.put(url, data);
  return response.data;
}

export const deleteTrip = async (id: string | number) => {
  const url = `/trips/${id}`;
  const response = await instance.delete(url);
  return response.data;
}



