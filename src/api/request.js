import axios from "axios";
import Promise from "promise";
// import { Mesage } from "element-ui";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
axios.defaults.header.post['Content-type']="application/json;charset=utf-8";

var service=axios.create({
    baseURL:'',
    timeout:5000
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

export default service;