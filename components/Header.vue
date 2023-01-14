<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')">
      Shopping Website
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="text-none" stacked>
      <v-badge :content="9" color="error">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
    <!-- <v-btn 
    :prepend-icon="theme === 'light' ? 'mdi-weather-sunny': 'mdi-weather-night'"
    >
      Togle Theme
    </v-btn> -->
    <v-btn :prepend-icon="'mdi-weather-sunny'">
      Togle Theme
    </v-btn>
  </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>