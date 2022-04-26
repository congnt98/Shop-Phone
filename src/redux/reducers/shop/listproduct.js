import { SHOWCATEGORY, SHOWPRODUCT, SHOWPRODUCTDISCOUNT } from "../../constants/actionTypes";
var initState = [

]
const listProduct = (state = initState, action) => {
    switch (action.type) {
        case SHOWPRODUCT:
            return [...action.listproduct]
        case SHOWCATEGORY:
            return state
        case SHOWPRODUCTDISCOUNT:
            return state
        default:
            return state;
    }
}
export default listProduct





















 // {
        // "cat": "iphone",
        // "name": "Iphone 6 Plus",
        // "image": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        // "description": "sản phẩm được sản xuất tại hoa kỳ",
        // "price": 1000,
        // "rating": 4,
        // "inventory": 10,
        // "status": true,
        // "discount": 10,
    // },
    // {
        // "cat": "samsung",
        // "name": "Samsung 11",
        // "image": "https://images.samsung.com/is/image/samsung/vn-galaxy-a71-a715-sm-a715fzkdxxv-front-237807510?$720_576_PNG$",
        // "description": "sản phẩm được sản xuất tại hoa mỹ",
        // "price": 1000,
        // "rating": 3,
        // "inventory": 10,
        // "status": true,
        // "discount": 30

    // },
    // {

        // "cat": "xiaomi",
        // "name": "Xiaomi 11 note",
        // "image": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        // "description": "sản phẩm được sản xuất tại china",
        // "price": 7000,
        // "rating": 5,
        // "inventory": 10,
        // "status": true,
        // "discount": 20
    // },
    // {
        // "cat": "iphone",
        // "name": "Iphone 11",
        // "description": "sản phẩm được sản xuất tại hoa kỳ",
        // "image": "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg",
        // "price": 1600000,
        // "rating": 5,
        // "inventory": 10,
        // "status": true,
        // "discount": 50
    // },
    // {
    //     id: 5,
        // "cat": "iphone",
        // "name": "Iphone 13 Pro-Max",
        // "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
        // "description": "sản phẩm được sản xuất tại hoa mỹ",
        // "price": 3000,
        // "rating": 3,
        // "inventory": 10,
        // "status": true,
        // "discount": 10
    // },
    // {
    //     id: 6,
    //     cat: 'xiaomi',
    //     name: 'Iphone 12 Pro-Max',
    //     image: 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xam-new-600x600-600x600.jpg',
    //     description: 'sản phẩm được sản xuất tại china',
    //     price: 2000,
    //     rating: 5,
    //     inventory: 10,
    //     status: true,
    //     discount: 50
    // },