export const Button = () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const Carts = () => import('../../components/Carts.vue' /* webpackChunkName: "components/carts" */).then(c => wrapFunctional(c.default || c))
export const CartsItem = () => import('../../components/CartsItem.vue' /* webpackChunkName: "components/carts-item" */).then(c => wrapFunctional(c.default || c))
export const CartsList = () => import('../../components/CartsList.vue' /* webpackChunkName: "components/carts-list" */).then(c => wrapFunctional(c.default || c))
export const Fundraising = () => import('../../components/Fundraising.vue' /* webpackChunkName: "components/fundraising" */).then(c => wrapFunctional(c.default || c))
export const FundraisingCard = () => import('../../components/FundraisingCard.vue' /* webpackChunkName: "components/fundraising-card" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LoginAlert = () => import('../../components/LoginAlert.vue' /* webpackChunkName: "components/login-alert" */).then(c => wrapFunctional(c.default || c))
export const NoCollection = () => import('../../components/NoCollection.vue' /* webpackChunkName: "components/no-collection" */).then(c => wrapFunctional(c.default || c))
export const SubTitle = () => import('../../components/SubTitle.vue' /* webpackChunkName: "components/sub-title" */).then(c => wrapFunctional(c.default || c))
export const SubTotal = () => import('../../components/SubTotal.vue' /* webpackChunkName: "components/sub-total" */).then(c => wrapFunctional(c.default || c))
export const ThirdPartyLoginButton = () => import('../../components/ThirdPartyLoginButton.vue' /* webpackChunkName: "components/third-party-login-button" */).then(c => wrapFunctional(c.default || c))
export const Title = () => import('../../components/Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))

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
