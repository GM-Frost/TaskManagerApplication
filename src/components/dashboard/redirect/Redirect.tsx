import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Redirect = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate("/welcome");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <>
      <div className="vh-100 gradient">Redirecting you in {count} sec</div>
    </>
  );
};

export default Redirect;
