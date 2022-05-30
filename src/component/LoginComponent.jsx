import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducer/userSlice.js";
import axios from "axios";

function LoginComponent() {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    /* ... */
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg]);

  const LoginFunc = (e) => {
    e.preventDefault(); //페이지 이동을 멈춰주세 된다.
    if (!(id && password)) {
      return alert("값을 모두 채워주세요");
    }
    setLoading(true);

    let body = {
      id, //id:id  와 같음
      password, //password:password 와 같음
    };
    axios.post("https://st-fe34.herokuapp.com/api/login", body).then((res) => {
      switch (res.data.code) {
        case 400:
          setMsg("input값 비어있음");
          break;
        case 401:
          setMsg("없는 id임");
          break;
        case 402:
          setMsg("pw 틀림");
          break;
        default:
          // console.log(res.data.userInfo);
          // console.log(res.data.userInfo.name);
          let data = {
            name: res.data.userInfo.name,
            id: res.data.userInfo.id,
          };
          // dispatch(loginUser({ userInfo })); 이렇게 해도 되지만 불필요한 정보까지 보내는것
          dispatch(loginUser({ data }));
          break;
      }
    });
  };
  return (
    <>
      <h1>LoginComponent</h1>
      <form onSubmit={LoginFunc}>
        <label
          htmlFor="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        >
          ID :{" "}
        </label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit" disabled={loading}>
          로그인
        </button>
        <br />
        {msg}
      </form>
    </>
  );
}

export default LoginComponent;
