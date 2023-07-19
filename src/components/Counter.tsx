// import { CounterContext } from "@/context/Counter";
// import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
type Props = {};

const Counter = () => {
    // const { state, dispatch } = useContext(CounterContext);
    const { count } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    console.log(count); // { count: 0}
    return (
        <div>
            Counter {count}
            <button onClick={() => dispatch({ type: "counter/increment" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "counter/decrement" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "counter/increase", payload: 10 })}>DECREMENT</button>
        </div>
    );
};

export default Counter;
