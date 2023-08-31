import React from "react";
import Navbar from "../../components/layouts/navbar/navbar";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}
