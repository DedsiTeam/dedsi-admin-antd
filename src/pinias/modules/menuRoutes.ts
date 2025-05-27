import { defineStore } from 'pinia'

export const menuRouteStores = defineStore('menuRouteStores', {
    state: () => ({
        menuRouteDatas: ['/dashboard'] as string[],
        menuRouteSelected: ''
    }),
    actions:{
        async addDatas(val: string) {
            this.menuRouteSelected = val;

            if(this.menuRouteDatas.includes(val)){
                return
            }
            this.menuRouteDatas.push(val)
        },
        async removeDatas(val: string) {
            const index = this.menuRouteDatas.indexOf(val);
            if (index > -1) {
                this.menuRouteDatas.splice(index, 1);

                if(index > 0){
                    this.menuRouteSelected = this.menuRouteDatas[index - 1];
                }
            }
        },
    },
    getters: {
        getDatas(state) {
            return state.menuRouteDatas
        }
    }
});