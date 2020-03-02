<template>
  <q-page class="flex row bg-accent">
    <q-list bordered style="width: 2000px"
      class="justify-between rounded-borders q-ml-xs">
      <q-toolbar>
        <q-toolbar-title class="text-primary text-h6">
          CALIFICACIONES
        </q-toolbar-title>
        <q-select style="width: 150px"
          v-model="model"
          :options="options"
          label="" />
      </q-toolbar>
      <q-item class="q-mt-lg text-secondary text-bold text-bold">
        <q-item-section avatar
          top>
          <q-icon name="" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>MATERIA</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>TIPO DE EVALUACIÓN</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>TEMA EVALUADO</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>NOTA</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>%</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>FECHA</q-item-label>
        </q-item-section>

        <q-item-section>
          <div class="text-grey-8">
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info cursor-pointer ">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="green" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Matematicas</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Examen escrito</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Derivadas</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>17</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>20</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>2018-11-10</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info q-mt-md">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="green" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Física</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Taller grupal</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Velocidad y aceleración</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>12</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>15</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>2018-11-08</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info q-mt-md">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="red-10" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Biología</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Exposición</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Las variaciones y la evulución</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>0</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>20</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>2018-11-02</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info q-mt-md">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="green" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Psicología</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Debate</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Trastornos psicosociales</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>19</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>10</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>2018-10-27</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info q-mt-md">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="green" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Ingles</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Examen escrito</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Past Perfect - Pasado perfecto</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>13</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>20</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>2018-10-16</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info q-mt-md">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="green" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Dibujo</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Trabajo</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Dimensionamiento</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>20</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>15</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>2018-10-05</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable
        v-ripple
        :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="bg-info q-mt-md">
        <q-item-section avatar
          top>
          <q-icon name="check_circle"
            color="green" />
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Química</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Examen escrito</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-item-label>Emulsiones y dispersiones</q-item-label>
        </q-item-section>

        <q-item-section class="col-2 text-primary text-bold">
          <q-item-label>18</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>20</q-item-label>
        </q-item-section>
        <q-item-section class="col-2">
          <q-item-label>2018-10-03</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'calif',
  data () {
    return {
      model: 'Verónica Ruiz',
      options: [
        'Angel Ruiz', 'Verónica Ruiz'
      ]
    }
  },
  methods: {
    changeRoute (data) {
      this.$router.push(data)
      this.link = data
    }
  }
}
</script>

<style>
</style>
