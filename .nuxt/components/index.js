export { default as Carts } from '../../components/Carts.vue'
export { default as CartsList } from '../../components/CartsList.vue'
export { default as CourseCard } from '../../components/CourseCard.vue'
export { default as Header } from '../../components/Header.vue'
export { default as LoginAlert } from '../../components/LoginAlert.vue'
export { default as OtherCourses } from '../../components/OtherCourses.vue'
export { default as SubTotal } from '../../components/SubTotal.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
