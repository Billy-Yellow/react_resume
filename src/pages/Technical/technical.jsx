import React, { Component } from 'react'
import { Tag, Divider } from 'antd';

export default class education extends Component {
    render() {        
        return (
            <div>
                <Divider orientation="left">Programming Language</Divider>
                <div>
                  <Tag color="magenta">Matlab</Tag>
                  <Tag color="red">Python</Tag>
                  <Tag color="volcano">Java</Tag>
                  <Tag color="orange">C++</Tag>
                  <Tag color="gold">JavaScript</Tag>
                  <Tag color="lime">Julia</Tag>
                  <Tag color="green">R</Tag>
                  <Tag color="cyan">C</Tag>
                </div>
                <Divider orientation="left">Framework/Tools</Divider>
                <div>
                  <Tag color="blue">React.js</Tag>
                  <Tag color="geekblue">Node.js</Tag>
                  <Tag color="purple">Sage Math</Tag>
                  <Tag color="#f50">MongoDB</Tag>
                  <Tag color="#2db7f5">Excel</Tag>
                  <Tag color="#87d068">Latex</Tag>
                  <Tag color="#108ee9">Mathematica</Tag>
                </div>
            </div>
        )
    }
}
