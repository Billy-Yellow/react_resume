import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

let text_1 = `● 
Name: Xu (Billy) Huang ●
Mobile: 0452 325163 ●
Email: huangxuxu1995@gmail.com`;

let text_2 = `
I am a recently graduated postgraduate student with excellent technical skills, 
a strong individual work ethic and ability to work in a team.`;

let text_3 = `
During my studies, I have worked on many projects in different areas, ranging from statistics problems to industry optimisation problems. 
During these projects, I realised that designing algorithms is insufficient to achieve outcomes. 
Building a model to make fascinating ideas into reality requires a high level of coding proficiency. 
Because of this, I began studying coding from courses in my university’s computer science department, online tutorials and seeking out internships in technology companies. 
These experiences have developed my passion for computer programming, which is why I hope to pursue a career in programming.
`;

export default class home extends Component {
    render() {
        return (
            <div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="Basic Information" key="1">
                    <p>{text_1}</p>
                    </Panel>
                    <Panel header="Professional Profile" key="1">
                    <p>{text_2}</p>
                    <p>{text_3}</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
