import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WishlistsModuleBase } from "./base/wishlists.module.base";
import { WishlistsService } from "./wishlists.service";
import { WishlistsController } from "./wishlists.controller";
import { WishlistsResolver } from "./wishlists.resolver";

@Module({
  imports: [WishlistsModuleBase, forwardRef(() => AuthModule)],
  controllers: [WishlistsController],
  providers: [WishlistsService, WishlistsResolver],
  exports: [WishlistsService],
})
export class WishlistsModule {}
