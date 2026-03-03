import Home from 'src/components/pages/Home';
import Configuration from './Configuration';
import Play from './Play';
import LogIn from './register/LogIn';
import SignIn from './register/SignIn';
import EnterGame from './game/EnterGame';

export default {
  logIn: {
    component: <LogIn />,
  },
  signIn: {
    component: <SignIn />,
  },
  home: {
    component: <Home />,
  },
  configuration: {
    component: <Configuration />,
  },
  play: {
    component: <Play />,
  },
  enterGame: {
    component: <EnterGame />,
  },
};

