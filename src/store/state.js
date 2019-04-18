export const state = {
    count:2,
    city:'上海',
    arr:[0,1,2,3]
}
export const mutations = {
    changeCount(state,params={}){
        console.log(state);
        state.count = params
    },
    changeCity(state, params={}){
        state.city = params
    }
}




