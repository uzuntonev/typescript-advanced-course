import { loadAllPartials, setSessionInfo, getSessionInfo } from '../scripts/helpers.js';
import { displaySuccess, displayError, validateRegisterForm } from '../scripts/notifications.js';
import { post, get } from '../scripts/requester.js';
import { IContext, ITrek } from "../scripts/interfaces.js";

export const userController = {
    getRegister: function (ctx: IContext) {
        loadAllPartials(ctx, {})
            .partial('../src/templates/auth/register.hbs');
    },

    postRegister: function (ctx: IContext) {
        const { username, password, rePassword } = ctx.params;
        if (validateRegisterForm(username!, password!, rePassword)) {
            post('user', '', { username, password }, 'Basic')
                .then(userInfo => {
                    setSessionInfo(userInfo);
                    ctx.redirect('#/');
                    displaySuccess('Successfully registered user.');
                })
                .catch(err => {
                    const statusText = JSON.parse(err.message.split('Error: ')[1]).statusText;
                    if (statusText === 'Conflict') {
                        displayError('Username is already used. Please try again.');
                    }
                });
        }
    },

    getLogin: function (ctx: IContext) {
        loadAllPartials(ctx, {})
            .partial('../src/templates/auth/login.hbs');
    },

    postLogin: function (ctx: IContext) {
        const { username, password } = ctx.params;
        if (username?.trim() && password?.trim()) {
            post('user', 'login', { username, password }, 'Basic')
                .then(userInfo => {
                    setSessionInfo(userInfo);
                    ctx.redirect('#/');
                    displaySuccess('Successfully logged user.');
                })
                .catch((err) => {
                    const statusText: string = JSON.parse(err.message.split('Error: ')[1]).statusText;
                    if (statusText === 'Unauthorized') {
                        displayError('Wrong username or password. Please try again.');
                    }
                });
        } else {
            displayError('All fields must be field!');
        }
    },

    logout: function (ctx: IContext) {
        post('user', '_logout', {}, 'Kinvey')
            .then(() => {
                sessionStorage.clear();
                ctx.redirect('#/');
                displaySuccess('Logout successful.');
            })
            .catch(console.error);
    },

    getProfile: function (ctx: IContext) {
        getSessionInfo(ctx);

        get('appdata', `treks/?query={"_acl":{"creator":"${ctx.userId}"}}`, 'Kinvey')
            .then((res: ITrek[])=> {
                ctx.count = res.length;
                ctx.treks = res.map(x => x.location);
 
                loadAllPartials(ctx, {})
                    .partial('../src/templates/profile.hbs');
            });
    },
};

