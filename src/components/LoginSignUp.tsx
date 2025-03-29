"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Row, Col, Card, Form, Input, Button, Flex, Checkbox } from "antd";
import { LockOutlined, UserOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import '../app/globals.css';
const LoginSignUp = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isSignUp = pathname === "/sign-up";
    const isLogin = pathname === "/login";
    const forgotPassword = pathname === "/forgot-password";
    const handleSubmit = () => {
        console.log('object')
    }
  return (
    <div className="custom-background-img flex justify-end items-center">
        <Card className="flex flex-col-grown items-center justify-center min-w-[400px] min-h-[400px] right-40">
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

              {!forgotPassword && (
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
              </Form.Item>
              )}
              {isSignUp && (
                <>
                  <Form.Item
                    name="Confirm Password"
                    rules={[
                      { required: true, message: "Please input your Confirm Password!" },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Phone"
                    rules={[
                      { required: true, message: "Please input your Phone Number!" },
                    ]}
                  >
                    <Input
                      prefix={<PhoneOutlined />}
                      type="text"
                      placeholder="Phone"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Address"
                    rules={[
                      { required: true, message: "Please input your Address" },
                    ]}
                  >
                    <Input
                      prefix={<HomeOutlined />}
                      type="text"
                      placeholder="Address"
                    />
                  </Form.Item>
                </>
              )}
              {isLogin &&(
                <>
                  <Form.Item>
                    <Flex justify="space-between" align="center">
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                      <a onClick={() => router.push("/forgot-password")}>Forgot password</a>
                    </Flex>
                  </Form.Item>
                </>
              )}
              {forgotPassword &&(
                  <>
                    <Form.Item
                      name="Phone Number"
                      rules={[
                        { required: true, message: "Please input your Phone Number" },
                      ]}
                    >
                      <Input
                        prefix={<PhoneOutlined />}
                        type="text"
                        placeholder="Phone Number"
                      />
                    </Form.Item>
                    <Form.Item
                      name="New Password"
                      rules={[
                        { required: true, message: "Please input your New Password!" },
                      ]}
                    >
                      <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="New Password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="Confirm Password"
                      rules={[
                        { required: true, message: "Please input your Confirm Password!" },
                      ]}
                    >
                      <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Item>
                  </>
                  
              )}
              <Form.Item>
                {pathname === "/forgot-password" ? (
                  <Button block type="primary" htmlType="submit">
                    Reset Password
                  </Button>
                ) : (
                  <Button block type="primary" htmlType="submit">
                    {isSignUp ? "Sign Up" : "Log In"}
                  </Button>
                )}
                <br />
                {pathname === "/forgot-password" ? (
                  <span>
                    Remembered your password?{" "}
                    <a onClick={() => router.push("/login")}>Login now!</a>
                  </span>
                ) : isSignUp ? (
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
