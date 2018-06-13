import React, {Component} from 'react';

import {mktime} from '../common/mktime';

class Mainlib extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    const data=this.props.data;

    return (
      <div className="mainlib">
        {data?(
          <div className="center_content">
            <div className="content-wrapper">
              <div className="article-section">
                <div className="mobile_article">
                  <h1>{data.title}</h1>
                  <div className="content-font">
                    <div className="am-cf author-panel">
                      <div className="author am-fl">
                        <a href={data.author_href} className="am-fl">
                          <span className="name">{data.author_title}</span>
                        </a>
                        <span className="time am-fl">
                          <span className="dot">&nbsp;•&nbsp;</span>
                          <abbr className="time">{mktime(new Date(data.time).getTime())}</abbr>
                        </span>
                        <span className="time am-fl">
                          <span className="dot">&nbsp;•&nbsp;</span>
                          <abbr className="time">{data.tag}</abbr>
                        </span>
                      </div>
                    </div>
                    <section className="summary">{data.summary}</section>
                    <div>
                      <section className="textblock" dangerouslySetInnerHTML={{__html: data.article['detailArticle|post'].content}}>
                      </section>
                      <section className="article-footer-label">
                        <div>
                          <div>
                            本文经授权发布，不代表36氪立场。如若转载请联系原作者。
                          </div>
                        </div>
                      </section>

                      <div className="article-footer-ad">
                        <div className="plan-image plan-lazyload-box">
                        </div>
                      </div>
                    </div>
                    <section className="ad">
                    </section>
                    <section className="single-post-tags">
                      <a className="kr-tag-gray" href="/tags/jinrong" target="_blank">标签1</a>
                      <a className="kr-tag-gray" href="/tags/xiaofei" target="_blank">标签2</a>
                    </section>
                    <div className="fav-wrapper">
                      <div className="common-post-like-wrapper">
                        <a className="post-pc-like">
                          <span className="icon-ic_like">
                          </span>
                          <span style={{"marginLeft":"4px"}}>赞</span>
                        </a>
                        <span className="count-box" style={{"display":"block"}}>
                          <span className="count kr-animated">+1</span>
                        </span>
                      </div>
                    </div>
                    <div className="share-nav">
                      <div className="inner fixed" style={{"width":"720px"}}>
                        <div className="box am-cf">
                          <div className="share-author am-cf am-fl">
                            <a href="/user/375349">
                              <img className="avatar" src="img/head_50.jpg" alt="" />
                              <span className="name">名字</span>
                            </a>
                            <span className="kr-tag-arrow-blue kr-size-min">
                              <span className="arrow">
                                <em></em>
                              </span>
                              <span>资深作者</span>
                            </span>
                          </div>
                          <div className="other-ctrl ctrl-box am-fr">
                            <span className="icon-readmode pure-read cell">
                              <div className="tip">
                                <div className="inner-box">
                                  <span className="kr-arrow-down kr-arrow">
                                    <span></span>
                                  </span>
                                  <div>
                                    <p>“点击”尽享阅读沉浸模式,</p>
                                    <p>沉浸模式下点击右上角按钮返回</p>
                                  </div>
                                </div>
                              </div>
                            </span>
                            <span className="icon-back-top back cell"></span>
                          </div>
                          <div className="share-ctrl ctrl-box am-fr">
                            <span className="icon-weixin wechat cell">
                              <div className="tip">
                                <div className="inner-box">
                                  <span className="kr-arrow-down kr-arrow">
                                    <span></span>
                                  </span>
                                  <div className="am-cf">
                                    <div className="img-box am-fl">
                                      <img src="" />
                                    </div>
                                    <div className="txt">
                                      <p>
                                        打开微信"扫一扫",
                                      </p>
                                      <p>
                                        打开网页后点击屏幕
                                      </p>
                                      <p>
                                        右上角"分享"按钮
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </span>
                            <a className="icon-weibo weibo cell" target="_blank" href="">
                            </a>
                          </div>
                          <div className="user-ctrl ctrl-box am-fr">
                            <span className="icon-collect-min cell">
                              <b className="count-min">0</b>
                              <span className="count kr-animated ">+1</span>
                            </span>
                            <span className="icon-comment-min cell">
                              <b className="count-min">0</b>
                            </span>
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h5-author-info am-cf">
                      <div className="img-box am-fl">
                        <a href="/user/375349" target="_blank">
                          <img src="img/head_50.jpg" />
                        </a>
                      </div>
                      <div className="info">
                        <p className="name">
                          <a href="/user/375349" target="_blank">名字</a>
                          <span className="kr-tag-arrow-blue kr-size-min">
                            <span className="arrow">
                              <em></em>
                            </span>
                            <span>资深作者</span>
                          </span>
                        </p>
                        <p className="intro">签名</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                </div>
                <div className="mobile_article">
                  <section className="single-post-comment">
                    <h4>
                      <a name="comment" className="comment-list-title comment-title">
                        参与讨论
                      </a>
                    </h4>
                    <div className="input-module notlogin">
                      <div className="textarea-wrapper">
                        <textarea disabled="" placeholder="请登录后参与评论...">
                        </textarea>
                        <div className="user">
                          <button type="button" disabled="" title="请登录后参与评论">
                            <a href="#">
                              提交评论
                            </a>
                          </button>
                          <div className="current-user">
                            <span className="img" style={{"background":"url(img/f3a5016d8jzc4auz.png) center center / 80% no-repeat rgb(241, 241, 241)"}}>
                            </span>
                            <a href="#" className="name">
                              登录
                            </a>
                            <span>
                              后参与讨论
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="display-module">
                    </div>
                  </section>
                </div>
                <div className="related-articles-h5">
                  <h4>
                    相关文章
                  </h4>
                  <div className="list">
                    <div className="each-cell am-cf">
                      <div className="img-box">
                        <a href="/p/5126058.html?from=related" target="_blank" style={{"backgroundImage":"url(img/t1.jpg)"}}>
                        </a>
                      </div>
                      <div className="info">
                        <p className="name">
                          <a target="_blank" href="#">标题</a>
                        </p>
                        <p className="note">
                          <span>文</span>
                          <span>/</span>
                          <a target="_blank" href="/user/375349">作者</a>
                        </p>
                      </div>
                    </div>
                    <div className="each-cell am-cf">
                      <div className="img-box">
                        <a href="/p/5126058.html?from=related" target="_blank" style={{"backgroundImage":"url(img/t1.jpg)"}}>
                        </a>
                      </div>
                      <div className="info">
                        <p className="name">
                          <a target="_blank" href="#">标题</a>
                        </p>
                        <p className="note">
                          <span>文</span>
                          <span>/</span>
                          <a target="_blank" href="/user/375349">作者</a>
                        </p>
                      </div>
                    </div>
                    <div className="each-cell am-cf">
                      <div className="img-box">
                        <a href="/p/5126058.html?from=related" target="_blank" style={{"backgroundImage":"url(img/t1.jpg)"}}>
                        </a>
                      </div>
                      <div className="info">
                        <p className="name">
                          <a target="_blank" href="#">标题</a>
                        </p>
                        <p className="note">
                          <span>文</span>
                          <span>/</span>
                          <a target="_blank" href="/user/375349">作者</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-detail-plan-bottom">
              <div className="plan-image plan-lazyload-box">
              </div>
            </div>
          </div>
        ):''}

      </div>
    );
  }
}

export default Mainlib;
