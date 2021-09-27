import { types } from 'mobx-state-tree'

const Fortune = types.model('Fortune',{
    quantity: types.number,
    id: types.string,
    message: types.string, 
})
export default Fortune
// the api call for this is 'http://fortunecookieapi.com/v1/fortunes?limit=&skip=&page='

