import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Main, Wrapper } from "./Layout.styled";
import { ToastContainer } from "react-toastify";
import { Hero } from "../../components/Hero/Hero";
import "react-toastify/dist/ReactToastify.css";

const Layout: FC = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Hero />
          <Suspense>
            <Outlet />
          </Suspense>
        </Main>
        <Footer />
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Layout;
