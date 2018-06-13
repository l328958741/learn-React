import React, {Component} from 'react';

class Rightlib extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    const data=this.props.data;
    return (
      <div className="rightlib cover_css">
        {data?(
          <div className="pad_inner">
            <div className="author-info">
              <div className="role-writer padding-wrapper right-author">
                <div className="author-avatar">
                  <a href="/user/375349" target="_blank"
                  className="pointer" style={{"backgroundImage":"url(&quot","http":"//krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480&quot"}}>
                  </a>
                </div>
                <div className="author-info">
                  <a className="name pointer" href={data.author_href} target="_blank">{data.author_title}</a>
                  <span className="kr-tag-arrow-blue kr-size-min">
                    <span className="arrow">
                      <em></em>
                    </span>
                    <span>
                      资深作者
                    </span>
                  </span>
                </div>
                <div className="author-desc">签名</div>
                <div className="post-count">
                  <span className="icon-article">
                  </span>
                  <span>共发表 8464 篇</span>
                </div>
                <div className="post-list">
                  <h4>
                    最近内容
                  </h4>
                  <ul className="list">
                    <li>
                      <p className="title">
                        <a href="#" target="_blank">标题标题标题标题</a>
                      </p>
                      <p className="note am-cf">
                        <span className="time am-fl">
                          时间
                        </span>
                        <span className="tag am-fr">
                          分类
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="title">
                        <a href="#" target="_blank">标题标题标题标题</a>
                      </p>
                      <p className="note am-cf">
                        <span className="time am-fl">
                          时间
                        </span>
                        <span className="tag am-fr">
                          分类
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="title">
                        <a href="#" target="_blank">标题标题标题标题</a>
                      </p>
                      <p className="note am-cf">
                        <span className="time am-fl">
                          时间
                        </span>
                        <span className="tag am-fr">
                          分类
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <section className="enter-report">
                  <a rel="nofollow" href="#" target="_blank">
                    阅读更多内容，狠戳这里
                  </a>
                </section>
              </div>
            </div>
            <div className="plan-image plan-lazyload-box"></div>
            <div></div>
            <div className="plan-image plan-lazyload-box"></div>
            <div className="pin-wrapper" style={{"height":"309px"}}>
              <div className="custom-pin-wrapper" style={{"width":"320px"}}>
                <div>
                  <div className="guess-posts-list">
                    <h4>
                      相关文章
                    </h4>
                    <ul>
                      <li className="top">
                        <a href="#" target="_blank" className="item">
                          <span className="desc">标题标题标题标题标题标题</span>
                        </a>
                      </li>
                      <li className="top">
                        <a href="#" target="_blank" className="item">
                          <span className="desc">标题标题标题标题标题标题</span>
                        </a>
                      </li>
                      <li className="top">
                        <a href="#" target="_blank" className="item">
                          <span className="desc">标题标题标题标题标题标题</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sponsor" style={{"display":"none"}}>
                  <h5>
                    <span>
                      赞助商
                    </span>
                  </h5>
                  <ul className="am-list am-list-static">
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
                <div className="next-post-wrapper show">
                  <h4>
                    下一篇
                  </h4>
                  <div className="item">
                    <a href="#" className="title" target="_blank">标题标题标题标题标题</a>
                    <div className="tags-list">
                      <i className="icon-tag">
                      </i>
                      <span>
                        <a href="#" target="_blank">标签1</a>
                        <span>，</span>
                      </span>
                      <span>
                        <a href="#" target="_blank">标签2</a>
                        <span>，</span>
                      </span>
                      <span>
                        <a href="#" target="_blank">标签3</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ):''}
      </div>
    );
  }
}

export default Rightlib;
