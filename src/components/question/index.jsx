/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 16:43:15
 * @LastEditTime: 2021-08-03 17:10:56
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent, computed } from 'vue';
import qx from '../../assets/images/qx.png';
import mx from '../../assets/images/mx.svg';
import yk from '../../assets/images/yk.svg';
import timeout from '../../assets/images/timeout.svg';
import tz from '../../assets/images/tz.svg';
import xb from '../../assets/images/xb.svg';

export default defineComponent({
  setup() {
    const data = [
      {
        avatar: qx,
        title: '情绪波动影响',
        text: '受到新闻或身边的亲戚朋友都在谈论各种货币的负面消息，此时你的情绪开始波动，或者行情波动较大的时候，拿不定主意。',
      },
      {
        avatar: mx,
        title: '过于迷信指标',
        text: '指标是非常好的工具，但指标也不是万能的。否则就不会存在亏损了，那所有人都能根据一个指标去判断行情，所有人都能赚钱。',
      },
      {
        avatar: yk,
        title: '盈亏计算复杂',
        text: '当我们交易一种币时，涨到多少可以盈利？下跌了究竟亏损了多少，等等数据的核算，如果只是一个币种，也许还行。若同时交易五六个币种时，算的过来吗。',
      },
      {
        avatar: timeout,
        title: '时间精力有限',
        text: '币圈不同于股票，不存在停市休市的说法，全球范围7X24销售进行交易的，而每个人的精力是有限的，不可能做到24小时一直盯着行情。',
      },
      {
        avatar: tz,
        title: '投资风险过大',
        text: '投资有风险入市需谨慎，是一句金典名句，任何时候都有涨和跌，你是否能抓住机遇，交易之后就不可能像微信一样可以撤回。',
      },
      {
        avatar: xb,
        title: '小白不懂操作',
        text: '对于一个币圈小白来讲，根本不懂得交易软件的玩法，怎么样看K线，投资后会亏空吗？选择一个币种，买多买少拿不定主意，总是觉得不安全。',
      },
    ];
    const childNode = computed(() => {
      return (item) => {
        return (
          <div className="content-item">
            <div className="avatar">
              <img src={item.avatar} />
            </div>
            <div className="ctx">
              <div className="ctx-title">{ item.title }</div>
              <div className="ctx-text">{ item.text }</div>
            </div>
          </div>
        )
      }
    })
    return {
      data,
      childNode
    }
  },
  render() {
    return (
      <div className="question">
        <div className="title">炒币您是否遇到以下困惑</div>
        <div className="content">
          { this.data.map(item => this.childNode(item)) }
        </div>
      </div>
    )
  }
})