export const state = () => {
    return {
        globalParam: 'global',
        globalParam1: 'globalParam1'
    }
}
export const mutations = {
    demoAtion (state, data) {
        state.globalParam = data
    }
}

export const actions = {
    testGlobalAction (store, data) {
        console.log(store, data);
    }
}