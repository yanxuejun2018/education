import ajax from "./ajax"
//1.基础路径
const BASE_URL = '';
//请求首页数据
export const getHomeData =()=>ajax(BASE_URL+'/home/api/list');
//请求轮播图数据
export const getSowData =()=>ajax(BASE_URL+'/sowing/api/list');
//添加轮播图数据
export const addSowingData=(data)=>ajax(BASE_URL+'/sowing/api/add',data,'POST');
//删除轮播图数据
export const removeSowingData=(id)=>ajax(BASE_URL+'/sowing/api/remove/'+id);
//修改轮播图数据
export const editSowingData =(data)=>ajax(BASE_URL+'/sowing/api/edit',data,'POST');
//用户登录
export const getUserData = (data) => ajax(BASE_URL + '/user/api/login', data, 'POST');