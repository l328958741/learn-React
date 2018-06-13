import React, {Component} from 'react';
import {mktime} from '../common/mktime';

class FeedUlItem extends Component{
  constructor(...args){
    super(...args);
  }

  render(){
    let data=this.props.data;

    return (
      <li>
        <div className="am-cf inner_li inner_li_abtest">
          <span className="undefined mark h5_mark">{data.tag}</span>
          <a href={`/detail/${data.id}/`}>
            <div className="img_box list-img-loaded">
              <div>
                <img alt={data.title} className="load-img fade" src={'http://localhost:8090/img?src='+data.src} />
              </div>
              <span className=" undefined mark pc_mark">{data.tag}</span>
            </div>
            <div className="intro">
              <h3>{data.title}</h3>
              <div className="abstract">{data.summary}</div>
            </div>
          </a>
          <div className="info">
            <div className="info-list info-list-abtest">
              <div className="user-info">
                <a href={data.author.href} className="name">{data.author.title}</a>
                <span className="oblique_line">·</span>
              </div>
              <div className="time-div">
                <span className="time" title={mktime(data.time*1000)}>{mktime(data.time*1000)}</span>
                <span className="time h5_time">{mktime(data.time*1000)}</span>
              </div>
            </div>
            <div className="tags-list">
              <i className="icon-tag">
              </i>
              {
                data.catalogs.map((item,index)=>(index<data.catalogs.length-1)?(
                  <span key={item.href}>
                    <a href={item.href}>{item.name}</a>
                    <span>，</span>
                  </span>
                ):(
                  <span key={item.href}>
                    <a href={item.href}>{item.name}</a>
                  </span>
                ))
              }
            </div>
            <div className="comments-list">
              <span className="comments">
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default FeedUlItem;
