// src/plugins/vuetify.ts
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { es, en } from 'vuetify/locale'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#F2F7FF',
        surface: '#ffffff',
        primary: '#0B409C',
        'primary-darken-1': '#10316B',
        secondary: '#FFE867',
        'secondary-darken-1': '#e6d053',
        accent: '#FFE867',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
        myCustomLightTheme,
        },
    },
    /*locale: {
        locale: 'es',
        fallback: 'en',
        messages: { es, en},
      }*/
})
