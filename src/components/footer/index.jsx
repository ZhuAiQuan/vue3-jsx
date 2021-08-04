/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 13:42:06
 * @LastEditTime: 2021-08-04 14:11:19
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';
import logo from '../../assets/images/foot-logo.webp';
import wx from '../../assets/images/wxcode.webp'

export default defineComponent({
  name: 'footer-bar',
  render() {
    return (
      <div className="footer">
        <div className="left">
          <div className="ctx">
            <img src={logo} />
            <span>购买CCR加微信</span>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={wx} />
            <span>微信：xxxxx</span>
          </div>
        </div>
      </div>
    )
  }
})