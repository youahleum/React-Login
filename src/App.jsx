import React from 'react';
import { useSelector } from "react-redux";

import LoginComponent from './component/LoginComponent';
import MyPage from './component/MyPage';

function App() {
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      {/* ... */}
    </div>
  )
}

export default App
