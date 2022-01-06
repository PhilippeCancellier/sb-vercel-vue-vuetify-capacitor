import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fr from "vuetify/lib/locale/fr";

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: true },
  lang: {
    locales: { fr },
    current: "fr",
  },
});
