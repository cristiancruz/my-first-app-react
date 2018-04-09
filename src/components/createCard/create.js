import React, {Component} from 'react';
import {Form, Input, Button, Select, notification } from 'antd';
// message
import './create.css'
const FormItem = Form.Item;
const Option = Select.Option;

class CreateTask extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.props.onAddTask(values)
                    this.props.form.resetFields();
                    // message.success('Tarea creada!',2);
                    notification['success']({
                        message: 'Exito!',
                        description: 'Tarea creada.',
                        duration: 2
                      });
                }
            });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: 'El campo titulo es requerido!'
                            }
                        ]
                    })(<Input placeholder="Titulo" className="w2"/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('responsible', {
                        rules: [
                            {
                                required: true,
                                message: 'El campo responsable es requerido!'
                            }
                        ]
                    })(<Input placeholder="Responsable" className="w2"/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('description', {
                        rules: [
                            {
                                required: true,
                                message: 'El campo descripción es requerido!'
                            }
                        ]
                    })(<Input placeholder="Descripción" className="w2"/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('priority', {
                        rules: [
                            {
                                required: true,
                                message: 'El campo prioridad es requerido!'
                            }
                        ],
                        initialValue: 'low'
                    })(
                        <Select className="w2">
                            <Option value="low">Baja</Option>
                            <Option value="medium">Mediana</Option>
                            <Option value="high">Alta</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Crear
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(CreateTask);