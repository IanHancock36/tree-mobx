import { types } from 'mobx-state-tree'

const fortuneCookieList = types.model("FortuneCookieList",{
    //fortunes is the object array from the api call. 
    fortunes: types.array
})

  