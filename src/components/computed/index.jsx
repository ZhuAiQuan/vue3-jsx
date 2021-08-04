/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 14:05:57
 * @LastEditTime: 2021-08-03 15:40:56
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent, computed } from 'vue';
import src from '../../assets/images/computed.png'

export default defineComponent({
  setup() {
    const data = [
      {
        color: '#FEBF2C',
        title: '7x24小时无休，全自动执行',
        desc: '机器人在云服务器上24小时运行，不断电不断网。初始化设置参数之后，机器人将按照策略进行自动交易。达到设定条件自动买入或者卖出，无需长时间盯盘。'
      },
      {
        color: '#47A4F3',
        title: '制定交易策略与仓位分配',
        desc: '机器人内置多种交易策略，从“保守”到“激进+”满足不同的风险类型。设置策略后，机器人将智能分配每次进单的仓位和条件，严格执行交易策略。'
      },
      {
        color: '#FD641F',
        title: '同时监控多个交易品种',
        desc: '可支持上百个交易同时运行交易策略，每个品种独立线程，自动监控报价深度、策略计算，实时监控交易条件，保证交易执行的即时性。'
      }
    ];
    const child = computed(() => {
      return (item, i) => {
        return (
          <div className="content-item">
            <div className="item-pic" style={{ background: item.color }}>
              <div className="item-pic-t" style={{ background: item.color }}></div>
              <div className="number">0{i+1}</div>
            </div>
            <div className="item-ctx">
              <div className="title" style={{ color: item.color }}>
                {item.title}
              </div>
              <div className="text">
                {item.desc}
              </div>
            </div>
          </div>
        )
      }
    })

    return {
      data,
      child
    }
  },
  render() {
    return (
      <div className="computed">
        <div className="computed-pic">
          <img src={src} />
        </div>
        <div className="content">
          {
            this.data.map((item, i) => this.child(item, i))
          }
        </div>
      </div>
    )
  }
})
