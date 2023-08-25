import { mount } from '@vue/test-utils'
import App from './../src/App.vue'

describe('App', () => {
    // Inspect the raw component options
    it('does not have data', () => {
      expect(typeof App.data).toBe('undefined')
    })
  })

  describe('Mounted App', () => {
    const wrapper = mount(App);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('has a router-link', () => {
        expect(wrapper.find('router-link').exists()).toBe(true)
      })
  })
