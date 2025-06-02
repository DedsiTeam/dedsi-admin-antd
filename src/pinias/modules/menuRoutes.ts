import { defineStore } from 'pinia'

export const menuRouteStores = defineStore('menuRouteStores', {
    state: () => ({
        menuRouteDatas: [] as string[],
        menuRouteSelected: null as string | null
    }),
    actions:{
        async add(val: string) {
            this.menuRouteSelected = val;
            if(this.menuRouteDatas.includes(val)){
                return
            }
            this.menuRouteDatas.push(val)
        },
        async delete(val: string) {
            const index = this.menuRouteDatas.indexOf(val);
            if (index > -1) {
                this.menuRouteDatas.splice(index, 1);
                if(index > 0) {
                    this.menuRouteSelected = this.menuRouteDatas[index - 1];
                }
            }
        },
        async setMenuRouteSelected(val: string | null) {
            this.menuRouteSelected = val;
        }
    }
});