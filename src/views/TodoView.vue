<template>
  <body>
    <Modal />
    <div>
      <div
        class="flex-container"
        v-for="(category, index) in categories"
        :key="index"
      >
        <div
          class="card text-center flex-items"
          style="width: 38rem; height: 28rem"
        >
          <div class="header">
            <h1 class="card-header">{{ category.name }}</h1>
            <input v-model="newName" @keyup.enter="editCategory(category)" />
            <button class="trash" @click="removeCategory">✖️</button>
            <button class="trash" @click="toggle = !toggle">edit</button>
          </div>
          <div class="card-body">
            <form @submit.prevent="addTodo(category.name)">
              <div class="new-task">
                <input
                  class="form-element"
                  placeholder="Nouveau todo"
                  v-model="newTodo"
                  type="text"
                />

                <button class="form-element" @click="add">+</button>
              </div>
            </form>
            <ul>
              <li v-for="(todo, i) in categoryTodos[category.name]" :key="i">
                {{ todo.length }}
                <span :class="{ done: todo.done }" @click="doneTodo(todo)">
                  {{ todo.content }}</span
                >
                <button class="trash" @click="removeTodo(index)">🞮</button>
              </li>
            </ul>
          </div>
          <div class="card-footer text-muted">Todo restant :</div>
        </div>
      </div>
      <div
        class="card text-center flex-items"
        style="width: 38rem; height: 28rem"
      >
        <form @submit.prevent="addTodo()">
          <div class="new-task">
            <input
              class="form-element"
              placeholder="Nouveau todo"
              v-model="newTodo"
              type="text"
            />

            <button class="form-element" @click="add">+</button>
          </div>
        </form>
        <h2>Tâches en cours</h2>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{
              todo.content
            }}</span>
            <button class="trash" @click="removeTodo(index)">🞮</button>
          </li>
          <h4 v-if="todos.length === 0">La liste est vide</h4>
        </ul>
        <button class="myButton" @click="removeAllTodos(index)">
          Tout supprimer
        </button>
        <button class="myButton" @click="markAllDone(index)">
          Marquer tout comme fait
        </button>
        <button class="myButton" @click="markAllUndoneTodo(index)">
          Marquer tout comme à faire
        </button>
        <div class="row">
          <span>Total : {{ todos.length }} </span>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { ref, computed } from "vue";
import Modal from "@/components/Modal.vue";
import { useStore } from "@/stores/category.js";
export default {
  setup() {
    const newTodo = ref("");
    const todosData = JSON.parse(localStorage.getItem("todos"));
    const todos = ref(todosData);
    const newName = "";
    function addTodo(categoryName) {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
          category: categoryName,
        });
        newTodo.value = "";
      }
      saveData();
    }
    function doneTodo(todo) {
      todo.done = !todo.done;
      saveData();
    }
    function removeTodo(index) {
      todos.value.splice(index, 1);
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }
    function removeAllTodos() {
      todos.value = [];
      saveData();
    }
    function markAllDone() {
      todos.value.forEach((todo) => (todo.done = true));
    }
    function markAllUndoneTodo() {
      todos.value.forEach((todo) => (todo.done = false));
    }
    function removeCategory(index) {
      this.categories.splice(index, 1);
    }
    function editCategory(currentCategory) {
      this.store.editCategory(currentCategory, this.newName);
    }
    const store = useStore();
    const categories = computed(() => store.getCategories);
    const categoryTodos = computed(() => {
      let categoryName = [];
      for (let index = 0; index < categories.value.length; index++) {
        categoryName[categories.value[index].name] = todos.value.filter(
          (t) => t.category == categories.value[index].name
        );
      }
      console.log(categoryName);
      return categoryName;
    });

    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      removeAllTodos,
      markAllDone,
      markAllUndoneTodo,
      saveData,
      store,
      categories: store.getCategories,
      categoryTodos,
      removeCategory,
      editCategory,
      newName,
      categoriesName: store.getCategories,
      editMode: false,
    };
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.myButton {
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  background-color: #79bbff;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 4px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
}
.myButton:hover {
  background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
  background-color: #378de5;
}
.myButton:active {
  position: relative;
  top: 1px;
}
.form-element {
  outline: none;
  font-size: 1.5rem;
  border: 1px solid rgb(0, 0, 0);
  padding: 5px 10px 8px;
  color: rgb(0, 0, 0);
}
input.form-element {
  background: rgba(114, 105, 105, 0.133);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
button.form-element {
  border-left: none;
  color: white;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.trash {
  border: none;
  background: none;
}

.poubelle {
  padding-right: 10px;
}

.todoForm {
  text-align: left;
}

.flex-container {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}

.flex-items {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>