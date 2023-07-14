import CalculatorPage from "../pages/calculator/App";
import ChessBoardPage from "../pages/chessboard/App";
import FormInfo from "../pages/formInfo";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import PomodoroPage from "../pages/pomodoro/App";
import QuotePage from "../pages/quote";

const baseUrl = import.meta.env.BASE_URL;

export const privateRoutes = [
  { path: `${baseUrl}/chessboard`, component: ChessBoardPage },
  { path: `${baseUrl}/pomodoro`, component: PomodoroPage },
  { path: `${baseUrl}/calculator`, component: CalculatorPage },
  { path: `${baseUrl}/quotes`, component: QuotePage },
  { path: `${baseUrl}/forminfo`, component: FormInfo },
  { path: `${baseUrl}/`, component: Home },
];

export const loginRoutes = { path: `${baseUrl}/login`, component: LoginPage };
