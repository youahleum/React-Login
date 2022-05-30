import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "", //DB에서 보내주는 값
    id: "",
    //isLoading: false, // optional 실무에서 사용하는 방법 , 현재는 연습중이라 생략해도 됨
    isLogin: null, //login이 되었는지 아닌지 확인 로그인이 되면 true로
    // 왜 false가 아닌가???  예전에 로그인을 했던 경우에는 자동으로 로그인을 시켜주는 경우가 있다
    // 유저가 로그인을 해야하는지 아닌지를 알아보기 위하여
  },

  reducers: {
    //로그인이 성공되었을때
    loginUser: (state, action) => {
      //여기서 state는 위의 useSlice.initialState에서 온다고 생각하면 된다
      // (state.name = action.payload.name),
      //   (state.id = action.payload.id), //...action.payload 로 넣을수 있다
      return {
        ...action.payload,
        isLogin: true,
      };
    },
    // 로그아웃이 되었을때
    clearUser: (state) => {
      return { name: "", id: "", isLogin: false };
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
