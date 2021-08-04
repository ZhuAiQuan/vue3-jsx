/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 17:41:16
 * @LastEditTime: 2021-08-04 09:09:18
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent } from 'vue';
import jjyl from '../../assets/images/jjyl.jpg.webp'

export default defineComponent({
  name: 'pay-reason',
  render() {
    return (
      <div className="reason">
        <div className="content">
          <div className="left">
            <img src={jjyl} />
          </div>
          <div className="right">
            <div className="title"></div>
            <p>
            1、机器人APP通过火币网API接口打通数据；
            </p>
            <p>2、选择好主流币种，设置交易策略参数；</p>
            <p>3、主要设置参数有：
              <p>①激进型：适合于上涨和横盘；</p>
              <p>②震荡型：用于行情区间涨跌幅震动；</p>
              <p>③稳健型：用于行情不是很明朗的时候；</p>
              <p>④保守型：用于判断下跌行情使用策略；</p>
              <p>⑤极端性：用于大跌行情策略。</p>
              <p>以上所有的策略都是可以做到相互间切换，总之更灵活了。</p>
            </p>
            <p>4、附加设置有：
              <p>一键启动、一键暂停、手动开仓、自动平仓、下单记录、利润统计、查看日志、修改策略、删除策略。</p>
            </p>
            <p>5、开启机器人自动工作。</p>
          </div>
        </div>
      </div>
    )
  }
})