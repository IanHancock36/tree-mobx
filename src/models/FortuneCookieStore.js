import axios from 'axios'
import { types, flow } from 'mobx-state-tree'
import { apiDefineProperty } from 'mobx/dist/internal'
import FortuneCookieList from './FortuneCookieList'
// observable properties below *****
const userCookies = types.model("FortuneCookieModel", {
    // fortune: types.string,
    // userName: types.string,
    fortuneCookieList: types.optional(FortuneCookieList, { fortunes: [] }),
    pullNewFortune: types.boolean,
    // fortuneLiked: types.boolean,
    numFortune: types.string,
    mealPrice: types.string,
}).actions(self => ({
    newFortune() {
        self.pullNewFortune = true
    },
   getFortune = flow(function* getFortune() {
        try {
            const response = yield axios
                .get('http://fortunecookieapi.com/v1/fortunes?limit=&skip=&page=')
            console.log('response', response)
        } catch (e) {
            console.log('error :', e)
        }

        //   .then((value)=> value.data)
    }),
})).views((self) => ({
    status() {
        return self.pullNewFortune ? 'new fortune' : 'not a fortune'
    }
}))

export default userCookies
/// functions ***
// getUserFortunes() - a list of all the users fortunes
// pullNewFortune

//FortuneCookieModel

// actions modify the data inside your model. 