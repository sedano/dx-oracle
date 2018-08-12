import React, {Component} from 'react';
import {Form, Input, Button, Radio, notification} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class NormalForm extends Component {
    componentDidMount() {
        this.props.form.setFieldsValue({area: 'applications'});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                notification.open({
                    message: 'Submit mockup',
                    description: `The form of ${values.name} (${values.email}) has been submited with the value: ${values.area}`,
                });
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="form-container ant-col-md-offset-2">
                <h2>Get <span>in touch</span></h2>

                <Form onSubmit={this.handleSubmit} hideRequiredMark className='login-form'>
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Please input your name!'}],
                        })(
                            <Input placeholder='Your name' />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{required: true, message: 'Please input your email address!'}],
                        })(
                            <Input type='email' placeholder='You email address' />
                        )}
                    </FormItem>
                    <FormItem
                        label='What area within Oracle do you operate in?'
                    >
                        {getFieldDecorator('area', {
                            rules: [{required: true}],
                        })(
                            <RadioGroup>
                                <Radio className='dx-radio' value='applications'>Sales - Applications</Radio>
                                <Radio className='dx-radio' value='consulting'>Sales - Consulting</Radio>
                                <Radio className='dx-radio' value='customersucess'>Customer Success</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button htmlType='submit' className='submit-form-button'>Submit</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const FormComponent = Form.create()(NormalForm);

export default FormComponent;
