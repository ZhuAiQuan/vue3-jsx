/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 11:02:08
 * @LastEditTime: 2021-08-04 11:08:08
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';
import robort from '../../assets/images/robort.webp'

export default defineComponent({
  render() {
    return (
      <div className="robort">
        <div>
          <img src={robort} />
        </div>
      </div>
    )
  }
})