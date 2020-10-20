export default ({
    state: {
        menus:[],
        currentMenu:null,
        isCollapse:false,
        tabList:[
            {
                path: "/",
                label: "首頁",
                 name:"home",
                // icon: "home" 
            }
        ]
    },
    mutations: {
        selectMenu(state,selMenu){
            if(selMenu.name!=="home")
                state.currentMenu=selMenu;

        },
        closeMenu(state,selMenu){
            if(selMenu.name!="home"){
                let index=state.tabList.findIndex(c=>c.name==selMenu.name);
                state.tabList.splice(index,1);
            }
        },
        collapseMenu(state){
            state.isCollapse=!state.isCollapse;
        }
    },
    actions: {}
})