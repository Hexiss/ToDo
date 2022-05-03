import { defineStore } from 'pinia'

export const useStore = defineStore('CategoryStore', {
state: () => ({
    categories: 
        []
    }
)
,
getters: {
    getCategories: (state) => state.categories,
},

actions: {
    AddCategory(name){
        const newId = this.categories.length
        this.categories.push({id:newId, name:name});
    },
    editCategory(currentCategory, newName) {
        let c = this.categories.find(e => e.name == currentCategory.name)
        c.name = newName
    }
},
})



