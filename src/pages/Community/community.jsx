import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default class community extends Component {

    render() {
        return (
          <div>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="social mixed netball team for the Department of Mathematics and Statistics of Unimelb" key="1" >
                  <li>* Encouraged many classmates to try a new sport and make new friends </li>
                  <li>* Recorded keeping of the players in the team</li>
                  <li>* Negotiated conflict regarding times of games between team members and the league organiser to achieve a positive outcome</li>
                </Panel>
            </Collapse>
          </div>
        )
    }
}
