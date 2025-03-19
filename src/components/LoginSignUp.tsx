"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Row, Col, Card, Form, Input, Button, Flex, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../app/globals.css';
const LoginSignUp = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isSignUp = pathname === "/sign-up";
    const handleSubmit = () => {
        console.log('object')
    }
  return (
    <div className="custom-background-img flex justify-end items-center">
        <Card className="flex items-center justify-center w-100 h-100 right-40">
            <Form
              name={isSignUp ? "Sing-up" : "Login"}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Flex justify="space-between" align="center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a href="">Forgot password</a>
                </Flex>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  {isSignUp ? "Sign Up" : "Log In"}
                </Button>
                <br />
                {isSignUp ? (
                  <span>
                    Already have an account?{" "}
                    <a onClick={() => router.push("/login")}>Login now!</a>
                  </span>
                ) : (
                  <span>
                    Don't have an account?{" "}
                    <a onClick={() => router.push("/sign-up")}>Register now!</a>
                  </span>
                )}
              </Form.Item>
            </Form>
        </Card>
    </div>
  );
};

export default LoginSignUp;
