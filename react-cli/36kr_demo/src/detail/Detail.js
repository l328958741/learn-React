import React, {Component} from 'react';

import Mainlib from './Mainlib';
import Rightlib from './Rightlib';

class Detail extends Component{
  constructor(...args){
    super(...args);

    this.state={
      data: null
    }
  }

  async componentDidMount(){
    let id=this.props.match.params.id;

    let data=await (await fetch(`http://localhost:8090/detail?id=${id}`)).json();

    this.setState({
      data
    });
  }

  render(){
    return (
      <div className="pagewrap pagewrap-full">
        <div className="article-detail">
          <div className="post-wrapper">
            <div className="post-detail-con-box full-reading mainlib_flex_wapper">
              <Mainlib data={this.state.data}></Mainlib>
              <Rightlib data={this.state.data}></Rightlib>
            </div>
          </div>
        </div>
        <div className="share-nav-h5">
          <div className="inner">
            <div className="box am-cf">
              <div className="each-cell">
                <span className="icon-collect cell">
                </span>
              </div>
              <div className="each-cell">
                <span className="icon-comments cell">
                </span>
              </div>
              <div className="each-cell">
                <a className="icon-weibo weibo cell" href="http://share.baidu.com/s?type=text&amp;searchPic=1&amp;sign=on&amp;to=tsina&amp;key=595885820&amp;url=http://36kr.com/p/5127978.html&amp;title=%E7%8B%AC%E8%A7%92%E5%85%BD%E5%BD%92%E6%9D%A5%EF%BC%9A%E6%9C%BA%E9%81%87%E5%92%8C%E9%A3%8E%E9%99%A9">
                </a>
              </div>
              <div className="each-cell">
                <span className="icon-back-top back cell">
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="article-detail" style={{"position":"relative"}}>
          <div></div>
          <div className="only-article">
            <div className="center-content">
              <div className="content-wrapper">
                <div className="loading_article">
                  <div>
                    <div className="circle">
                      <i className="icon-loading">
                      </i>
                    </div>
                    <b>
                      加载中
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
