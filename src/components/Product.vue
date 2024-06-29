<template>
    <h1>Product</h1>
    <v-card
 class="mx-auto"
 width="800"
 >
 <v-card-text class="bg-surface-light pt-4">
 <v-card-title>Cart
 {{ total }}
 <v-btn
 color="deep-purple-lighten-2"
 text="Checkout"
 ></v-btn>
 </v-card-title>
 <v-row>
 <v-col cols="12" md="4" v-for="product in cartItems" :key=product> 
 <v-card
 class="mx-auto my-12"
 max-width="374"
 >
 <v-img
 height="250"
:src="product.itemImage"
cover
 ></v-img>
 <v-card-item>
 <v-card-title>{{product.itemName}}</v-card-title>
 </v-card-item>
 <v-card-text>
 <div class="my-4
text-subtitle-1">{{product.itemPrice}}</div>
 </v-card-text>
 <v-divider class="mx-4 mb-1"></v-divider>
 <v-card-actions>
 <v-btn
 color="deep-purple-lighten-2"
text="Remove"
block
border
@click="RemoveFromCart(product)"
 ></v-btn>
 </v-card-actions>
 </v-card>
 </v-col>
 </v-row>
 </v-card-text>
</v-card>

    <div>
 <v-row>
 <v-col cols="12" md="4" v-for="product in stock" :key=product>  
     
    
    <v-card
          class="mx-auto my-12"
          max-width="374"
 >
        <v-img
            height="250"
               src="product.itemImage"
              cover
     ></v-img>
     <v-card-item>
               <v-card-title>{{ product.itemName }}</v-card-title>
    </v-card-item>

     <v-card-text>
         <div class="my-4 text-subtitle-1">{{ product.itemPrice }}</div>
        <div>product.description</div>
     </v-card-text>

     <v-divider class="mx-4 mb-1"></v-divider>
        <v-card-actions>
           <v-btn
              color="deep-purple-lighten-2"
              text="Add to Cart"
               block
               border
               @click="addToCart(product)"
         ></v-btn>
    </v-card-actions>
 </v-card>
 
</v-col>
 </v-row>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return{
            
       stockDetails : [
       {
    itemNumber: 1,
    itemName : "DELL INSPIRON",
    itemPrice : 70000,
    itemQuantity : 20,
    itemImage: '../images/dell.jpg',
    description: "The Dell Inspiron series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 27,
    itemName : "Apple's MacBook Air ",
    itemPrice : 100000,
    itemQuantity : 30,
    itemImage: '../images/macbook.jpg',
    description: "Apple's MacBook Air delivers sleek design, powerful performance for everyday tasks, and long battery life, making it a great choice for students, professionals, and anyone on the go."
    },
    {
    itemNumber: 27,
    itemName : "Apple's MacBook Pro  ",
    itemPrice : 190000,
    itemQuantity : 30,
    itemImage: '../images/macbook pro.jpg',
    description: "Apple's MacBook Pro combines pro-level performance with a thin and light design, ideal for creative professionals, developers, and demanding users who need power and portability.."
    },
    {
    itemNumber: 27,
    itemName : "HP ENVY ",
    itemPrice : 150000,
    itemQuantity : 30,
    itemImage: '../images/hp.jpg',
    description: "HP's premium consumer line, featuring high-quality materials, stylish design, and powerful specs suitable for creative professionals"
    },
    {
    itemNumber: 27,
    itemName : "Apple's Retina MacBooks ",
    itemPrice : 150000,
    itemQuantity : 30,
    itemImage: '../images/macbook retina.jpg',
    description: "high-resolution displays featuring a pixel density so high that individual pixels are invisible to the naked eye at a normal viewing distance."
    },
    {
    itemNumber: 27,
    itemName : "DELL VOSTRO ",
    itemPrice : 170000,
    itemQuantity : 30,
    itemImage: '../images/dell vostro.jpg',
    description: "Dell offers a wide variety of laptops catering to different needs and budgets. Here's a breakdown of some of their key laptop types:."
    }
],
total:0,

cartitems: [],
 }
 },
 methods: {
    calculateTotal(itemPrice) {
      this.total += itemPrice;
    },
    addToCart(product) {
      this.cartItems.push(product);
      this.calculateTotal(product.itemPrice);
    },
    removeFromCart(product) {
      this.cartItems.pop(product);
      this.total -= product.itemPrice;
    },
   
  },
 methods:{
...mapActions([
"addToCart"
])
},
computed: {
...mapGetters({
stock: 'stock'
})
},


 //methods:{
 //calculateTotal(itemPrice){
 //this.total += itemPrice
 //},
 //addToCart(product){
 //this.cartItems.push(product)
 //this.calculateTotal(product.itemPrice)
 //}
 //},
//computed: {
//...mapGetters({
//stock: 'stock'
//})
//},
 }


</script>