import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Store from '../pages/Store';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Help from '../pages/Help';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/help" element={<Help />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
