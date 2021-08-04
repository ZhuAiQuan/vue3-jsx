/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-04 09:22:59
 * @LastEditTime: 2021-08-04 09:58:25
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';
import adv from '../../assets/images/advantage.gif.webp'

export default defineComponent({
  render() {
    return (
      <div className="advantage">
        <div className="left">
          <div>
            <strong>CCR量化的优势</strong>
          </div>
          <div className="title">
            <strong>资金安全</strong>
          </div>
          <div className="text">用户所有的资金，都在自己的交易所账户：火币</div>
          <div className="text">CCR只收取软件费，火币收取每笔交易手续费；</div>
          <div className="text">唯一的风险就是，比特币归零，火币网跑路。</div>
          <div className="title last">
            <strong>交易真实透明</strong>
          </div>
          <div className="text">数据真实,利润真实。每一笔交易数据都在交易所真实可见。</div>
        </div>
        <div className="center">
          <div><img src={adv} /></div>
        </div>
        <div className="right">
          <div className="title">
            <strong>收益可观</strong>
          </div>
          <div className="text">投资交易收益+邀请返佣收益，助力您实现财富与资源创富；</div>
          <div className="text">造富效应强，真正的管道收入。</div>
          <div className="title last">
            <strong>可持续发展</strong>
          </div>
          <div className="text">数字货币交易将会是一个长期存在的市场，CCR将不断精进为您</div>
          <div className="text">提供更多增值服务。</div>
        </div>
      </div>
    )
  }
})