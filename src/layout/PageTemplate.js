import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../style/reset.css";
import "../style/base.css";
import "../style/utility.css";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import WhatsappBubble from "../component/WhatsappBubble";
import styled from "styled-components";

export default function PageTemplate({ children }) {
  return (
    <div>
      <NavbarMain />
      {children}
      <WhatsappBubble />
      <Footer />
    </div>
  );
}
