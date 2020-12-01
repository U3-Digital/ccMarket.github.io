import { Film, Image,File } from "react-feather"

export const errorPages = [
    
            { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, title: 'Error 400', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, title: 'Error 401', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, title: 'Error 403', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, title: 'Error 404', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, title: 'Error 500', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, title: 'Error 503', type: 'link' }
]
export const authPages = [
            { path: `${process.env.PUBLIC_URL}/pages/auth/login`, type: 'link', title: 'Login Simple' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg`, type: 'link', title: 'Login with Bg Img' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithVideo`, type: 'link', title: 'Login With Bg Video' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/signup`, type: 'link', title: 'Register Simple' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg`, type: 'link', title: 'Register With Bg Image' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithVideo`, type: 'link', title: 'Register With Bg Video' },
        
]
export const usefullPages = [
            { path: `${process.env.PUBLIC_URL}/pages/auth/unlockUser`, type: 'link', title: 'Unlock User' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/forgetPwd`, type: 'link', title: 'Forget Password' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/resetPwd`, type: 'link', title: 'Reset Password' },
            { path: `${process.env.PUBLIC_URL}/pages/maintenance`, type: 'link', title: 'Maintenance' }
]

export const comingsoonPages = [
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, title: 'Coming Simple',icon:File, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`, title: 'Coming With Bg Img',icon:Film, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`, title: 'Coming With Bg Video',icon:Image, type: 'link' },
]