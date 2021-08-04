/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 14:20:53
 * @LastEditTime: 2021-08-04 15:17:07
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'last-foot',
  setup() {
    const year = new Date().getFullYear();

    return {
      year
    }
  },
  render() {
    return (
      <div className="last-foot">©{this.year} 智能量化交易系统 版权所有</div>
    )
  }
})