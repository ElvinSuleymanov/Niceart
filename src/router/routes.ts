export enum Routes {
    default = '/',
    auth = '/auth',
    home = '/',
    table = '/table',
    form = '/form',
    login = '/auth/login',
    users = '/users',
    about = '/about',
    products = '/products',
    partners = '/partners',
    contact = '/contact',
    productDetail = '/products',
     //api endpoints
     leads = '65853dee1f5677401f11c441',
     video = '65856a21266cfc3fde6cd103',
     contactApi = '65856b0d1f5677401f11d4d9',
     purposes = '658926491f5677401f1301ec',
     strategies = '65892699dc74654018887158',
     partnersApi = '65892bfbdc746540188872ce',
     contactFiles = '65892f171f5677401f13044e',
     productsApi = '65896e2a266cfc3fde6e1298'
}


export const goTo = (route: string, param: string | number) => {
    return route + '/' + param;
};

export const goToWithQuery = (route: string, param: any) => {
    let path = route + '?';
    if (param)
        for (const key in param) {
            if (path.substr(path.length - 1) !== '?')
                path += '&';
            path += key + '=' + param[`${key}`];
        }
    return path;
};
