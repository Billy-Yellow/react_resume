import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';

export default class technical extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                <Col span={12}>
                    <Card title="Master of Science (Mathematics and Statistics)" bordered={false}>
                    Discrete Mathematics & Industry Optimisation{"\n"}<br/><br/>
                    University of Melbourne, Victoria {"\n"}<br/><br/>
                    July 2018 – December 2020
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Research Project" bordered={false}>
                    lasting for 18 months including 80 pages and presented to the Math department{"\n"}<br/><br/>
                    Nonstandard Finite Element Methods For Non-divergence Form Partial Differential Equations
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Bachelor of Science (Statistics)" bordered={false}>
                    University of Chongqing, China{"\n"}<br/><br/>
                    Aug 2014 – June 2018
                    </Card>
                </Col>
                </Row>
            </div>
        )
    }
}
