import * as constants from "./actionTypes";
import { getHomeData, getSowData, getUserData } from "./../Api/index";

// 获取首页轮播图
export const getHomeDataAction = () => {
  return dispatch => {
    //请求网络数据
    getHomeData()
      .then(res => {
        if (res.status_code === 200) {
          const homeData = res.result[0];
          dispatch({
            type: constants.INIT_HOME_DATA,
            homeData
          });
        }
      })
      .catch(() => {
        alert("首页数据请求失败");
      });
  };
};

// 获取轮播图
export const getSowDataAction = () => {
  return dispatch => {
    //请求网络数据
    getSowData()
      .then(res => {
        if (res.status_code === 200) {
          const sowingData = res.result;

          dispatch({
            type: constants.INIT_SOWING_DATA,
            sowingData
          });
        }
      })
      .catch(() => {
        console.log("轮播图数据请求失败");
      });
  };
};

//用户登录
export const getUserDataAction = (data, callback) => {
  return dispatch => {
    // 2.1 发起网络请求
    getUserData(data)
      .then(res => {
        if (res.status_code === 200) {
          const userData = res.result;
          dispatch({
            type: constants.INIT_USER_DATA,
            userData
          });
          // 成功的回调
          callback && callback(userData);
        } else {
          alert(res.result);
        }
      })
      .catch(error => {
        alert(error);
      });
  };
};