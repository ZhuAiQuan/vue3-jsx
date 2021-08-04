/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 14:33:14
 * @LastEditTime: 2021-08-04 16:18:52
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'navs-background',
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
    function toRoute(e) {
      alert(`点击了${e.target.textContent}`)
    }
    return {
      routes,
      toRoute,
    }
  },
  render() {
    return (
      <div className="navs-bg">
        { this.routes.map(item => <div className="route" onClick={this.toRoute}><div>{ item.name }</div></div>) }
      </div>
    )
  }
})