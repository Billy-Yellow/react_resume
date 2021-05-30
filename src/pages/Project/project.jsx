import React, { Component } from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default class project extends Component {
    render() {
        return (
            <div>
                <Collapse accordion>
                <Panel header="Building sandpile model to simulate bush fire and analysis the data with Complex System (python)" key="1">
                    <li>* Used python to build a sand pile model</li>
                    <li>* Manipulated the model to simulate the bush fire</li>
                    <li>* Analysed the data with complex system to anticipate the life length and affected area of bushfires</li>
                    <li>* Wrote a report to introduce my abstract model explain its real application and stated the result of my practice</li>
                </Panel>
                <Panel header="Using Numerical Method to Solving Differential Equation (Matlab)" key="2">
                    <li>* Learned the algorithm in Numerical Method for simulating Differential Equations</li>
                    <li>* Analysed errors between practical and theoretical outcomes</li>
                    <li>* Used Least Square method to simulate transforms</li>
                    <li>* Wrote academic thesis</li>
                </Panel>
                <Panel header="Learning DFS and BFS algorithm to for Graph Traversal to identify the object from the image (Matlab)" key="3">
                    <li>* Studied these two algorithms’ applications in graph theories</li>
                    <li>* Measured different ways of changing the weight on paths between nodes</li>
                    <li>* Analysed the data to categorise the images into different group</li>
                </Panel>
                <Panel header="Using Numerical Method to Solving Differential Equation (Matlab)" key="4">
                    <li>* Got involved in a group work</li>
                    <li>* Used Julia(python) to build the model and solved the optimisation problem</li>
                    <li>* Used Gurobi as a tool to solve the nonlinear problems</li>
                    <li>* Analysed the outcome and presented them on the report</li>
                </Panel>
                <Panel header="Using Numerical Method to Solving Differential Equation (Matlab)" key="5">
                    <li>* Studied Java and build the entire program independently</li>
                </Panel>
                </Collapse>
            </div>
        )
    }
}
