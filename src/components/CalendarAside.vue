<template>
  <div class="calendar-aside">
    <button
        @click="selectItem(item.id)"
        v-for="item of items"
        :key="item.id"
        :class="{'calendar-aside-item--current': item.current}"
        class="calendar-aside-item">
      {{ item.label }}
    </button>
  </div>
</template>

<script lang="ts">
import {DateTime} from "luxon";

export interface ICalendarAsideItem {
  id: number,
  label: string,
  current: boolean
}

import {Options, Vue} from 'vue-class-component';
import BaseLayout from "@/components/BaseLayout.vue";

@Options({
  components: {BaseLayout},
  data() {
    return {
      items: [
        {
          id: 1,
          label: "пн",
          current: false
        },
        {
          id: 2,
          label: "вт",
          current: false
        },
        {
          id: 3,
          label: "ср",
          current: false
        },
        {
          id: 4,
          label: "чт",
          current: false
        },
        {
          id: 5,
          label: "пт",
          current: false
        },
        {
          id: 6,
          label: "сб",
          current: false
        },
        {
          id: 7,
          label: "вс",
          current: false
        }
      ]
    }
  },
  mounted() {
    const currentDate = DateTime.now()
    this.selectItem(currentDate.weekday)
  },
  methods: {
    selectItem(id: number) {
      const currentDate = DateTime.now().set({weekday: id,}).toISO()

      this.items = this.items.map((item: ICalendarAsideItem) => {
        item.current = item.id === id;
        return item
      })

      this.$emit('select', currentDate)
    }
  }
})
export default class CalendarAside extends Vue {
}
</script>

<style lang="scss" scoped>
.calendar-aside {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-item {
    width: 27px;
    height: 27px;
    margin-bottom: 1em;
    border-radius: 5px;

    &--current {
      background: #5D5FEF;
      color: #ffffff;
    }
  }
}
</style>