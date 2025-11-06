import * as Vue from 'vue'

// Controls whether the routed page content is visible (used by App.vue transition)
export const pageVisible = (Vue as any).ref ? (Vue as any).ref(true) : { value: true }
