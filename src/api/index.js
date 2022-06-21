import MoonRequest from './config/request';

const moonRequest = new MoonRequest({
    baseURL: 'https://apis.imooc.com',
    interceptorHooks: {
        requestInterceptor: config => {
            return config;
        },
        requestInterceptorCatch: () => {},
        responseInterceptor: res => {
            if (res.status === 200 && res.data) {
                return res.data;
            } else {
                return Promise.reject('请求失败');
            }
        },
        responseInterceptorCatch: err => {
            return err;
        },
    },
});

export default moonRequest;
