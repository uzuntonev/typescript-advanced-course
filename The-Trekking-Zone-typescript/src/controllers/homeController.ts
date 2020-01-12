import { getSessionInfo, loadAllPartials } from "../scripts/helpers.js";
import { get } from "../scripts/requester.js";
import { IContext } from "../scripts/interfaces.js";

export const homeController = {
  getHome: function(ctx: IContext) {
    getSessionInfo(ctx);
    const partials = {
      anonymous: "../src/templates/partials/anonymous.hbs",
      singleTrek: "../src/templates/partials/single-trek.hbs"
    };
    if (ctx.loggedIn) {
      get("appdata", "treks", "Kinvey").then(
        (treks: { likes: number; [key: string]: any }[]) => {
          const sorted = treks.sort((a, b) => b.likes - a.likes);
          ctx.treks = sorted;
          loadAllPartials(ctx, partials).partial("../src/templates/home.hbs");
        }
      );
    } else {
      loadAllPartials(ctx, partials).partial("../src/templates/home.hbs");
    }
  }
};
