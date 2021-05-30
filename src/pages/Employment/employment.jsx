import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default class employment extends Component {
    render() {
        return (
            <div>
                <Collapse accordion>
                    <Panel header="Internship in IEC (Tianjin) Technologies Co." key="1" >
                        <li>* Got involved in a group work to solve the problem of transportation of the automobile </li>
                        <li>* Used Mathematica and java to build math model to measure the time of traffic light responding to the speed of the traffic objection in the AI transportation project</li>
                    </Panel>
                    <Panel header="Internship in Tianjin ZhongShen United CPA Firm" key="2">
                        <li>* Reported the stage result of the auditing to the client</li>
                        <li>* Audited the receipts of the companies</li>
                        <li>* Used excel to calculate the account book of the client companies</li>
                    </Panel>
                    <Panel header="Internship as Clerk in Mathematics and Statistics Department of Chongqing University" key="3">
                        <li>* Recorded keeping of Department staff</li>
                        <li>* Assisted visitors by taking a tour around the department and introducing the daily life and normal routine about the students and staffs</li>
                        <li>* Helped the full-time staffs with their package delivering and mark grading</li>
                        <li>* Delivered the messages for the staffs when they are absent</li>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
