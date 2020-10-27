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
                        // routerData.push( 
                        //     {
                        //         path: "/index",
                        //         icon: "location",
                        //         name: "index",
                        //         component:()=>import("../views/home/index"),
                        //         label: "首页"
                        //     });

                        var mainRouter = {
                            path: "/",
                            name: "home",
                             redirect:'/home/index',
                            component: () => import("../views/Main.vue"),
                            children: routerData
                        };
                        console.log('mainRouter',mainRouter);
                        commit("set_router", mainRouter)
                        resolve([mainRouter,{path:"*",name:"nofound",component: () => import("../views/noFound.vue")}]);
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
     console.log('第一次加工后路由', routes);
    //  routes.forEach(c=>{
    //     c.path=c.parentPath;
    //  });
    //  console.log('第二次加工后路由', routes);

}

export const loadView = (view) => { // 路由懒加载
    view = '' + view
    view = view.replace(/^\/{1,}/g, '')
    // console.log('view==',view);
    return (resolve) => require([`@/views/${view}`], resolve)
}