import CompA from "./CompA";
import CompC from "./CompC";
import dynamic from "next/dynamic";
// import CompC from "./CompC";
const CompB = dynamic(() => import('./CompB'), { ssr: false })

export const App = () => {
  const rand = Math.random();
  return (
    <>
      {rand > 0.5 ? (
        <CompA>
          <CompC />
        </CompA>
      ) : null}
      <CompB />
    </>
  );
};

export default App;
