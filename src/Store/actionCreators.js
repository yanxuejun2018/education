import * as constants from './actionTypes';
import  {getHomeData,getSowData} from './../Api/index'

// 获取首页轮播图
export const getHomeDataAction = ()=>{
        return(dispatch)=>{
                //请求网络数据
                getHomeData().then((res)=>{
                             if (res.status_code === 200){
                                     const homeData = res.result[0];
                                     dispatch({
                                             type:constants.INIT_HOME_DATA,
                                             homeData
                                     })
                             }
                }).catch(()=>{
                        alert("首页数据请求失败");
                })
        }
    };

// 获取轮播图
export const getSowDataAction = ()=>{
    return(dispatch)=>{
        //请求网络数据
        getSowData().then((res)=>{
            if (res.status_code === 200){
                const sowingData = res.result;

                dispatch({
                    type:constants.INIT_SOWING_DATA,
                    sowingData
                })
            }
        }).catch(()=>{
          console.log("轮播图数据请求失败");
        })
    }
};