import React from 'react';
import { Button, Form, Input } from 'antd';
import { ICreateToDoFormProps } from './types';

const { TextArea } = Input;

export default function CreateToDoForm({
  data,
  handleFinish,
} : ICreateToDoFormProps) {
  return (
    <Form
      layout={'vertical'}
      onFinish={handleFinish}
      initialValues={{
        title: data?.title,
        description: data?.description,
      }}
    >
      <Form.Item label={'Title'} name={'title'}>
        <Input />
      </Form.Item>
      <Form.Item label={'Description'} name={'description'}>
        <TextArea />
      </Form.Item>
      <Form.Item>
        <Button type={'primary'} htmlType={'submit'} block>
          {data?.title ? 'Edit' : 'Create'}
        </Button>
      </Form.Item>
    </Form>
  );
}
