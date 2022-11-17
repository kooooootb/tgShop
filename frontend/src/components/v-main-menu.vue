<template>
  <div class="v-main-menu">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <h1>Main menu</h1>
    <div class="v-main-menu">
      <router-link :to="{name: 'catalog'}">
        <div class="v-main-menu__trainers">
          <p>Trainers</p>
        </div>
      </router-link>
      <div class="v-main-menu__electronics">
        <p>Electronics</p>
      </div>
      <div class="v-main-menu__things">
        <p>Things</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "v-main-menu"
}
</script>

<style lang="scss">
  .v-main-menu{
    background-color: #ffffff;
    max-width: 900px;
    margin: 0 auto;
    &__trainers{
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 8px 0 #2c3e50;
      padding: $padding*2;
      margin-bottom: $margin*2;
    }
    &__electronics{
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 8px 0 #2c3e50;
      padding: $padding*2;
      margin-bottom: $margin*2;
    }
    &__things{
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 8px 0 #2c3e50;
      padding: $padding*2;
      margin-bottom: $margin*2;
    }
  }

</style>