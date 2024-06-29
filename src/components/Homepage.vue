<script>
 
 export default {
  data() {
       return{
        image: '../images/laptops in shelves.jpg',
          url: 'https://www.vuejs.org/',
             stockDetails : [
            {
            itemNumber: 1,
            itemName : "Dell inspiron",
            itemPrice : 50000,
            itemQuantity : 30,
            itemImage: '../images/dell.jpg'
          },
          {
            itemNumber: 27466,
            itemName : "Macbook pro",
            itemPrice : 1000,
            itemQuantity : 4,
           itemImage: '../images/Macbook air.jpg'
             },
          ],
          totalstock:100,
};
},
       };

 
/* methods(){
  //we shall add our functions here
 },
 computed(){
  //we use  this when working with forms
 }
}
 */
</script>

<template>
 <!-- Carousel -->
<v-card
 class="mx-auto"
 width="1000"
>
 <v-carousel>
 <v-carousel-item
 src="../images/macbook retina.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/macbook pro.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/Macbook air.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/laptops in shelves.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/macbook.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/Macbook pro retina.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/Macbook air.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/macbook.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/BROWN USER.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/acer.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/DELL NIVIDIA.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/Full mac with mouse.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/ELITEBOOK.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/macbook.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/DARK.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/chromebook.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../images/open-laptop.jpg"
 cover
 ></v-carousel-item>
 </v-carousel>
</v-card>


<v-card align="center">
 <v-card-item>
 <v-card-title>Welcome to Imports by Kim</v-card-title>
 <v-card-subtitle>Import by Kim This is your one stop shop  for your dream laptop - top brands, exceptional choice.</v-card-subtitle>
 </v-card-item>
 <v-card-text>
  Upgrade your workspace or entertainment center with a top-of-the-line laptop from Import by Kim. We've curated a diverse selection of the latest models from leading brands, ensuring you find the perfect fit for your needs and budget. Whether you're a power user craving a high-performance machine for intense gaming or design work, or a mobile professional seeking a sleek and portable option for on-the-go productivity, Import by Kim has the perfect laptop for you. Explore our extensive collection and discover exceptional quality, cutting-edge features, and competitive prices. Don't settle for anything less than the best – find your dream laptop at Import by Kim today!
 </v-card-text>
</v-card>
<h3 class="text-center">What our customers say</h3>
<v-divider></v-divider>
<v-row>
 <v-col cols="12" md="4">
 <v-card
 subtitle="Alex Wachira"
 text="I loved the engagement from the sales person. very informative and quick
delivery!"
 title="Good customer service"
 ></v-card>
 </v-col>
 <v-col cols="12" md="4">
 <v-card>
 <template v-slot:title>
 Fast delivery!
 </template>
 <template v-slot:subtitle>
 Kerry 
 </template>

 <template v-slot:text>
 I recieved my order on time, will definitely be ordering again
 </template>
 </v-card>
 </v-col>
 <v-col cols="12" md="4">
 <v-card>
 <v-card-item>
 <v-card-title>Wide variety</v-card-title>
 <v-card-subtitle>Melvin Margaret</v-card-subtitle>
 </v-card-item>
 <v-card-text>
 I love the diversity in the options, Apple ,HP ,DELL ,LENOVO,
 </v-card-text>
 </v-card>
 </v-col>
</v-row>

</template>

