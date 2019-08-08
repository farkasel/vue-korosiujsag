<template>
  <form>
    <div>
      <label for="id">ID:</label>
      <input type="number" v-model="customer.id" id="id">
    </div>
    <div>
      <label for="fname">First Name:</label>
      <input type="text" v-model="customer.fname" id="fname">
    </div>
    <div>
      <label for="fname">Last Name:</label>
      <input type="text" v-model="customer.lname" id="lname">
    </div>
    <div>
      <label for="address">Adress:</label>
      <input type="text" v-model="customer.address" id="address">
    </div>
    <div>
      <label for="startdate">Start Date:</label>
      <input type="date" v-model="customer.startdate" id="startdate">
    </div>
    <div>
      <label for="enddate">End Date:</label>
      <input type="date" v-model="customer.enddate" id="enddate">
    </div>


    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save customer</button>
  </form>
</template>

<script>
export default {

  data: function() {
    return {
      customer: {
        id: null,
        lname: '',
        fname: '',
        startdate: new Date(),
        enddate: new Date(),
      }
    }
  },
  methods: {
    onSubmit: function() {

      this.$emit('submit', this.customer)
    }
  }
}
</script>