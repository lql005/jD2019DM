const changeCount = ({commit},params) => {
    commit('changeCount', params)
}

const changeCity = ({commit}, params) => {
    commit('changeCity', params)
}

export default {
    changeCount,
    changeCity,
}