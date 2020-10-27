import request from "../api/http"
// import router from "../router";

export default {
    state: {
        routers: []      
    },
    mutations: {
        set_router(state, route) {
            state.routers=route;
        }
    },
    actions: {
        GenerateRouter({ commit }) {
            return new Promise((resolve, reject) => {
                request.fetch('/home/getMenuData').then(res => {
                    if (res.code == 200) {
                        let routerData = []
                        GeneralDynamicRouter(res.data, routerData);
                       
                        //  let mainRoute = {
                        //     path: '/',
                        //     component: Layout,
                        //     redirect: 'index',
                        //     type: 0,
                        //     name: 'MenuRoutes',
                        //     children: routes
                        //   }

                        var mainRouter = {
                            path: "/",
                            name: "main",
                            component: () => import("../views/Main.vue"),
                            children: routerData
                        };
                        commit("set_router", mainRouter)
                        resolve([mainRouter,{path:"*",name:"nofound",component: () => import("../views/Main.vue")}]);
                    }
                    else {
                        reject(res);
                    }
                })
            })
        }
    }
}

//动态生成路由
function GeneralDynamicRouter(menus = [], routes = []) {
    menus.forEach(m => {
        if (!m.children || m.children == undefined || m.children.length == 0) {
            if (m.path != '/') {
                m.component = loadView(m.parentPath ?? m.path);
                routes.push(m);
            }
        } else {
            m.children.forEach(a => {
                a.parentPath = (a.parentPath ? a.parentPath : m.path) + a.path;
            })
            GeneralDynamicRouter(m.children, routes);
        }
    })
    // console.log('加工后路由', routes);
}

export const loadView = (view) => { // 路由懒加载
    view = '' + view
    view = view.replace(/^\/{1,}/g, '')
    // console.log('view==',view);
    return (resolve) => require([`@/views/${view}`], resolve)
}