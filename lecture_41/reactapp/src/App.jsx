import NavBar from './NavBar';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
function App() {

    const { theme } = useContext(ThemeContext);
    
    useEffect(()=> {
        document.body.className = theme;
    }, [theme]);

    return <NavBar />
}

export default App;

//    How context API works ?
/**
 * State Management 
 * -> UseState is also used for state management
 * 
 * Problem - let suppose there are 100 componenet that uses 100 useState so there will be multiple useState code 
 * So we need a Central system instead which had state info 
 * Let suppose there is a App -> and inside app there is header and insde header we have NavBar and Profile 
 * So to handle such Nested structrue it becomes a problematic situtation
 * So we need a Central system that mananges all the data
 * The P1 solution which handles this kind of situation is Context API 
 * 
 * 
 * What is Context API ->
 * Context API is inbuilt and it allows us to share data globally.
 * Context API has 3 parts ->
 * CreateContext
 * Provider -> Provide state 
 * useContext -> Similar to as useState which is used to utilised the context whereEver needed.
 * 
 * 
 * 
 * Flow -> 
 Provider stores the state
 UseContext reads the state
 If state get's updated It would be re-rendered for it's consumers.
 */