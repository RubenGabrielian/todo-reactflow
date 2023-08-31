"use client"
import {Button, Form, Input} from "antd";
import {StyledSignInForm} from "@/components/sign-in/form/component.styled";
import Logo from "@/components/molecules/logo";

export default function SignInForm() {
    return (
        <StyledSignInForm>
            <Logo width={"80px"}/>
            <h3>Log in to your account</h3>
            <Form layout={"vertical"}>
                <Form.Item label={"Email"} name={"email"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Password"} name={"password"}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} block>Sign In</Button>
                </Form.Item>
            </Form>
        </StyledSignInForm>
    )
}