import Vue from 'vue';
import { MediaQueries, CommonBands } from 'vue-media-queries';

const bulmaBands = CommonBands.Bulma;

const mediaQueries = new MediaQueries({
  bands: bulmaBands,
});

Vue.use(mediaQueries);
Vue.mixin(bulmaBands.mixin);

export default mediaQueries;
