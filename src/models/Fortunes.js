import { types } from 'mobx-state-tree'

const Fortunes = types.model('Fortune',{
    // quantity: types.optional(types.number,[]),
    id: types.optional(types.string, ''),
    message: types.optional(types.string,''),
})  



export default Fortunes
// the api call for this is 'http://fortunecookieapi.com/v1/fortunes?limit=&skip=&page='

