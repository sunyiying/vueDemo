import axios from "axios";
import Promise from "promise";
// import { Mesage } from "element-ui";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

var service = axios.create({
    baseURL: '',
    timeout: 5000
});

//请求拦截处理 interceptors
service.interceptors.request.use(
    cfg => {
        cfg.data = JSON.stringfy(cfg.data);
        const token = 'abc';
        if (token) {
            cfg.params = { 'token': token };
        }
        return cfg;
    },
    error => {
        return Promise.reject(error);
    }
)

//响应拦截处理
service.interceptors.response.use(
    res => {
        if (res.data.code == 401) {
            //router.pus({path:"/login",query:{redirect:router.currentRoute.fullPath}});
            console.log('no auth');
        }
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);



/**
 * 封装Get/Post方法   返回 promise
 * @param {*} url 
 * @param {*} method 
 * @param {*} params 
 */
export default
    {
        fetch: function fetch(url, method = "get", params = {}) {
            return new Promise((resolve, reject) => {
                if (method.toLowerCase() == "get") {
                    axios.get(url, { params: params })
                        .then(response => {
                            resolve(response.data);
                        })
                        .catch(err => {
                            reject(err);
                        })
                } else {
                    axios.post(url, params)
                        .then(response => {
                            resolve(response);
                        })
                        .catch(err => {
                            reject(err);
                        })
                }
            })
        }
    }
