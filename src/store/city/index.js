const state = {
    name: window.localStorage.getItem("newNm") || '北京',  //不存在的话默认北京
    cityId: window.localStorage.getItem("newId")
};
const actions = {

};
const mutations = {
    CITY_INFO(state, payload) {
        state.name = payload.name;
        state.cityId = payload.cityId
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}