import { Button, Form, Input } from 'antd';

type Props = {};

function ContactForm({}: Props) {
  return (
    <Form layout="vertical" size="large">
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
        label="Content"
        name="content"
        required
        rules={[
          {
            required: true,
            whitespace: true,
            min: 2,
            max: 1000,
          },
        ]}
      >
        <Input.TextArea
          autoSize={{
            minRows: 10,
            maxRows: 15,
          }}
        />
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
