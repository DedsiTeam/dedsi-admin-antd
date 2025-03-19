import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layoutStore', {
    state: () => ({
        collapsed: false,
    }),
    actions:{
        async setCollapsed(val: boolean) {
            this.collapsed = val
        }
    },
    getters: {
        getCollapsed(state) {
            return state.collapsed
        }
    }
});