import {types} from 'mobx-state-tree'
// observable properties below *****
const userCookies = types.model("FortuneCookieModel",{
// fortune: types.string,
// userName: types.string,
 pullNewFortune: types.boolean,
// fortuneLiked: types.boolean,
numFortune: types.string,
mealPrice: types.string,
}).actions((self)=> ({
 newFortune(){
    self.pullNewFortune =true
 }



})).views((self)=> ({
    status(){
  return self.pullNewFortune ? 'new fortune' :'not a fortune'
    }
}))

export default userCookies
/// functions ***
// getUserFortunes() - a list of all the users fortunes
// pullNewFortune

//FortuneCookieModel

// actions modify the data inside your model. 