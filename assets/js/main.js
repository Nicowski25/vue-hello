const { createApp } = Vue

  createApp({
    data() {
      return {
        pageTitle: 'Hello World!',
        content: 'First try on Vue.js',
        image: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4'
      }
    }

    }).mount('#app')