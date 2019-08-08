<template>
  <form>
    <div>
      <label for="id">ID:</label>
      <input type="number" v-model="shop.id" id="id">
    </div>
    <div>
      <label for="name">Shop Name:</label>
      <input type="text" v-model="shop.name" id="name">
    </div>
    <div>
      <label for="adress">Adress:</label>
      <input type="text" v-model="shop.address" id="address">
    </div>
    <div>
      <label for="copy">Copy:</label>
      <input type="number" v-model="shop.copy" id="copy">
    </div>


    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save shop</button>
  </form>
</template>

<script>
export default {

  data: function() {
    return {
      shop: {
        id: null,
        name: '',
        address: '',
        copy: ''
      }
    }
  },
  methods: {
    onSubmit: function() {

      this.$emit('submit', this.shop)
    }
  }
}
</script>