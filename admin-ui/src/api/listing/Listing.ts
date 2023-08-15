import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlists } from "../wishlists/Wishlists";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photo: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string | null;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlist?: Array<Wishlists>;
};
