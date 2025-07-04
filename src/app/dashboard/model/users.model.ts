import { ApiResponse } from "@/app/(application)/(http)/http.model";

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: UserLocation;
  email: string;
  login: UserLoginInfo;
  dob: UserDob;
  registered: UserDob;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: UserPicture;
  nat: string;
};

export type UserSecure = Omit<User, "login"> & {
  login: UserLoginInfoSecure;
};

export type UserProfile = Omit<ApiResponse<UserSecure>, "info">;
export type UserDob = {
  date: string;
  age: number;
};

export type UserLocation = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type UserLoginInfo = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type UserLoginInfoSecure = Pick<UserLoginInfo, "uuid" | "username">;

export type UserPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};
