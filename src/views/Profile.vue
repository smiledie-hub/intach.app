<template>
  <BaseLayout>
    <template #content>
      <div class="page page--profile">
        <div class="page-header">
          <img class="page-header__image"
               :src="photo_100"
               alt="user"/>
          <h1 class="page-header__title" v-html="first_name + ' ' + last_name"></h1>
        </div>


        <div class="page-main">
          <div class="page-main-section">
            <h2 class="page-main-section__title">Настройки</h2>

            <div class="page-main-section-item">
              <label class="field">
                <span class="field-caption">Колледж</span>
                <select @change="saveField('college')" v-model="college" class="field-input">
                  <option value="1">ЧГПГТ им. Яковлева</option>
                </select>
              </label>

              <label class="field">
                <span class="field-caption">Группа</span>
                <input @change="saveField('group')" v-model="group" class="field-input" type="text">
              </label>
            </div>
          </div>

          <div class="page-main-section">
            <h2 class="page-main-section__title">Оформление</h2>

            <div class="page-main-section-item">
              <label class="field">
                <span class="field-caption">Тема</span>
                <select @change="saveField('theme')" v-model="theme" class="field-input">
                  <option value="light">Светлая</option>
                  <option value="dark">Темная</option>
                </select>
              </label>

              <label class="field">
                <span class="field-caption">Навигация</span>
                <select @change="saveField('navPosition')" v-model="navPosition" class="field-input">
                  <option value="left">Слева</option>
                  <option value="right">Справа</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BaseLayout from "@/components/BaseLayout.vue";
import LocalStorage from "@/services/LocalStorage";
import bridge from "@vkontakte/vk-bridge";

@Options({
  components: {BaseLayout},
  data() {
    return {
      theme: "light",
      navPosition: "left",
      college: "1",
      group: "207",
      first_name: "",
      last_name: "",
      photo_100: ""
    }
  },
  mounted() {

    bridge.send("VKWebAppGetUserInfo").then((res) => {
      console.log(res)
      this.first_name = res.first_name
      this.last_name = res.last_name
      this.photo_100 = res.photo_100
    })

    const theme = LocalStorage.get("theme")
    if (theme) this.theme = theme

    const navPosition = LocalStorage.get("navPosition")
    if (navPosition) this.navPosition = navPosition

    const college = LocalStorage.get("college")
    if (college) this.college = college

    const group = LocalStorage.get("group")
    if (group) this.group = group
  },
  methods: {
    saveField(key: string) {
      if (this[key]) {
        console.log(this[key])
        LocalStorage.set(key, this[key])
      }
    }
  }
})
export default class Profile extends Vue {
}
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-caption {
    width: 50%;
    font-size: 1em;
  }

  &-input {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    box-shadow: none;
    color: #BCBCBC;
    border: none;
    background: none;
    width: 50%;
    font-size: 1em;
  }
}

.page {
  &-header {
    margin-top: 2em;
    margin-bottom: 4em;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__image {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: #575E66;
      margin-bottom: 1em;
    }

    &__title {

    }
  }

  &-main {
    &-section {
      margin-bottom: 5em;

      &__title {
        margin-bottom: 1.2em;
        font-weight: 600;
        font-size: 1.2em;
      }

      &-item {
        .field {
          margin-bottom: 1.2em;
        }
      }
    }
  }
}
</style>
