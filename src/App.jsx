import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts";
import { privateRoutes, loginRoutes } from "./routes/index";
import "./App.module.scss";
import { ConfigProvider } from "antd";
import { useState } from "react";
import { themeLight, themeDark } from "../src/constants/index";

function App() {
  const [token, setToken] = useState(null);
  const [theme, setTheme] = useState(themeLight);

  const LoginRoutesComponent = loginRoutes.component;

  return (
    <>
      <ConfigProvider theme={theme}>
        <Routes>
          <Route
            element={<LoginRoutesComponent token={token} setToken={setToken} />}
            path={loginRoutes.path}
          ></Route>
          {privateRoutes.map(({ path, component }, index) => {
            const Page = component;
            return (
              <Route
                element={
                  token !== null ? (
                    <DefaultLayout
                      theme={theme}
                      setTheme={setTheme}
                      token={token}
                      setToken={setToken}
                    >
                      <Page />
                    </DefaultLayout>
                  ) : (
                    <Navigate to={"/login"} />
                  )
                }
                path={path}
                key={index}
              ></Route>
            );
          })}
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
