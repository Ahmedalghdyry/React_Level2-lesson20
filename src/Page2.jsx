import { useContext } from "react";
import ThemeContext from "./Context/Datacontext";

const Page2 = () => {
  const { name, theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <h1>Welcome to page2</h1>
      <h2>I'am {name}</h2>
    </div>
  );
};

export default Page2;
