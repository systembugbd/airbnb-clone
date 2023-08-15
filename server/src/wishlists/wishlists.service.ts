import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WishlistsServiceBase } from "./base/wishlists.service.base";

@Injectable()
export class WishlistsService extends WishlistsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
