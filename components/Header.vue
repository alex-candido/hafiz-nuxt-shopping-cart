<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')">
      <v-img
        max-height="100"
        max-width="200"
        src="https://s3-alpha-sig.figma.com/img/31dc/933f/dddb4220853807fb667663f599dcd42f?Expires=1674432000&Signature=pbemY6cq-lAXRS9SmF~08za6XXOFtQYR9FKGUNr~mbWEztLQGeAUkXYhXNTwLXZHxNRGTdur0JbqFlZmloN~K2RbtxHfKZyDhuBQKfVn6Hn0rm18VpaGJf7QJ6ZrTzFbdzWUPZ7lLNwGU~teVNHqc6BM2mMtrQtlibeEKjXCJd4Ubtv7ORBXImZuU-TMDDMQHa5VwZ58yUb~GlQ7ePPlDyP83oMcsZqlQ5OE~htCmuHwusr3u0LVM-CGEAiXTviYJOpfyIlykpexd9b-M3bG0JSREAioFQPtyKQk8OWnIGyv8BvhTlnFioxb250dg-nU2Umb-mVZxw~eDaF2MczQDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      ></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/Cart')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <v-icon> mdi-cart-outline </v-icon>
      </v-badge>
    </v-btn>
    <v-btn
      :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click="cartStore.toggleTheme()"
    >
      Toggle Theme
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useCartStore } from "../store/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>