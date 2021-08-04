/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 13:19:51
 * @LastEditTime: 2021-08-04 15:59:09
 * @LastEditors: zaq
 * @Reference:
 */
import { defineComponent, ref } from "vue";
import src from '../../assets/videos/video.mp4';
import video from '../../assets/images/video.jpg'

export default defineComponent({
  name: "video-content",
  setup() {
    const video = ref(null);
    const play = ref(false);
    const descript =
      "量化交易是指以先进的数学模型替代人为的主观判断，利用计算机技术从庞大的历史数据中海选能带来超额收益的多种「大概率」事件以制定策略，极大地减少了投资者情绪波动的影响，避免在市场极度狂热或悲观的情况下造成非理性的投资决策。";

    function onPlay() {
      play.value = !play.value;
      if (play.value) video.value.play();
      else video.value.pause()
      
    }
    return {
      descript,
      video,
      play,
      onPlay
    };
  },
  render() {
    return (
      <div className="video-content">
        <div className="title">量化交易是什么？</div>
        <div className="dash-line">-------------</div>
        <div className="descript">{this.descript}</div>
        <div className="videos">
          { !this.play && <div className="play"></div> }
          
          <video ref="video" src={src} onClick={this.onPlay} poster={video}></video>
        </div>
      </div>
    );
  },
});
