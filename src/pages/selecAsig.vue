<template>
  <q-page class="flex-start items-start bg-accent">
    <q-toolbar>
      <q-toolbar-title class="text-primary text-h6">
        NOMBRE ASIGNATURA
      </q-toolbar-title>
    </q-toolbar>
    <q-tabs v-model="tab"
      dense
      class="text-primary bg-accent"
      active-color="secondary"
      indicator-color="secondary"
      align="justify"
      narrow-indicator>
      <q-tab name="conten"
        label="CONTENIDO" />
      <q-tab name="evalua"
        label="EVALUCIÓN">
        <q-badge color="secondary"
          text-color="white"
          floating
          transparent>1</q-badge>
      </q-tab>
      <q-tab name="calif"
        label="CALIFICACIÓN">
        <q-badge color="secondary"
          text-color="white"
          floating
          transparent>2</q-badge>
      </q-tab>
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab"
      animated>
      <!-- MENU- CONTENIDO -->
      <q-tab-panel class="bg-accent"
        name="conten">
        <q-expansion-item dark
          class="overflow-hidden shadow-1"
          style="border-radius: 8px"
          expand-separator
          label="Primer lapso"
          header-class="text-subtitle1 text-bold bg-primary">
          <div>
            <q-expansion-item dense
              class="overflow-hidden q-mt-xs"
              style="border-radius: 8px"
              expand-separator
              label="CapÍtulo 1"
              header-class="text-primary text-subtitle1 text-bold bg-accent">
              <q-item dense
                class="text-secondary text-subtitle1 text-bold">
                <q-item-section>TÍTULO DEL CAPÍTULO
                </q-item-section>
                <q-item-section align="right">
                  <q-item-label lines="1">
                    <span class="text-grey-8">Duración:</span>
                    <span class="text-secondary">2 semana</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
            </q-expansion-item>
          </div>
          <div>
            <q-expansion-item dense
              class="overflow-hidden q-mt-xs"
              style="border-radius: 8px"
              expand-separator
              label="Capítulo 2"
              header-class="text-primary text-subtitle1 text-bold bg-accent">
              <q-item dense
                class="text-secondary text-subtitle1 text-bold">
                <q-item-section>TÍTULO DEL CAPÍTULO
                </q-item-section>
                <q-item-section align="right">
                  <q-item-label lines="1">
                    <span class="text-grey-8">Duración:</span>
                    <span class="text-secondary">3 semana</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
            </q-expansion-item>
          </div>
          <div>
            <q-expansion-item dense
              class="overflow-hidden q-mt-xs"
              style="border-radius: 5px"
              expand-separator
              label="Capítulo 3"
              header-class="text-primary text-subtitle1 text-bold bg-accent">
              <q-item dense
                class="text-secondary text-subtitle1 text-bold">
                <q-item-section>TÍTULO DEL CAPÍTULO
                </q-item-section>
                <q-item-section align="right">
                  <q-item-label lines="1">
                    <span class="text-grey-8">Duración:</span>
                    <span class="text-secondary"> 2 semana</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
              <q-item dense
                class="q-ml-md text-subtitle1">Contenido del capitulo
              </q-item>
            </q-expansion-item>
          </div>
        </q-expansion-item>
        <q-expansion-item dark
          class="overflow-hidden shadow-1 q-mt-md"
          style="border-radius: 5px"
          expand-separator
          label="Segundo lapso"
          header-class="text-subtitle1 text-bold bg-primary">
        </q-expansion-item>
        <q-expansion-item dark
          class="overflow-hidden shadow-1 q-mt-md"
          style="border-radius: 10px"
          expand-separator
          label="Tercer lapso"
          header-class="text-subtitle1 text-bold bg-primary">
        </q-expansion-item>

      </q-tab-panel>

      <!-- MENU- EVALUACIÓN -->
      <q-tab-panel class="bg-accent"
        name="evalua">
        <q-toolbar>
          <q-toolbar-title class="text-secondary text-h6">
            Próximas evaluaciones
          </q-toolbar-title>
        </q-toolbar>

        <q-item class="bg-info">
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Fecha</span>
            </q-item-label>
            <q-item-label lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span>2018-11-10</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Examen escrito</span>
              <span class="text-grey-8"> - Capitulo 2</span>
            </q-item-label>
            <q-item-label caption
              lines="1">
              Contenido del capitulo a evaluar
            </q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Porcentaje</span>
            </q-item-label>
            <q-item-label lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span>20%</span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-badge style="width: 40px"
              color="secondary"
              text-color="white"
              align="middle">New</q-badge>
          </q-item-section>
        </q-item>

        <q-item class="q-mt-md bg-info">
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Fecha</span>
            </q-item-label>
            <q-item-label lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span>2018-10-23</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Taller</span>
              <span class="text-grey-8"> - Capitulo 1</span>
            </q-item-label>
            <q-item-label caption
              lines="1">
              Contenido del capitulo a evaluar
            </q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Porcentaje</span>
            </q-item-label>
            <q-item-label lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span>15%</span>
            </q-item-label>
          </q-item-section>
          <q-item-section size>
            <q-icon name="check_circle"
              color="green"
              size="25px" />
          </q-item-section>
        </q-item>

        <q-item class="q-mt-md bg-info">
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Fecha</span>
            </q-item-label>
            <q-item-label lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span>2018-10-05</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Trabajo de invetigación</span>
              <span class="text-grey-8"> - Capitulo 1</span>
            </q-item-label>
            <q-item-label caption
              lines="1">
              Contenido del capitulo a evaluar
            </q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Porcentaje</span>
            </q-item-label>
            <q-item-label lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span>5%</span>
            </q-item-label>
          </q-item-section>
          <q-item-section size>
            <q-icon name="check_circle"
              color="green"
              size="25px" />
          </q-item-section>
        </q-item>
      </q-tab-panel>

      <!-- MENU- CALIFICACIÓN -->
      <q-tab-panel class="bg-accent"
        name="calif">
        <div>
          <q-list>
            <q-item class="text-bold text-secondary">
              <q-item-section avatar
                top>
                <q-icon name=""
                  color="green" />
              </q-item-section>

              <q-item-section>
                <q-item-label>TIPO DE EVALUACIÓN</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>TEMA EVALUADO</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>NOTA</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>%</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>FECHA</q-item-label>
              </q-item-section>
            </q-item>

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

              <q-item-section>
                <q-item-label>Taller</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>Capítulo 1</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-primary text-bold">17</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>15</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>2018-10-23</q-item-label>
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

              <q-item-section>
                <q-item-label>Trabajo de invetigación</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>Capítulo 1</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-primary text-bold">0</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>5</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>2018-10-05</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </div>
      </q-tab-panel>

      <!-- MENU- INFORMACIÓN -->
      <q-tab-panel name="info">
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  name: 'asignaturas',
  data () {
    return {
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true, style: 'width: 10px' },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ],
      tab: 'evalua',
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
.my-card {
  width: 250px;
}
</style>
