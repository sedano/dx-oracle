import React, {Component} from 'react';
import {Row, Col} from 'antd';

import FormComponent from './form/FormComponent';
import ShapesComponent from './form/ShapesComponent';

class FormSection extends Component {
    render() {
        return (
            <section className='form'>
                <Row type="flex" justify="space-around" align="middle" style={{minHeight: '100vh'}}>
                    <Col xs={24} md={12}>
                        <ShapesComponent />
                    </Col>
                    <Col xs={24} md={12}>
                        <FormComponent />
                    </Col>
                </Row>

            </section>
        );
    }
}

export default FormSection;
