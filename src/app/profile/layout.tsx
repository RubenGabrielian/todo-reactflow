import React from "react";
import Navbar from "../../components/layouts/navbar/navbar";

export default function ProfileLayout({ children }:{children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </> 
  );
}
