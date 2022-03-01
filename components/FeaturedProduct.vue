<template>
  <div >
    <SfTopBar class="blog_topbar">
               <template #left>
                         <h3 class="mb-4"> Featured & Bestsellers </h3>              
                          </template>
                          
              </SfTopBar>       
    <div class="grid">
  <div class="rectangle">
           <div class="main_featureImage">
                   <img src="https://api.wonect.com/img/310/300/resize/r/o/royal_1_1_1.png">
           </div>
             <div class="main_feature_product_details">
               <p class="main_feature_product_name">
        OZIO Natu Life Royal Jelly Mocchiri Gel 75g
      </p>
        <p class="main_feature_product_price">$72.90</p>
         <span class="main_feature_product_ button">
            <SfButton
    :class="classes"
    :disabled="disabled" 
    :type="type"
    @click="click"
    :link="link">
       Shop Now
  </SfButton></span>
             </div>
           

  </div>
  
  
  <div class="square">
    <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/f/a/fan01002_1_1.jpg"
    :imageWidth="149"
    :imageHeight="201"
    badgeLabel=""
    badgeColor=""
    title="FANCL Mild Cleansing Oil 120ml"
    linkTag=""
    :scoreRating="4"
    :reviewsCount="7"
    :maxRating="5"
    regularPrice=""
    specialPrice=""
    wishlistIcon="heart"
    isInWishlistIcon="heart_fill"
    :isInWishlist="false"
    showAddToCartButton
    :isAddedToCart="false"
    :addToCartDisabled="false"
  />
  </div>
  
  <div class="square">
    <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/b/e/beauty_chocola1.jpg"
    :imageWidth="149"
    :imageHeight="201"
    badgeLabel=""
    badgeColor=""
    title="CHOCOLA BB Beauty Chocola Collagen Supplement 120 tablets"
    linkTag=""
    :scoreRating="4"
    :reviewsCount="7"
    :maxRating="5"
    regularPrice=""
    specialPrice=""
    wishlistIcon="heart"
    isInWishlistIcon="heart_fill"
    :isInWishlist="false"
    showAddToCartButton
    :isAddedToCart="false"
    :addToCartDisabled="false"
  />
  </div>
  
  <div class="square">
    <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/5/1/51pvbjijnel._ac_sl1000_.jpg"
    :imageWidth="149"
    :imageHeight="201"
    badgeLabel=""
    badgeColor=""
    title="SUNTORY Milcolla Collagen Powder 30 sachet"
    linkTag=""
    :scoreRating="4"
    :reviewsCount="7"
    :maxRating="5"
    regularPrice=""
    specialPrice=""
    wishlistIcon="heart"
    isInWishlistIcon="heart_fill"
    :isInWishlist="false"
    showAddToCartButton
    :isAddedToCart="false"
    :addToCartDisabled="false"
  />
  </div>
  
  <div class="square">
    <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/2/_/2_bottle.jpg"
    :imageWidth="149"
    :imageHeight="201"
    badgeLabel=""
    badgeColor=""
    title=" SUNTORY Royal Jelly + Sesamin E Anti Aging Supplement (120 tablets x 2 bottles)"
    linkTag=""
    :scoreRating="4"
    :reviewsCount="7"
    :maxRating="5"
    regularPrice=""
    specialPrice=""
    wishlistIcon="heart"
    isInWishlistIcon="heart_fill"
    :isInWishlist="false"
    showAddToCartButton
    :isAddedToCart="false"
    :addToCartDisabled="false"
  />
  </div>
  
  <div class="square">
    <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/1/0/10.jpeg"
    :imageWidth="149"
    :imageHeight="201"
    badgeLabel=""
    badgeColor=""
    title="MUCOTA Adllura Aire 10 Leave In Treatment for Damaged Straight Hair 100g"
    linkTag=""
    :scoreRating="4"
    :reviewsCount="7"
    :maxRating="5"
    regularPrice=""
    specialPrice=""
    wishlistIcon="heart"
    isInWishlistIcon="heart_fill"
    :isInWishlist="false"
    showAddToCartButton
    :isAddedToCart="false"
    :addToCartDisabled="false"
  />
  </div>
  
  <div class="square">
     <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/f/a/fan01166_3.jpg"
    :imageWidth="149"
    :imageHeight="201"
    badgeLabel=""
    badgeColor=""
    title="FANCL Facial Washing Powder"
    linkTag=""
    :scoreRating="4"
    :reviewsCount="7"
    :maxRating="5"
    regularPrice=""
    specialPrice=""
    wishlistIcon="heart"
    isInWishlistIcon="heart_fill"
    :isInWishlist="false"
    showAddToCartButton
    :isAddedToCart="false"
    :addToCartDisabled="false"
  />
  </div>
  
 
</div>

   
    
  </div>
</template>
<script type="module">
import {
  SfButton,
  SfProductCard,
  SfTopBar

} from '@storefront-ui/vue';
export default {
  name: 'Home',
  components: {
    SfButton,
    SfProductCard,
    SfTopBar
   
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
     
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    
  }
};
</script>

<style lang="scss" scoped>
 .sf-button {
        background-color: white;
    margin-left: 18px;
    color: #000;
    font-size: 12px;
    }
.main_feature_product_price{
   margin: 19px;
    font-size: 25px;
    font-weight: 104px;
    color: white;
    font-weight: 123px;
    font-weight: bold;
}
.main_feature_product_name{
  margin: 19px;
    font-size: 25px;
    font-weight: 104px;
    color: white;
    font-weight: 123px;
    font-weight: bold;
}
.main_featureImage{
      margin: 13px 39px;

}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
}
.rectangle{
outline-color: #ff9800
}
 .square {
    border: 1px solid #ececec;
       width: 93%;
           margin: 0 0 0 15px;


}

.rectangle {
  grid-row-start: span 3;
   width: 388px;
       height: 600px;
       background-image: linear-gradient(60deg,#f65158,#ffd200 80%);


}


</style>
