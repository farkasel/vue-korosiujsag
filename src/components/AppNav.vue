<!-- src/components/AppNav.vue -->
<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw">

    <a class="navbar-brand" href="#">
      <img src="../assets/icon2.jpg" alt="logo" />
    </a>

    <div class="collapse navbar-collapse" id="appnav">
      <div class="nav navbar-nav">
        <router-link
          to="home"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Home
        </router-link>
        <router-link
          to="form-customers"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Customer Form
        </router-link>
         <router-link
          to="list-customers"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Customer List
        </router-link>
        <router-link
          to="shop-form"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Shop Form
        </router-link>
        <router-link
          to="shop-list"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Shop List
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .navbar-jw {
    border-bottom: 1px solid #F0F0F0;

    .navbar-brand {
      height: 32px;
      line-height: 32px;
      font-weight: bold;
      color: #474747;
      padding: 0;

      img {
        float: left;
        height: 32px;
        margin-right: 8px;
      }
    }

    .nav-link {
      position: relative;
      text-decoration: none;
      margin-right: 1rem;
      margin-left: 1rem;

      &.active:after {
        content: '';
        position: absolute;
        bottom: -.5rem;
        left: 0;
        background-color: #41b6e6;
        width: 100%;
        height: 3px;
      }
    }

    .dropdown-cart.open {
      position: static;

      .dropdown-menu {
        display: table;
        width: 100%;
        max-width: 450px;
      }
    }

    .tag {
      border-radius: 25%;
      vertical-align: text-bottom;    
    }
  }

  @media (max-width: 543px) {
    .navbar-toggleable-xs {
      clear: left;
    }

    .navbar-nav {
      padding-top: .5rem;
      text-decoration: none;
    }

    .nav-link {
      padding-left: 1rem;
      text-decoration: none;

    &.active:after {
      height: 100% !important;
      width: 3px !important;
      top: 0 !important;
      }
    }
  }
</style>