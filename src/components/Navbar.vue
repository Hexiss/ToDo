<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">ToDo</MDBNavbarBrand>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="/" active>
          Home
        </MDBNavbarItem>
        <MDBNavbarItem to="/todo">
          ToDo
        </MDBNavbarItem>
        <MDBNavbarItem to="/settings">
          Settings
        </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Chercher un ToDo"
          aria-label="Search"
        />
        <MDBBtn outline="primary">
          Chercher
        </MDBBtn>
      </form>
    </MDBCollapse>
    <theme-button />
  </MDBNavbar>

</template>


<script>
import ThemeButton from "@/components/ThemeButton.vue";
  import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBBtn,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem,
      ThemeButton
    },
    setup() {
      const collapse1 = ref(false);
      const dropdown1 = ref(false);
      return {
        collapse1,
        dropdown1
      }
    },
  };
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}

.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
  display: left;
  align-items: top;
  justify-content: center;
}

.card {
  padding: 2rem 4rem;
  height: 100px;
  width: 100px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}
</style>