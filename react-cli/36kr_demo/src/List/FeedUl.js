import React, {Component} from 'react';

import FeedUlItem from './FeedUlItem';
import store from '../store/';

class FeedUl extends Component{
  constructor(...args){
    super(...args);

    this.state={
      list: []
    };
  }

  async componentDidMount(){
    //1.订阅数据
    store.subscribe(()=>{
      this.setState({
        list: store.getState().list
      });
    });

    //2.初始数据
    let arr=await (await fetch(`http://localhost:8090/list?page=0`)).json();

    store.dispatch({
      type: 'addFeedData',
      arr
    });
  }

  render(){
    return (
      <ul className="feed_ul">
        {this.state.list.map(item=><FeedUlItem data={item} key={item.id}></FeedUlItem>)}
      </ul>
    );
  }
}

export default FeedUl;
