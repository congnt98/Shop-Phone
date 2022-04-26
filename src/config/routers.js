import CartPage from "../page/cartPage/cartPage"
import DetailProductPage from "../page/detaiProductPage/detailProductPage"
import HomePage from "../page/homePage/homePage"
import NotFound404 from "../page/notFoundPage/notFoundPage"
import ShopPage from "../page/shopPage/shopPage"


const Routers = [
    {
        name: 'notFound404',
        path: '*',
        element: <NotFound404 />
    },
    {
        name: 'Home',
        path: '/',
        element: <HomePage />
    },
    {
        name: 'Shop',
        path: '/shop',
        element: <ShopPage />
    },
    {
        name: 'Cart',
        path: '/cart',
        element: <CartPage />
    },
    {
        name: 'Home',
        path: '/:slug',
        element: <DetailProductPage />
    },

]
export default Routers