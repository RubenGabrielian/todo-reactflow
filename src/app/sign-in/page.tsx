"use client"
import {Col, Row} from "antd";
import SignInForm from "@/components/sign-in/form/form";
import SignInBackground from "@/components/sign-in/background/background";

export default function SignIn() {
    return (
        <div>
            <Row>
                <Col lg={10}>
                    <SignInForm/>
                </Col>
                <Col lg={14}>
                    <SignInBackground/>
                </Col>
            </Row>
        </div>
    )
}