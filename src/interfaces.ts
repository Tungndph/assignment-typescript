export interface ITrip {
  id?: string;
  busHouseId: string;
  fromStationId: string;
  isBooked?: number;
 
  startTime: string;
  endTime: string;
  price: number;
  seats: number;
  station: string;
  toStationId?: number;
  busHouse?: IBusHouse;
}

export interface IBusHouse {
  id: string;
  name: string;
  adress: string;
  phone: string;
}

export interface IStation {
  id: string;
  title: string;
  province: string;
}


export interface IUser {
  id?: string | number;
  email: string;
  password: string;
 
}