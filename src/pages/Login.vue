<template>
  <div class="q-pa-md row justify-center" style="margin-top: 200px;">
    <div class="col-md-5 col-sm-6 col-xs-8 col-xl-4">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Iniciar sesión</div>
        </q-card-section>
        <q-card-section>
          <q-input color="primary" v-model="email" label="Correo">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input color="primary q-mt-lg" v-model="password" label="Contrseña">
            <template v-slot:prepend>
              <q-icon name="clock" />
            </template>
          </q-input>
        </q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-separator dark />
          <q-btn color="primary">Iniciar Sesión</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      /**
         * Email User
         * @type {String}
         */
      email: '',
      /**
         * Password User
         * @type {String}
         */
      password: ''
    }
  }
}
</script>
