import React, { Component } from 'react'
import { NavBar, Icon, Tabs} from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
export default class Idea extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#8DEEEE',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <i className='iconfont icon-home'></i>
                <Tabs tabs={tabs}
                    initialPage={0}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <div style={{backgroundColor:'#c4c4c4'}}>
                        <img src={require('../img/tt1.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt2.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                        <img src={require('../img/tt3.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt4.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                        <img src={require('../img/tt1.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt2.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                        <img src={require('../img/tt3.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt4.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                    </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                    <div style={{backgroundColor:'#c4c4c4'}}>
                        <img src={require('../img/tt1.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt2.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                        <img src={require('../img/tt3.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt4.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                        <img src={require('../img/tt1.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt2.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                        <img src={require('../img/tt3.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%',clear:'left'}}/>
                        <img src={require('../img/tt4.png')}  style={{width:'39%',height:'auto',float:'left',margin:'5% 5%'}}/>
                    </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of forth tab
                    </div>
                    </Tabs>
            </div>
            
        )
    }
}