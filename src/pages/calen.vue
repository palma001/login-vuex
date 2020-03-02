<template>
  <q-page class="flex-start bg-accent">
    <q-toolbar>
      <q-toolbar-title class="text-primary text-h6">
        CALENDARIO DE EVALUACIONES 4TO AÑO (2018-2019)
      </q-toolbar-title>
      <q-select style="width: 150px" v-model="model" :options="options" label=""/>
    </q-toolbar>
    <vue-cal class="q-mt-xs q-pa-xs"
      selected-date="2018-11-20"
      :time-from="7 * 60"
      :time-to="18 * 60"
      :disable-views="['years', 'year', 'month']"
      hide-weekends
      locale="es"
      :events="events"
      rounded>
    </vue-cal>
  </q-page>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/es.js'
import 'vue-cal/dist/vuecal.css'
export default {
  components: { VueCal },
  name: 'calen',
  data () {
    return {
      model: 'Verónica Ruiz',
      events: [
        {
          start: '2018-11-20 14:00',
          end: '2018-11-20 16:00',
          title: 'Examen - Matemáticas',
          content: '<i class="v-icon material-icons">create</i>',
          class: 'examen'
        },
        {
          start: '2018-11-20 07:00',
          end: '2018-11-20 9:00',
          title: 'Examen - Química',
          content: '<i class="v-icon material-icons">create</i>',
          class: 'examen'
        },
        {
          start: '2018-11-21 10:00',
          end: '2018-11-21 12:00',
          title: 'Exposición - Ingles',
          content: '<i class="v-icon material-icons">person</i>',
          class: 'exposicon'
        },
        {
          start: '2018-11-22 08:00',
          end: '2018-11-22 10:00',
          title: 'Trabajo - Física',
          content: '<i class="v-icon material-icons">description</i>',
          class: 'trabajo'
        },
        {
          start: '2018-11-19 10:00',
          end: '2018-11-19 12:00',
          title: 'Investigación - Artistica',
          content: '<i class="v-icon material-icons">search</i>',
          class: 'investigacion'
        },
        {
          start: '2018-11-23 14:00',
          end: '2018-11-23 16:00',
          title: 'Debate - Psicología',
          content: '<i class="v-icon material-icons">person</i>',
          class: 'debate'
        },
        {
          start: '2018-11-29 08:00',
          end: '2018-11-29 10:00',
          title: 'Examen - Física',
          content: '<i class="v-icon material-icons">create</i>',
          class: 'examen'
        },
        {
          start: '2018-11-28 14:00',
          end: '2018-11-28 16:00',
          title: 'Examen - Biología',
          content: '<i class="v-icon material-icons">create</i>',
          class: 'examen'
        },
        {
          start: '2018-11-26 10:00',
          end: '2018-11-26 12:00',
          title: 'Trabajo - Artistica',
          content: '<i class="v-icon material-icons">description</i>',
          class: 'trabajo'
        }
      ],
      options: [
        'Angel Ruiz', 'Verónica Ruiz'
      ]
    }
  },

  computed: {
    minDate () {
      const now = new Date()
      const date = new Date(now)
      date.setDate(now.getDate() - 15)
      return date
    },
    maxDate () {
      const now = new Date()
      const date = new Date(now)
      date.setDate(now.getDate() + 15)
      return date
    }
  }
}
</script>

<style>
.vuecal__menu {
  color: #ffffff;
  background: #4a8ff3;
}
.vuecal__title-bar {
  background: #efebe4;
  color: #f5a416;
}

.vuecal__now-line {
  background: #f5a416;
}
.vuecal__event.examen {
  background: #4a8ff3;
  border: 1px solid #4a8ff3;
  color: #fff;
}
.vuecal__event.exposicon {
  background-color: #d7a0d0;
  border: 1px solid #d7a0d0;
  color: #fff;
}
.vuecal__event.trabajo {
  background-color: #f5a416;
  border: 1px solid #f5a416;
  color: #fff;
}
.vuecal__event.investigacion {
  background-color: #978fd0;
  border: 1px solid #978fd0;
  color: #fff;
}
.vuecal__event.debate {
  background-color: #3c6ec0;
  border: 1px solid #3c6ec0;
  color: #fff;
}
</style>
