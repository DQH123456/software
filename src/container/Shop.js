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
                    <img src={require('../img/card.png')}style={{float:'left',width:'30px',height:'30px',marginTop:"8px",marginLeft:'8px'}} alt=""/>
                    <SearchBar placeholder="输入关键字搜索" maxLength={8} />
                </div>
                <Carousel 
                autoplay
                autoplayInterval={2000}
                infinite>
                    <img src={require('../img/1.png')} alt=""/>
                    <img src={require('../img/lb.png')} alt=""/>
                </Carousel>
                <div style={{textAlign:"center"}}>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left",clear:'left'}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                    <img src={require('../img/cc1.png')} style={{width:"12%",height:'auto',margin:'3%',textAlign:"left"}} alt=""/>
                </div>
                <div style={{ display: 'flex',width:"100%",backgroundSize:"contain|cover"}}>
                    <img src={require('../img/123.png')} style={{backgroundSize:'contain|cover',width:'100%',height:'auto'}} alt=""/>
                </div>
                <div style={{ display: 'flex',width:"100%",backgroundSize:"contain|cover"}}>
                    <img src={require('../img/123.png')} style={{backgroundSize:'contain|cover',width:'100%',height:'auto'}} alt=""/>
                </div>
                <div style={{ display: 'flex',width:"100%",backgroundSize:"contain|cover"}}>
                    <img src={require('../img/123.png')} style={{backgroundSize:'contain|cover',width:'100%',height:'auto'}} alt=""/>
                </div>
            </div>
            
        )
    }
}