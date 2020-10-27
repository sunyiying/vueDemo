export default ({
    state: {
        menus: [],
        currentMenu: null,
        isCollapse: false,
        tabList: [
            {
                path: "/",
                label: "首頁",
                name: "home",
                // icon: "home" 
                type: ""
            }
        ]
    },
    mutations: {
        selectMenu(state, selMenu) {
            console.log('menu select:', selMenu.name);
            if (selMenu.name !== "home") {
                state.currentMenu = selMenu;
                console.log(state.currentMenu);
            }
            let index = state.tabList.findIndex(c => c.name == selMenu.name);
            if (index == -1) {
                state.tabList.push(selMenu);
            }
            state.tabList.map(c => {
                c.type == c.name === state.currentMenu.name ? "success" : ""
            });
            console.log('menu count', state.tabList.length);


        },
        closeMenu(state, selMenu) {
            if (selMenu.name != "home") {
                let index = state.tabList.findIndex(c => c.name == selMenu.name);
                state.tabList.splice(index, 1);
            }
            console.log('menu count', state.tabList.length);
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
            console.log('isCollapse==>',state.isCollapse);
        }
    },
    actions: {}
})