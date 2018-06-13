import React, {Component} from 'react'

import HighProjects from './HighProjects'
import EditorRecommend from './EditorRecommend'
import FeedUl from './FeedUl'

import store from '../store'

class Mainlib extends Component {
    async loadMore(){
      let arr = await (await fetch(`http://localhost:8090/list?page=${store.getState().page}`)).json();

      store.dispatch({
        type: 'addFeedData',
        arr
      })
    }

    render(){
        return (
            <div className="ab-index-exp mainlib">
          <div className="center_content">
            <div className="content-wrapper">
              <HighProjects></HighProjects>
              <EditorRecommend></EditorRecommend>
              <div className="list_con">
                <div className="kr_tab">
                  <div className="kr_tab_box">
                    <div className="kr_tab_wapper" style={{"width":"auto"}}>
                      <div className="new-channel-tab-bg">
                      </div>
                      <div className="new-channel-tab new-channel-tab-hover">
                        <div className="tab-pop-up-pc">
                          <span className="img">
                          </span>
                          <span className="arrow">
                          </span>
                          <span className="text">
                            频道即将换新 敬请期待!
                          </span>
                        </div>
                      </div>
                      <ul className="am-cf stealth-scroll-bar">
                        <li className="kr_active">
                          <h2 className="seo_h2">
                            <span>最新文章</span>
                          </h2>
                        </li>
                        <li className="">
                          <span>大公司</span>
                        </li>
                        <li className="">
                          <span>消费</span>
                        </li>
                        <li className="">
                          <span>娱乐</span>
                        </li>
                        <li className="">
                          <span>前沿技术</span>
                        </li>
                        <li className="">
                          <span>汽车交通</span>
                        </li>
                        <li className="">
                          <span>区块链</span>
                        </li>
                        <li className="">
                          <span>技能Get</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <div>
                      <div className="kr_article_list">
                        <FeedUl></FeedUl>
                      </div>
                      <div className="loading_more" onClick={this.loadMore.bind(this)}>
                        浏览更多
                        <span className="icon-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default Mainlib