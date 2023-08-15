import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistsUpdateInput = {
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput | null;
};
