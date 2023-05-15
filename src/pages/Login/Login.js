import { useState, useEffect } from "react";

import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import loginBG from "@assets/images/loginBG.png";
import mobileBG from "@assets/images/mobileBG.png";
import smtBlack from "@assets/images/SMTlogo-black.png";
import smtGray from "@assets/images/SMTlogo-gray.png";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({ name: "", hint: "", id: "" });

  const navigator = useNavigate();

  useEffect(() => {
    if (user.name !== "" || props.isLoggedIn) {
      props.setUser(user);
      navigator("/");
    }
    //console.log(user);
    //console.log(props.isLoggedIn);
  }, [navigator, props, props.isLoggedIn, user]);

  const fetchUser = async () => {
    try {
      const snapshot = await getDocs(
        query(collection(db, "Users"), where("username", "==", username))
      );
      if (snapshot.empty) {
        alert("ไม่พบชื่อผู้ใช้");
      } else {
        snapshot.forEach((doc) => {
          const userData = {
            name: doc.data().name,
            hint: doc.data().hint,
            id: doc.id,
          };
          setUser(userData);
        });
      }
    } catch (e) {
      //console.log(e);
      alert("มีบางอย่างผิดพลาด");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here
    //console.log(username + "-" + password);
    if (username === "" || password === "") {
      alert("โปรดกรอกข้อมูลให้ครบถ้วน");
    } else {
      fetchUser();
    }
  };
  return (
    <>
      <img
        src={loginBG}
        alt="BG"
        className="absolute hidden h-full w-full md:block"
      />
      <div className="hidden md:block">
        <form
          className=" absolute right-0 z-40 flex h-full w-2/5 flex-col items-center justify-center space-y-12  bg-white"
          onSubmit={handleSubmit}
        >
          <span className="text-4xl">เข้าสู่ระบบ</span>
          <div className="w-1/2">
            <div className="mb-4 ">
              <label
                className="mb-2 block text-lg text-gray-700"
                htmlFor="username"
              >
                ชื่อผู้ใช้
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label
                className="mb-2 block text-lg text-gray-700"
                htmlFor="password"
              >
                รหัสผ่าน
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-6 py-2.5 text-lg text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <p className="text-md w-4/5 text-center text-red-600">
            <b>หมายเหตุ*</b>{" "}
            ในช่องชื่อผู้ใช้ให้กรอกเลขนักเรียนตามใบที่พี่ส่งไปในโอเพ่นแชทนะ
            <br />
            ส่วนช่องรหัสผ่านให้กรอกวันเกิดของคุณ เช่น 31122007
            <br />
            ถ้ามีปัญหาอะไรก็แท็ก @อุดมเองงับอุนเทอ ในโอเพ่นแชทนะ
          </p>
        </form>
      </div>
      <img
        src={smtBlack}
        alt="logo"
        className="absolute right-4 top-2 z-50 hidden h-20 md:block"
      />
      {/* mobile layout */}
      <img
        src={mobileBG}
        alt="BG"
        className="absolute h-full w-full md:hidden"
      />
      <div className=" w-full md:hidden">
        <form
          className=" absolute right-0 flex h-full w-full flex-col items-center justify-center space-y-12"
          onSubmit={handleSubmit}
        >
          <div>
            <img src={smtGray} alt="logo" className="mb-4 h-16 md:hidden" />
            <span className="text-4xl text-white">เข้าสู่ระบบ</span>
          </div>
          <div className="w-2/3">
            <div className="mb-4 ">
              <label
                className="mb-2 block text-lg text-white"
                htmlFor="username"
              >
                ชื่อผู้ใช้
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label
                className="mb-2 block text-lg text-white"
                htmlFor="password"
              >
                รหัสผ่าน
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-6 py-2.5 text-lg text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <p className="text-md mx-4 text-center text-red-500">
            <b>หมายเหตุ*</b>{" "}
            ในช่องชื่อผู้ใช้ให้กรอกเลขนักเรียนตามใบที่พี่ส่งไปในโอเพ่นแชทนะ{" "}
            <br />
            ส่วนช่องรหัสผ่านให้กรอกวันเกิดของคุณ เช่น 31122007 <br />
            ถ้ามีปัญหาอะไรก็แท็ก @อุดมเองงับอุนเทอ ในโอเพ่นแชทนะ
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
