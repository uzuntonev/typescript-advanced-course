import { IContext } from "../scripts/interfaces.js";

export function getSessionInfo(ctx: IContext) {
  ctx.authtoken = sessionStorage.getItem("authtoken");
  ctx.username = sessionStorage.getItem("username");
  ctx.userId = sessionStorage.getItem("userId");
  ctx.loggedIn = sessionStorage.getItem("authtoken") !== null;
  ctx.fullName = sessionStorage.getItem("fullName");
}

export function setSessionInfo(response: { [key: string]: any }) {
  sessionStorage.setItem("userId", response._id);
  sessionStorage.setItem("username", response.username);
  sessionStorage.setItem("authtoken", response._kmd.authtoken);
  sessionStorage.setItem(
    "fullName",
    `${response.firstName} ${response.lastName}`
  );
}

export function loadAllPartials(ctx: IContext, partials: { [key: string]: string }) {
  const defaultPartials = {
    header: "../src/templates/common/header.hbs",
    footer: "../src/templates/common/footer.hbs"
  };

  for (const key in partials) {
    if (partials.hasOwnProperty(key)) {
            (defaultPartials as any)[key] = partials[key];
        
    }
  }
  return ctx.loadPartials(defaultPartials);
}
