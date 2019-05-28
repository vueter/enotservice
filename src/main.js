import Vue from 'vue'
import './plugins/vuetify'
import './plugins/enotservice'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.config.keyCodes.f2 = 113

Vue.directive('move-dom',{

	bind: function() {
		var me = this;

		var container = me.expression == 'v' + me.name
			? document.body
			: document.body.querySelector(me.expression);

    var anchor = Vue.util.createAnchor('v-move-dom');
    
		container.appendChild(anchor);

		var newFrag = new Vue.FragmentFactory(me.vm,me.el);
		me.frag = newFrag.create(me._host, me._scope, me._frag);
		me.frag.before(anchor);
	},

	unbind: function() {
		this.frag.remove();
	}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
