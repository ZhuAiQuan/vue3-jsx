/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 13:12:24
 * @LastEditTime: 2021-08-03 13:17:31
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';
import banner from '../../assets/images/banner.jpg'

export default defineComponent({
  render() {
    return (
      <div className="banner">
        <img src={banner} />
      </div>
    )
  }
})