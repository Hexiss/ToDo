<template>
  <MDBBtn
    color="primary"
    aria-controls="exampleModal"
    @click="exampleModal = true"
  >
    Créer une catégorie
  </MDBBtn>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">Créer une catégorie</MDBModalTitle>
    </MDBModalHeader>
    <MDBInput class="input" @keyup.enter="AddCategory" label="Choix du nom" v-model="name" />
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Fermer</MDBBtn>
      <MDBBtn color="primary" @click="AddCategory">Enregistrer</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>

<script>
import { useStore } from "@/stores/category.js";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBInput,
  },
  setup() {
    const exampleModal = ref(false);
    const store = useStore();
    return {
      exampleModal,
      store,
    };
  },
  methods: {
    AddCategory() {
      this.store.AddCategory(this.name);
    }
  },
};
</script>

<style scoped>
.input {
    width: 10%;
}
</style>