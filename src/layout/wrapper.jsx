'use client'
import { animationCreate } from "@/utils/utils";
import React, {useContext, useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import Header from "./headers/header";
import { Context, ContextProvider } from "../components/Clients/clientcomponents";
const Wrapper = ({ children }) => {
  //const {user,setUser}=useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])
  return (
    <>
      <ContextProvider>
      <Header />
      {children}
      <Footer />
      <BackToTop/>
      </ContextProvider>
    </>
  );
};

export default Wrapper;