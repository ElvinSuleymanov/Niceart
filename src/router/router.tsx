import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from 'core/layouts/public/public.component';
import HomeComponent from 'pages/home/home.component';
import TableComponent from 'pages/table/table.component';
import {Routes} from './routes';
import NotFound from 'pages/not-found/notfound.component';
import AuthProtectedComponent from './protected/auth-protected.component';
import UsersComponent from 'pages/users/users.component';
import AboutComponent from 'pages/about/about.component';
import PartnersComponent from 'pages/partners/partners.component';
import ContactComponent from 'pages/contact/contact.component';
import { ProductsComponent } from 'pages/products/products.componet';
import ProductDetailComponent from 'pages/product-detail/product-detail.component';

const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout='public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
            {
                path:Routes.about,
                element:<AboutComponent/>
            },
            {
                path: Routes.table,
                element: <TableComponent/>,
            },
            {
                path:Routes.users,
                element: <UsersComponent/>
            },
            {
                path:Routes.products,
                element:<ProductsComponent/>
            },
            {
                path:`${ Routes.productDetail}/:productId`,
                element:<ProductDetailComponent/>
            },
            {
                path:Routes.partners,
                element:<PartnersComponent/>
            },
            {
                path:Routes.products,
                element:<ProductsComponent/>
            },
            {
                path:Routes.contact,
                element:<ContactComponent/>
            }
        ],
    },
    // {
    //     path: Routes.auth,
    //     element: <AuthProtectedComponent layout='auth'><AuthComponent/></AuthProtectedComponent>,
    //     children: [
    //         {
    //             path: Routes.login,
    //             element: <LoginComponent/>,
    //         }
    //     ],
    // },
    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
