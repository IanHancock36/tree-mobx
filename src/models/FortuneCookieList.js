import { types } from 'mobx-state-tree'
import Fortunes from './Fortunes'
const fortuneCookieList = types.model("FortuneCookieList",{
    //fortunes is the object array from the api call. 
    fortunes: types.array(Fortunes)
})

export default fortuneCookieList
  