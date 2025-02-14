import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("count re-render");
  return <div>
    <CountRenderer />
    <Buttons />
    <EvenCountRenderer />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
  </div>
}

// function EvenCountRenderer() {
//   const count = useRecoilValue(countAtom);
//   const isEven = useMemo(() => count % 2 === 0, [count]);
  
//   return <div>{isEven ? "It is even" : null}</div>
// }
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? null : "It is even"} 
    {/* 0 -> false, 1 -> true */}
  </div>
}


function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
