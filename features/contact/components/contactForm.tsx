import { Button, Form, Input } from 'antd';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { sendContactForm } from '../api';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

type Props = {};

function ContactForm({}: Props) {
  async function onFinish(values) {
    await sendContactForm(values);
    form.resetFields();
  }

  const [form] = Form.useForm();

  return (
    <Form layout="vertical" size="large" onFinish={onFinish} form={form}>
      <Form.Item
        label="Email Address"
        name="email"
        required
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name={'name'}
        required
        rules={[
          {
            required: true,
            whitespace: true,
            min: 2,
            max: 100,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Subject"
        name="subject"
        required
        rules={[
          {
            required: true,
            whitespace: true,
            min: 5,
            max: 100,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        required
        rules={[
          {
            required: true,
            whitespace: true,
            min: 2,
            max: 10000,
          },
        ]}
      >
        <ReactQuill />
      </Form.Item>

      <div className="text-center">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;
