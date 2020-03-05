<template>
  <q-layout view="lHh lpR fFf">
    <q-header normal>
      <q-toolbar>
        <q-btn flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          class="q-mr-sm"
          aria-label="Menu" />
        <q-separator dark
          vertical
          inset />
        <q-toolbar-title class="text-white">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          RORAIMA
        </q-toolbar-title>

        <div style="width: 160px; height: 30px;"
          class="bg-primary text-info row flex-center q-mt-xs">
          correo@karanta.com.ve
          <q-menu>
            <q-list style="min-width: 10px">
              <q-item clickable
                v-close-popup>
                <q-item-section>
                  <div class="row no-wrap q-pa-xs">
                    <div class="column">
                      <q-avatar size="60px">
                        <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                      </q-avatar>
                    </div>

                    <q-separator inset
                      class="q-mx-xs" />

                    <div class="column items-center">
                      <div class="text-subtitle1 q-mt-md q-mb-xs q-ml-xs">María Salazar</div>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable
                v-close-popup>
                <q-item-section>
                  <q-btn color="negative"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                    @click="logout"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-accent text-primary text-bold">
      <q-expansion-item expand-separator
        class="bg-primary text-accent"
        icon="people_alt"
        label="Representante"
        caption="correo@karanta.com.ve">
        <q-item clickable
          active-class="my-menu-link"
          class="bg-accent text-primary">
          <q-item-section>
            <q-item-label>Representante</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable
          active-class="my-menu-link"
          class="bg-accent text-primary">
          <q-item-section>
            <q-item-label>Profesor</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
      <q-list>
        <q-item clickable
          v-ripple
          :active="link === 'calen'"
          @click="changeRoute('calen')"
          active-class="my-menu-link"
          class="q-mt-xs">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendarios de evaluación</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable
          v-ripple
          :active="link === 'calif'"
          @click="changeRoute('calif')"
          active-class="my-menu-link"
          class="q-mt-xs">
          <q-item-section avatar>
            <q-icon name="library_add_check" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calificaciones</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable
          v-ripple
          :active="link === 'asig'"
          @click="changeRoute('asig')"
          active-class="my-menu-link"
          class="q-mt-xs">
          <q-item-section avatar>
            <q-icon name="local_library" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Asignatura</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="GET_TOKEN">
      <q-card>
        <q-card-section>
          <div class="text-h5">Mensaje del Sistema</div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          <div class="text-h6">¿Su sesión a expirado, desea continuar con la sesión?</div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="SI" color="primary" @click="session('refresh')"/>
          <q-btn flat label="No" color="primary" @click="session('logout')" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ACTIONS, GETTERS } from '../store/module-login/name.js'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      link: 'calen',
      fixed: true
    }
  },
  computed: {
    ...mapGetters([GETTERS.GET_TOKEN])
  },
  methods: {
    session (data) {
      switch (data) {
        case 'logout':
          this.logout()
          break
        default:
          this[ACTIONS.REFRESH_TOKEN]({ self: this })
          break
      }
    },
    /**
     * Change route
     * @param  {String} data name route
     */
    changeRoute (data) {
      this.$router.push(data)
      this.link = data
    },
    /**
     * Log out api
     */
    logout () {
      this[ACTIONS.LOGOUT]({ self: this })
    },
    ...mapActions([ACTIONS.LOGOUT, ACTIONS.REFRESH_TOKEN])
  }
}
</script>

<style>
.my-menu-link {
  background-color: #EFEBE4;
  color: #f5a416;
}
</style>
