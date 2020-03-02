<template>
  <q-page class="flex-start items-start bg-accent">
    <q-toolbar>
      <q-toolbar-title class="text-primary text-h6">
        ASIGNATURAS 4TO AÑO (2018-2019)
      </q-toolbar-title>
      <q-select style="width: 150px"
        v-model="model"
        :options="options"
        label="" />
    </q-toolbar>
    <div class="q-pa-md row q-gutter-xl">
      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/biologia.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Biología</div>
            <div class="text-subtitle2">Por: Andres Perez</div>
          </div>
        </q-img>
      </q-card>
     <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/castellano.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Castellano</div>
            <div class="text-subtitle2">Por: Antonio Rivas</div>
          </div>
        </q-img>
      </q-card>
      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/dibujo.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Dibujo técnico</div>
            <div class="text-subtitle2">Por: María Salazar</div>
          </div>
        </q-img>

      </q-card>
      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/deportes.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Educación física</div>
            <div class="text-subtitle2">Por: Luis Jimenez</div>
          </div>
        </q-img>
      </q-card>

      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/fisica.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Física</div>
            <div class="text-subtitle2">Por: Abraham Gamboa</div>
          </div>
        </q-img>
      </q-card>

      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/geo.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Geografía</div>
            <div class="text-subtitle2">Por: Maritza Gómez</div>
          </div>
        </q-img>
      </q-card>

      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/historia.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Historia</div>
            <div class="text-subtitle2">Por: Alejandro Mendez</div>
          </div>
        </q-img>
      </q-card>

      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/ingles.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Ingles</div>
            <div class="text-subtitle2">Por: Jesús Rivero</div>
          </div>
        </q-img>

      </q-card>
      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/mate.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Matemáticas</div>
            <div class="text-subtitle2">Por: Luis Salazar</div>
          </div>
        </q-img>
      </q-card>

      <q-card :active="link === 'selecAsig'"
        @click="changeRoute('selecAsig')"
        class="my-card">
        <q-img src="~assets/quimica.png">
          <div class="absolute-bottom">
            <div class="text-h5 text-bold text-accent">Química</div>
            <div class="text-subtitle2">Por: Rosa Hernandez</div>
          </div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'asignaturas',
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
.my-card {
  width: 250px;
}
</style>
