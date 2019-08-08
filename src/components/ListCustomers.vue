<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers" v-on:click.prevent="onEdit(customer)">
        <td>{{customer.id}}</td>
        <td>{{customer.fname}}</td>
        <td>{{customer.lname}}</td>
        <td>{{customer.address}}</td>
        <td>{{customer.startdate}}</td>
        <td>{{customer.enddate}}</td>
        
        <td><a href="#" v-on:click.prevent.stop="onRemove(customer.id)">remove</a></td>
      </tr>
    </tbody>
  </table>
</template>


<script>
function formatDate(date) {
    
    var year, month, day;
 
    year = date.getFullYear();
    day = date.getDate();
    month = date.getMonth() + 1;
 
    return year + '-' + twoDigitDate(month) + '-' + twoDigitDate(day);
}
function twoDigitDate(number) {

    if (number < 10) {        
        number = '0' + number;
    }

    return number;
}


export default {

  methods: {
    onEdit: function(customer) {
      console.log(customer)
    },
    onRemove: function(customerId) {
      console.log(customerId)
    }
  },
  data: function () { 
    return {
      customers: [
        {
            id: 345555433,
            fname: 'Test1',
            lname: 'Test1',
            address: 'Nagy utca 16.',
            startdate: formatDate(new Date('01/01/1960')),
            enddate: formatDate(new Date('01/01/1960')),
        },
        {
            id: 12345678,
            fname: 'Nagy',
            lname: 'Józsi',
            address: 'Közepes utca 8.',
            startdate: formatDate(new Date('01/01/1960')),
            enddate: formatDate(new Date('01/01/1960')),
        },
        {
            id: 26351652,
            fname: 'Kis',
            lname: 'Mari',
            address: 'Kis utca 8.',
            startdate: formatDate(new Date('01/01/1960')),
            enddate: formatDate(new Date('01/01/1960')),
        }
      ]    
    }

  }
}
</script>