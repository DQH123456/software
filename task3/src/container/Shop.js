import React, { Component } from 'react'
import { NavBar, Icon,SearchBar, Carousel } from 'antd-mobile';
export default class Idea extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#8DEEEE',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >商城</NavBar>
                <i className='iconfont icon-home'></i>
                <div style={{backgroundColor:"#c4c4c4",opacity:'30',}}>
                    <img src={require('../img/card.png')}style={{float:'left',width:'30px',height:'30px',marginTop:"8px",marginLeft:'8px'}}/>
                    <SearchBar placeholder="输入关键字搜索" maxLength={8} />
                </div>
                <Carousel 
                autoplay
                autoplayInterval={2000}
                infinite>
                    <img src={require('../img/1.png')}/>
                    <img src={require('../img/lb.png')}/>
                </Carousel>
                <div style={{textAlign:"center"}}>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left",clear:'left'}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}}/>
                </div>
                <div style={{ display: 'flex',width:'100%'}}>
                    <div style={{backgroundColor:'#c4c4c4',display: 'flex'}}>
                    <img src={require('../img/cb1.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',borderRadius:'5px',display:'block'}}/>
                    
                    <img src={require('../img/cb2.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',borderRadius:'5px'}}/>
                    </div>
                </div>
                <div style={{backgroundColor:'#c4c4c4',display: 'flex'}}>
                    <div style={{backgroundColor:'#c4c4c4',float:'left',marginLeft:'5%'}}>
                        <p>Top Art Studio 欧式风格精细...</p>
                        <p>￥39.95</p>
                    </div>
                    <div style={{backgroundColor:'#c4c4c4',float:'right',marginLeft:'5%'}}>
                        <p>Top Art Studio 欧式风格精细...</p>
                        <p>￥39.95</p>
                    </div>
                </div>
                
                
            </div>
            
        )
    }
}