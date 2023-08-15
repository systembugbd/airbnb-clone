import { WishlistsWhereInput } from "./WishlistsWhereInput";
import { WishlistsOrderByInput } from "./WishlistsOrderByInput";

export type WishlistsFindManyArgs = {
  where?: WishlistsWhereInput;
  orderBy?: Array<WishlistsOrderByInput>;
  skip?: number;
  take?: number;
};
