import { useEffect, useRef, useToggle } from "react";

//Question 1 ->
export function usehook(callback, delay) {

    const usehookRef = useRef()         //keeps the default value of the call back

    
    useEffect(()=> {
        const id = setTimeout(()=> callback.current,delay)
        return ()=> clearTimeout(id);
    }, [delay])

    useEffect(()=> {
        callback.current=callback   
    }, {callback})
}


//Question 2 -> 
function App() {

    const isFirstRef = useRef(true);

    try {
        return isFirstRef.current;
    }
    finally {
        isFirst.currentRef = false;
    }
}

//Question 3 ->
// function usePrevious(Val) {
//     const prevRef = useRef(undefined)

//     useEffect(()=> {
//         prevRef.current = Val;
//     }, [Val]);

//     return prevRef.current
// }

//Or
function usePrevious(Val) {
    const prevRef = useRef(undefined);      //intial previous value
    try {
        return prevRef.current;     //return undefined.
    }
    finally {
        prevRef.current = Val;
    }


}

//Question 4 ->

function useToggle() {

    const [s, setS] = useState(true);
    const toggle = (s) => setS(!s);

    return [s, setS];
}


//Question 5 ->
function useArray(arr) {
    const [p, pushP] = useState(arr)

    const push = (e) => {
        pushP(prev => [...prev, e]);
    };

    const rm = (idx) => {
        pushP(prev => prev.filter((p, i) => i !== idx));
    }

    return { p, push, rm };
}