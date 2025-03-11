import HomePage from '../pages/home';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
};

export default App;
