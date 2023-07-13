import CalculatorPage from "../pages/calculator/App";
import ChessBoardPage from "../pages/chessboard/App";
import FormInfo from "../pages/formInfo";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import PomodoroPage from "../pages/pomodoro/App";
import QuotePage from "../pages/quote";

export const privateRoutes = [
  { path: "/chessboard", component: ChessBoardPage },
  { path: "/pomodoro", component: PomodoroPage },
  { path: "/calculator", component: CalculatorPage },
  { path: "/quotes", component: QuotePage },
  { path: "/forminfo", component: FormInfo },
  { path: "/", component: Home },
];

export const loginRoutes = { path: "/login", component: LoginPage };
