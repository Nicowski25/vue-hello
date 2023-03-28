const { createApp } = Vue

  createApp({
    data() {
      return {
        pageTitle: 'Hello World!',
        content: 'First try on Vue.js'
      }
    }

    }).mount('#app')