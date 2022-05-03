import { defineStore } from 'pinia'

export const useStore = defineStore('CategoryStore', {
state: () => {
    return {categories: 
        []
    }
}
,
getters: {
    getCategories: (state) => state.categories,
},

actions: {
    AddCategory(name){
        const newId = this.categories.length
        this.categories.push({id:newId, name:name});
    },
},
})



