/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 09:43:19
 * @LastEditTime: 2021-08-04 16:17:36
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent, inject } from 'vue';
import logo from '../../assets/images/logo.png'

export default defineComponent({
  setup() {
    const routes = [
      {
        name: '首页',
        path: '/'
      },
      {
        name: '实时播报',
        path: ''
      },
    ];
    const open = inject('open');
    const toggle = inject('toggle', false)

    function openModal() {
      open()
    }
    function toRoute(e) {
      alert(`点击了${e.target.textContent}`)
    }
    return {
      routes,
      toggle,
      openModal,
      toRoute,
    }
  },
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="navs">
          { this.routes.map((item, i) => <div onClick={this.toRoute}>{ item.name }</div>) }
        </div>
        <div className="left-icons" onClick={this.openModal}>
        { this.toggle ? 'X' : '=' }
        </div>
      </div>
    )
  }
})