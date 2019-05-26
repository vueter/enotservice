import components from './components'

const EnotServiceInstaller = function(options){
    this.options = options
}

EnotServiceInstaller.prototype.installComponents = function(Vue){
    if(this.components === undefined){
        for(const name in components){
            const component = components[name]
            Vue.component(component.name || name, component)
        }
    }
    else{
        for(const name in this.components){
            const component = this.components[name]
            Vue.component(component.name || name, component)
        }
    }
}

EnotServiceInstaller.prototype.install = function(Vue){
    this.installComponents(Vue)
}

export default {
    install(Vue){
        const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        const installer = new EnotServiceInstaller(options)
        Vue.prototype.$enotservice = new Vue({

        })
        installer.install(Vue)
    }
}