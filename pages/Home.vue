<template>
  <div id="home">
    <div class="banner">
                   <div style="width:70%" class="banner_carsoual">

 <SfHero >
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :image="hero.image"
      />
    </SfHero>
                     </div>
                  <div class="bannder_product"> 
                        
  <SfProductCard
    image="https://api.wonect.com/img/310/300/resize/2/_/2_bottle.jpg"
    :imageWidth="216"
    :imageHeight="326"
    badgeLabel=""
    badgeColor=""
    title="Cotton Sweater"
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
   
              <BrowseCategory />
              <FeatureProduct />
               <Tranding />
               <Blog />
              
   <br/>
    <br/>
    <br/>
    <LazyHydrate when-visible>
      <RelatedProducts
        :products="products"
        :loading="productsLoading"
        title="Match it with"
      />
    </LazyHydrate>
 <Footerwrapper />
  </div>
</template>
<script type="module">
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfImage,
  SfBannerGrid,
  SfReview,
  SfHeading,
  SfArrow,
  SfButton,
  SfSlidingSection,
  SfCollectedProduct,
  SfProductCard,
  
} from '@storefront-ui/vue';
import {
  useProduct,
  useCart,
  productGetters
} from '@vue-storefront/shopify';
import {
  computed,
  onBeforeMount
} from '@nuxtjs/composition-api';
import LazyHydrate from 'vue-lazy-hydration';
import MobileStoreBanner from '~/components/MobileStoreBanner.vue';
import RelatedProducts from '../components/RelatedProducts.vue'
import BrowseCategory from '../layouts/BrowseCategory.vue'
import FeatureProduct from '../components/FeaturedProduct.vue'
 import Tranding from '../components/Trending.vue' 
import Blog from '../layouts/Blog.vue'
import  Footerwrapper  from '../layouts/Footerwrapper.vue'
export default {
  name: 'Home',
  components: {
    Blog,
        BrowseCategory,
        Footerwrapper,
        Tranding,
FeatureProduct,
    SfProductCard,
    SfCollectedProduct,
    SfSlidingSection,
        SfHero,
    RelatedProducts,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfReview,
    SfCarousel,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    MobileStoreBanner,
    LazyHydrate
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(contect) {
    const {
      products: relatedProducts,
      search: productsSearch,
      loading: productsLoading
    } = useProduct('relatedProducts');
    const { cart, addItem: addToCart, isInCart } = useCart();

    onBeforeMount(async () => {
      await productsSearch({ limit: 8 });
    });
    return {
      products: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      getChkId: computed(() => cart.value.id),
      productsLoading,
      productGetters,
      addToCart,
      isInCart
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
    
      heroes: [
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2021',
          buttonText: 'Learn more',
          background: '#eceff1',
          image: {
            mobile:
              'https://assets.wonect.com/assets/home-banner-top/point_x5_sp.jpg',
            desktop:
              'https://assets.wonect.com/assets/home-banner-top/point_x5_sp.jpg'
          },
          link: '/c/women/women-clothing-shirts'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2021',
          buttonText: 'Learn more',
          background: '#fce4ec',
          image: {
            mobile:
              'https://assets.wonect.com/assets/home-banner-top/20170623_fine_japan_hyaluron_&_collagen_can_sp.jpg',
            desktop:
              'https://assets.wonect.com/assets/home-banner-top/20170623_fine_japan_hyaluron_&_collagen_can_sp.jpg'
          },
          link: '/c/women/women-clothing-dresses'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2021',
          buttonText: 'Learn more',
          background: '#efebe9',
          image: {
            mobile:
              'https://assets.wonect.com/assets/home-banner-top/20180330_biore_uv_sp.jpg',
            desktop:
              'https://assets.wonect.com/assets/home-banner-top/20180330_biore_uv_sp.jpg'
          },
          link: '/c/women/women-shoes-sandals',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2021',
          buttonText: 'Learn more',
          background: '#fce4ec',
          image: {
            mobile:
              'https://assets.wonect.com/assets/home-banner-top/20190405_fancl_sp.jpg',
            desktop:
              'https://assets.wonect.com/assets/home-banner-top/20190405_fancl_sp.jpg'
          },
          link: '/c/women/women-clothing-dresses'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2021',
          buttonText: 'Learn more',
          background: '#efebe9',
          image: {
            mobile:
              'https://assets.wonect.com/assets/home-banner-top/20190405_fancl_sp.jpg',
            desktop:
              'https://assets.wonect.com/assets/home-banner-top/20190405_fancl_sp.jpg'
          },
          link: '/c/women/women-shoes-sandals',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
        }
      ],
     
      
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
    }
  }
};
</script>
.
<style lang="postcss" scoped>

@media (min-width: 1024px){
.sf-hero-item__wrapper {
    min-height: 22.625rem !important;
}
}


.banner{
  display: flex;
  background-color: #ececec;
    padding: 23px 1px 20px 3px;

}
.banner >div{
   margin-left: 35px;
}.article-meta h4 a {
  color: #111111;
  font-weight: 600;
  font-size: 20px;
}
.article-meta {
  margin-top: 10px;
}
.article-item__meta-item:not(:last-child)::after {
  display: inline-block;
  content: "";
  width: 5px;
  height: 5px;
  margin: -1px 10px 0 10px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.4);
  vertical-align: middle;
}
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}



::v-deep .sf-hero__controls {
  --hero-controls-display: none;
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
}
</style>
