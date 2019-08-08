<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Shop Name</th>
        <th>Address</th>
        <th>Copy</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="shop in shops" v-on:click.prevent="onEdit(shop)">
        <td>{{shop.id}}</td>
        <td>{{shop.name}}</td>
        <td>{{shop.address}}</td>
        <td>{{shop.copy}}</td>
                
        <td><a href="#" v-on:click.prevent.stop="onRemove(shop.id)">remove</a></td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {

  methods: {
    onEdit: function(shop) {
      console.log(shop)
    },
    onRemove: function(shopId) {
      console.log(shopId)
    }
  },
  data: function () { 
    return {
      shops: [
        {
            id: 315555433,
            name: 'Shop1',
            address: 'Nagy utca 6.',
            copy: 100
        },
        {
            id: 315555422,
            name: 'Shop2',
            address: 'Fő utca 2.',
            copy: 200
        },
        {
            id: 315555433,
            name: 'Shop3',
            address: 'Kis utca 23.',
            copy: 300
        }
      ]    
    }

  }
}
</script>