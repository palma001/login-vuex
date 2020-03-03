<template>
  <div class="q-pa-md row justify-center" style="margin-top: 200px;">
    <div class="col-md-5 col-sm-6 col-xs-8 col-xl-4">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Iniciar sesión</div>
        </q-card-section>
        <q-card-section>
          <q-input
            color="primary"
            v-model="username"
            label="Correo"
            ref="username"
            name="username"
            :rules="[val => !!val || 'El campo es requerido.']">
            <template v-slot:prepend>
              <q-icon name="username" />
            </template>
          </q-input>
          <q-input
            color="primary q-mt-lg"
            v-model="password"
            label="Contrseña"
            ref="password"
            name="password"
            :rules="[val => !!val || 'El campo es requerido.']">
            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
          </q-input>
        </q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-separator dark />
          <q-btn color="primary" @click="login">Iniciar Sesión</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { ACTIONS } from '../store/module-login/name.js'
export default {
  data () {
    return {
      /**
         * Email User
         * @type {String}
         */
      username: '',
      /**
         * Password User
         * @type {String}
         */
      password: ''
    }
  },
  methods: {
    /**
     * return error when field is empty
     * @param {string}
     */
    errorValidation (field) {
      return this.errors.has(field) ? 'is-danger' : null
    },
    /**
     * Login app
     */
    login () {
      this.$refs.username.validate()
      this.$refs.password.validate()
      if (this.$refs.username.hasError || this.$refs.password.hasError) {
        this.formHasError = true
      } else {
        this[ACTIONS.LOGIN]({ self: this })
      }
    },

    ...mapActions([ACTIONS.LOGIN])
  }
}
</script>
