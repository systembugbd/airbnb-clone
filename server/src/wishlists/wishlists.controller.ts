import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WishlistsService } from "./wishlists.service";
import { WishlistsControllerBase } from "./base/wishlists.controller.base";

@swagger.ApiTags("wishlists")
@common.Controller("wishlists")
export class WishlistsController extends WishlistsControllerBase {
  constructor(
    protected readonly service: WishlistsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
