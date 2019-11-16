import React, { Component } from 'react'
import { NavBar, Carousel} from 'antd-mobile';
export default class AppHome extends Component {
    render() {
        return (
            <div>
            <div>
                <NavBar
                    style={{backgroundColor:'#8DEEEE',color:'#fff'}}
                    >住吧家居</NavBar>
            </div>
            <Carousel
            autoplay
                autoplayInterval={2000}
                infinite>
                <img src={require('../img/1.png')}/>
                <img src={require('../img/2.png')}/>
            </Carousel>
          <div style={{backgroundColor:'#c4c4c4',textAlign:'center',justifyContent: 'space-around'}}>
          <img src={require('../img/mm1.png')} style={{textAlign:'left',margin:'20px 3%',width:'25%',height:"auto"}}/>
          <img src={require('../img/mm2.png')} style={{textAlign:'left',margin:'20px 3%',width:'25%',height:"auto"}}/>
          <img src={require('../img/mm3.png')} style={{textAlign:'left',margin:'20px 3%',width:'25%',height:"auto"}}/>
          </div>
          <div  style={{marginTop:"10px"}}>
            <a style={{fontSize:'16px',color:'#000'}}><span style={{color:'#48D1CC'}}>| </span> 热门推荐</a>
            <div style={{paddingTop:'20px'}}>
                <img src={require('../img/bb2.png')} style={{backgroundSize:'contain|cover',width:'100%',height:'auto'}}/>
            </div>
          </div>
          </div>
        )
    }
}