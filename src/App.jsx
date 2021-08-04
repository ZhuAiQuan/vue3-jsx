/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-08-03 09:37:55
 * @LastEditTime: 2021-08-04 16:09:59
 * @LastEditors: zaq
 * @Reference: 
 */
import { defineComponent, provide, ref, onMounted } from 'vue';
import Header from './components/header/Header.jsx';
import Banner from './components/banner';
import VideoContent from './components/videos';
import Computed from './components/computed';
import Specail from './components/special';
import Question from './components/question';
import AppTools from './components/appTools';
import PayReason from './components/reason';
import Advantage from './components/advantage';
import Introduce from './components/introduce';
import Robort from './components/robort';
import NowUse from './components/nowUse';
import Footer from './components/footer';
import LastFoot from './components/last';
import NavsBackground from './components/nav';
import RightIcon from './components/rightIcon';

export default defineComponent({
  setup() {
    const toggle = ref(false);
    const open = () => {
      toggle.value = !toggle.value;
      if (toggle.value) {}
    };
    const rightState = ref(false);

    provide('open', open);
    provide('toggle', toggle)

    onMounted(() => {
      document.addEventListener('scroll', () => {
        if(window.scrollY >= 1000) {
          rightState.value = true
        } else {
          rightState.value = false
        }
      })
    })
    
    return {
      toggle,
      rightState,
    }
  },
  render () {
    return (
      <div className={[this.toggle ? 'hide-ctx' : '']}>
        <Header/>
        <Banner />
        <VideoContent />
        <Computed />
        <Specail />
        <Question />
        <AppTools />
        <PayReason />
        <Advantage />
        <Introduce />
        <Robort />
        <NowUse />
        <Footer />
        <LastFoot />
        { this.toggle && <NavsBackground /> }
        { this.rightState && <RightIcon /> }
      </div>
    )
  }
})