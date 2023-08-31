"use client";
import { StyledNavbar } from "../../../components/layouts/navbar/navbar.styled";
import Link from "next/link";
import Container from "../../../components/molecules/container/container";
import Flex from "../../../components/molecules/flex";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";

export default function Navbar() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Logout
        </a>
      ),
    },
  ];

  return (
    <StyledNavbar>
      <Container>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <ul>
            <li>
              <Link href={"/profile"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/to-do-list"}>To Do List</Link>
            </li>
          </ul>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              Ruben Gabrielyan <DownOutlined />
            </a>
          </Dropdown>
        </Flex>
      </Container>
    </StyledNavbar>
  );
}
