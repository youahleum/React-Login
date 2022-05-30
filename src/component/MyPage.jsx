import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../reducer/userSlice.js";

function MyPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const LogoutFunc = () => {
  //   /* ... */
  // };
  React.useEffect(() => {
    console.log(user);
  }, []);
  return (
    <>
      <h1>MyPage</h1>
      <p>{user.data.name}님, 안녕하세요!</p>
      <button
        onClick={() => {
          dispatch(clearUser());
        }}
      >
        로그아웃
      </button>
    </>
  );
}

export default MyPage;
