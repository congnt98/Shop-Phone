import { SHOWCATEGORY } from "../../constants/actionTypes"

var initState = [
    {
        name: 'Iphone',
        tabid: '#list-iphone',
        tagname: 'iphone',

    },
    {
        name: 'Samsung',
        tabid: '#list-samsung',
        tagname: 'samsung',

    },
    {
        name: 'Oppo',
        tabid: '#list-oppo',
        tagname: 'oppo',


    },
    {
        name: 'Xiaomi',
        tabid: '#list-xiaomi',
        tagname: 'xiaomi',


    }
]

const Category = (state = initState, action) => {
    switch (action.type) {

        case SHOWCATEGORY:
            return state
        default:
            return state
    }
}
export default Category