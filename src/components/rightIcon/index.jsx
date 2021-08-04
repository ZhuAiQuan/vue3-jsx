/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 15:25:36
 * @LastEditTime: 2021-08-04 16:07:03
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function toTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      // let scrollTop = window.scrollY;
      // window.requestAnimationFrame(toTop);
      // window.scrollTo(0, scrollTop - scrollTop / 8)
    }
    return {
      toTop
    }
  },
  render() {
    return (
      <div className="right-icon">
        <div></div>
        <div className="upTop" onClick={this.toTop}>&gt;</div>
      </div>
    )
  }
})