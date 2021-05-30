import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import { Layout } from 'antd';
import LeftNav from '../../components/LeftNav/LeftNav';
import Header from '../../components/Header/Header';
import home from '../home/home';
import technical from '../Technical/technical';
import competency from '../competency/competency'
import Employment from '../Employment/employment'
import _project from '../Project/project'
import Community from '../Community/community'
import Education from '../Education/education';

const {Footer, Sider, Content } = Layout;

export default class admin extends Component {

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider >
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20 ,backgroundColor: 'white'}}>
                        <Switch>
                            <Route path='/home' component={home}></Route>
                            <Route path='/endorsements/education_&_qualifitions' component={Education}></Route>
                            <Route path='/endorsements/technical_skills_&_expertise' component={technical}></Route>
                            <Route path='/endorsements/core_competencies' component={competency}></Route>
                            <Route path='/experience/employment_history' component={Employment}></Route>
                            <Route path='/experience/project_history' component={_project}></Route>
                            <Route path='/experience/community_experiences' component={Community}></Route>
                            <Redirect to='/home' ></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center', color:'#'}}>I use FireFox, please make sure of that</Footer>
                </Layout>
            </Layout>
        )
    }
}
