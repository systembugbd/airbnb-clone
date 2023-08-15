import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistsCreateInput = {
  listing: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput | null;
};
