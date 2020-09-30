import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import "./index.css";
import Footer from "../components/Footer";

const Layout = ({ children, data }) => (
  <div>
    <Header />
    {children()}
    <Footer data={data}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{" "}
      <a href="mailto:support@designcode.io">Email us</a> to ask anything. ©
      2018
    </Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
