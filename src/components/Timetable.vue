<template>
  <div class="timetable">
    <div v-if="items.length > 0" class="timetable-wrapper">
      <div v-for="item of items"
           :key="item.number"
           class="timetable-item"
      >
        <div class="timetable-item-header">
          <div v-if="item.number" class="timetable-item-header__number">
            <p>{{ item.number }}</p>
          </div>
        </div>
        <div class="timetable-item-main">
          <div v-if="item.discipline" class="timetable-item-main__discipline">
            <p>{{ item.discipline }}</p>
          </div>
          <div v-if="item.teacher" class="timetable-item-main__teacher">
            <SvgIcon name="user"/>
            <p>{{ item.teacher }}</p>
          </div>
          <div v-if="item.cabinet" class="timetable-item-main__cabinet">
            <SvgIcon name="location"/>
            <p>{{ item.cabinet }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="timetable-empty">
      <p>На этот день расписание отсутствует</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {DateTime} from "luxon";
import SvgIcon from "@/components/SvgIcon.vue";

export interface ITimetableItem {
  number?: number,
  discipline?: string
  teacher?: string
  cabinet?: string
}

@Options({
  components: {SvgIcon},
  props: {
    date: {
      type: DateTime,
      required: true
    }
  },
  methods: {},
  data() {
    return {
      items: [
        {
          number: 1,
          discipline: "МДК.01.03",
          teacher: "Ивандикова О.Е.",
          cabinet: "202"
        },
      ],
    }
  },
  mounted() {
    console.log(this.date)
  }
})
export default class Timetable extends Vue {
}
</script>

<style lang="scss" scoped>
.timetable {
  &-empty {
    font-size: .9em;
    margin-top: 3em;
    line-height: 150%;
    color: #575E66;
    max-width: 200px;

    svg {
      width: 3em;
      height: 3em;
      margin-bottom: 1em;
    }
  }

  &-item {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 2em;
    }

    &-header {
      margin-right: 16px;
      width: 27px;

      &__number {
        width: 27px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #5D5FEF;
        color: #ffffff;
        border-radius: 5px;
        font-weight: 600;
      }
    }

    &-main {
      width: 100%;
      display: flex;
      flex-direction: column;

      &__discipline {
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
        margin-bottom: .5em;
      }

      &__teacher, &__cabinet {
        display: flex;
        align-items: center;
        font-size: .9em;
        color: #BCBCBC;

        &:not(:last-child) {
          margin-bottom: .2em;
        }

        svg {
          width: 16px;
          margin-right: 1em;
        }
      }
    }
  }
}
</style>