import { Wishlists as TWishlists } from "../api/wishlists/Wishlists";

export const WISHLISTS_TITLE_FIELD = "id";

export const WishlistsTitle = (record: TWishlists): string => {
  return record.id || String(record.id);
};
