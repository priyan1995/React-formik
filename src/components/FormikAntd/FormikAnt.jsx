import { Col, Row } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Form, Formik, FormikContext } from 'formik'
import { Radio, Input } from 'formik-antd'
import React from 'react'


export const FormikAntd = () => {

    const initialValues = {
        email: '',
        gender: 'male'
    }

    return (

        <>
            <h2>Formik Ant D</h2>

            <Formik initialValues={initialValues} enableReinitialize={true}>
                {formik => {
                    console.log(formik);
                    return (
                        <FormikContext.Provider value={formik}  >
                            <Row gutter={24}>
                                <Col span={12}>
                                    <FormItem name='email' label='Email'>
                                        <Input name='email' />
                                    </FormItem>
                                </Col>

                                <Col span={12}>
                                    <FormItem name='gender' label='gender'>
                                        <Radio.Group name='gender'>
                                            <Radio name='gender' value='male'>
                                                Male
                                            </Radio>
                                            <Radio name='gender' value='female'>
                                                Female
                                            </Radio>

                                        </Radio.Group>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormikContext.Provider >
                    )
                }}

            </Formik>

        </>


    )
}