<template>
  <SfFooter :column="4" multiple class="footer">
    <SfFooterColumn :title="$t('About us')">
      <SfList>
        <SfListItem
          v-for="item in aboutUs"
          :key="item"
          >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Departments')">
      <SfList>
        <SfListItem
          v-for="item in departments"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Help')">
      <SfList>
        <SfListItem
          v-for="item in help"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Payment & Delivery')">
      <SfList>
        <SfListItem
          v-for="item in paymentsDelivery"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
     <SfFooterColumn :title="$t('Payment & Delivery1')">
      <SfList>
        <SfListItem
          v-for="item in paymentsDelivery1"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Social">
      <div class="footer__socials">
        <SfImage class="footer__social-image" v-for="item in social" :key="item" :src="addBasePath('/icons/'+item+'.svg')" :alt="item" width="32" height="32" />
      </div>
    </SfFooterColumn>
  </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
import { addBasePath } from '@vue-storefront/core';

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
  setup() {
    return {
      addBasePath
    };
  },
  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      paymentsDelivery1: ['Purchase terms', 'Guarantee'],

      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  }
};
</script>

<style lang="scss">
.sf-footer-column__title{
  background: #fff !important;

}
.sf-footer-column{
  background: #fff !important;
}
.sf-footer-column__title{
  color: #000000;
}
.sf-menu-item__label{
  border-width: 0;
    border-style: solid;
  color:#9e9e9e;
}
.sf-footer__container{
   background-color: rgba(255,255,255,var(--bg-opacity)) !important;
}
.sf-footer {
       background-color: rgba(255,255,255,var(--bg-opacity)) ;
}

.footer {
  margin-bottom: 3.75rem;
      padding: 1px;

  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
border-top:none !important;
padding-bottom:0px !important;
margin-top:0px !important;

}


.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
</style>
