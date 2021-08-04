/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 17:17:35
 * @LastEditTime: 2021-08-03 17:36:34
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent, computed } from 'vue';
import kfx from '../../assets/images/kfx.png';
import qw from '../../assets/images/qw.png';
import sl from '../../assets/images/sl.png';
import aq from '../../assets/images/aq.png';
import ss from '../../assets/images/ss.png';
import gx from '../../assets/images/gx.png'

export default defineComponent({
  name: 'AppTools',
  setup() {
    const data = [
      {
        icon: kfx,
        title: '抗风险'
      },
      {
        icon: qw,
        title: '求稳'
      },
      {
        icon: sl,
        title: '省力'
      },
      {
        icon: aq,
        title: '安全'
      },
      {
        icon: ss,
        title: '省时'
      },
      {
        icon: gx,
        title: '高效'
      },
    ];
    const Node = computed(() => {
      return (item) => {
        return (
          <div className="ctx-item">
            <div className="avatar">
              <img src={item.icon} />
            </div>
            <div className="ctx-title">{ item.title }</div>
          </div>
        )
      }
    })
    return {
      data,
      Node,
    }
  },
  render() {
    return (
      <div className="app-tools">
        <div className="title">智能量化交易APP工具</div>
        <div className="content">
          {this.data.map(item => this.Node(item))}
        </div>
      </div>
    )
  }
})