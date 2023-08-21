import { useSelector } from "react-redux";
import { selectAuth } from "../../../redux/slice/authSlice";
import Welcome from "../../../pages/Welcome";

const PrivateRoute = ({ children }: { children: any }) => {
  const { userName } = useSelector(selectAuth);
  return userName ? children : <Welcome />;
};

export default PrivateRoute;
