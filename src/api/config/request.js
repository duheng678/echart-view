import axios from 'axios';

class MoonRequest {
    constructor(options) {
        //拦截器钩子
        this.interceptorHooks = options.interceptorHooks;
        //创建实例
        this.instance = axios.create(options);
        //调用拦截器
        this.setupInterceptor();
    }
    //拦截器函数
    setupInterceptor() {
        //使用传入的拦截器钩子
        this.instance.interceptors.request.use(
            this.interceptorHooks?.requestInterceptor,
            this.interceptorHooks?.requestInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.interceptorHooks?.responseInterceptor,
            this.interceptorHooks?.responseInterceptorCatch
        );
        //或为类创建拦截器
        this.instance.interceptors.request.use(config => {
            return config;
        });
        this.instance.interceptors.response.use(
            res => res,
            err => err
        );
    }
    //请求
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    //各种请求方法
    get(config) {
        return this.request({ ...config, method: 'GET' });
    }
    post(config) {
        return this.request({ ...config, method: 'POST' });
    }
    patch(config) {
        return this.request({ ...config, method: 'PATCH' });
    }
    delete(config) {
        return this.request({ ...config, method: 'DELETE' });
    }
}

export default MoonRequest;
