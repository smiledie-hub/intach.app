<template>
  <BaseLayout>
    <template #aside>
      <CalendarAside @select="selectDate"/>
    </template>
    <template #content>
      <div class="page page--index">
        <h1 class="page__title">{{ currentDateString }}</h1>
        <Timetable :date="currentDate"/>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BaseLayout from "@/components/BaseLayout.vue";
import CalendarAside from "@/components/CalendarAside.vue";
import {DateTime} from "luxon";
import Timetable from "@/components/Timetable.vue";

@Options({
  components: {Timetable, CalendarAside, BaseLayout},
  data() {
    return {
      currentDateString: "",
      currentDate: DateTime.now().setLocale("ru")
    }
  },
  methods: {
    selectDate(iso: string) {
      const date = DateTime.fromISO(iso).setLocale("ru")
      this.currentDateString = date.toFormat("EEEE, d MMMM")
      this.currentDate = date
    }
  }
})
export default class Index extends Vue {
}
</script>
