import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "@components/Header";
import Home from "@pages/Home";
import Login from "@pages/Login";
import NotFound from "./pages/NotFound/NotFound";
import Random from "@pages/Random";
import NameList from "./pages/NameList/NameList";

import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [user, setUser] = useState({ name: "", hint: "", id: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(user.name !== "");

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    //console.log(isLoggedIn);
  };
  useEffect(() => {
    //console.log(user);
  }, [user]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: "", hint: "", id: "" });
  };

  return (
    <>
      {!isLoginPage && <Header name={user.name} handleLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={user.name !== ""}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/random"
          element={
            <ProtectedRoute isAllowed={user.name !== ""}>
              <Random hint={user.hint} name={user.name} id={user.id} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/namelists"
          element={
            <ProtectedRoute isAllowed={user.name !== ""}>
              <NameList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login setUser={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
