/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 15:42:47
 * @LastEditTime: 2021-08-03 16:24:17
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent, computed } from 'vue';
import rule from '../../assets/images/rule.png';
import sys from '../../assets/images/system.svg';
import mind from '../../assets/images/mind.svg';
import ai from '../../assets/images/ai.svg'

export default defineComponent({
  setup() {
    const data = [
      {
        avatar: rule,
        title: '纪律性',
        text: '根据策略模型的运行结果进行决策，而不是凭感觉。纪律性既可以克制人性中贪婪、恐惧和侥幸心理等弱点，也可以克服认知偏差，且可跟踪。'
      },
      {
        avatar: sys,
        title: '系统性',
        text: '具体表现为“三多”：①多主流资产：包括BTC、BCH、ETH、LTC、EOS、ETC等六种，不交易山寨币；②多数据：多维度收集海量数据的处理；③多角度：实时对外部经济环境、市场结构、币种价格、行情预测、市场情绪等多个角度进行监控与分析。'
      },
      {
        avatar: mind,
        title: '套利思维',
        text: '量化投资通过全面、系统性的扫描捕捉市场错误定价、错误决策带来的机会，从而发现套利空间，并通过低买高卖而获利'
      },
      {
        avatar: ai,
        title: 'AI概率取胜',
        text: 'AI策略不断从历史数据中挖掘逻辑、规律并加以利用；根据不同行情表现与未来预测，做出最优交易决策；根据交易本金与风险程度，不断优化交易金额与交易次数，做到最低风险最大利润。'
      }
    ];
    const childNode = computed(() => {
      return (item) => {
        return (
          <div className="ctx">
            <div className="avatar">
              <img src={item.avatar} />
            </div>
            <div className="ctx-title">{ item.title }</div>
            <div className="descript">{ item.text }</div>
          </div>
        )
      }
    })
    return {
      data,
      childNode,
    }
  },
  render() {
    return (
      <div className="special">
        <div className="title">量化的特点</div>
        <div className="special-ctx">
          { this.data.map(item => this.childNode(item)) }
        </div>
      </div>
    )
  }
})