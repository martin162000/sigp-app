import React from 'react'

import { Form, Input, Button } from 'antd';

const SearchForm = () => {
    return (
        <Form name="basic"labelCol={{ span: 8,}} wrapperCol={{span: 16,}} initialValues={{remember: true,}} autoComplete="off" style={{marginBottom:"80px"}}>
            <Form.Item style={{ justifyContent: "center"}}> 
                <Input style={{height: "40px", borderRadius: "4px"}} placeholder="Search for any movie or tv series " />
            </Form.Item>

            <Form.Item style={{ justifyContent: "center", textAlign: "center"}}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SearchForm
