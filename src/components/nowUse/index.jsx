/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 11:23:46
 * @LastEditTime: 2021-08-04 13:35:32
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';
import two from '../../assets/images/two.webp';
import five from '../../assets/images/five.webp';
import pc from '../../assets/images/pc.webp';
import yj from '../../assets/images/yj.webp';

export default defineComponent({
  name: 'now-use',
  setup() {
    const data = [two, five, pc, yj];
    return {
      data
    }
  },
  render() {
    return (
      <div className="now-use">
        <div className="head">
          现在就使用CCR，开启智能量化交易
        </div>
        <div className="title">
          和CCR机器人小夏一起开启数字资产智能量化交易
        </div>
        <div className="pic-ctx">
          { this.data.map(item => <div className="pic">
            <img src={item} />
          </div>) }
        </div>
        <div className="btm-pic">
          <img src={pc} />
        </div>
      </div>
    )
  }
})