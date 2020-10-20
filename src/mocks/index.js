import Mock from "mockjs";
import homeData from "./homeData";

Mock.setup({
    timeout:'200-2000'
});


 
//方法拦截
Mock.mock(/\/home\/getMenuData/,'get',homeData.getMenuData)