import {types} from 'mobx-state-tree'
// observable properties below *****
const userCookies = types.model("FortuneCookieModel",{
fortune: types.string,
userName: types.string,
pullNewFortune: types.boolean,
fortuneLiked: types.boolean,
numFortune: types.string,
})


/// functions ***
// getUserFortunes() - a list of all the users fortunes
// pullNewFortune

//FortuneCookieModel