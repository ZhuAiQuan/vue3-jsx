import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ViteComponents, {
//   AntDesignVueResolver,
// } from 'vite-plugin-components';
import vueJsx from '@vitejs/plugin-vue-jsx';

// const {resolve} = require('path');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // ViteComponents({
    //   customComponentResolvers: [
    //     AntDesignVueResolver(),
    //   ]
    // }),
    
  ],
  // resolve: {
  //   alias: {
  //     '/@/': resolve(__dirname, 'src'),
  //     '/_c/': resolve(__dirname, 'src/components')
  //   }
  // }
})
