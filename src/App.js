// import React from 'react';

// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';

// import ClsHeader from './components/clsHeader';
// import ClsMain from './components/clsMain';
// import ClsFooter from './components/clsFooter';

// import FuncHeader from './components/fnHeader';
// import FuncMain from './components/fnMain';
// import FuncFooter from './components/fnFooter';

// class App extends React.Component {
//     // member function
//     render() {
//         return (
//             <div>
//                 <h1>This is a Class Component</h1>
//             </div>
//         )
//     }
// }
// export default App;

// function App() {
//     return (
//         <>
//             <h1>This is a Function Component</h1>
//         </>
//     )
// }
// export default App;



// function App() {
//   return (
//     <>
//         {/* <ClsHeader />
//         <ClsMain />
//         <ClsFooter /> */}

//         <FuncHeader />
//         <FuncMain />
//         <FuncFooter />
//     </>
//   )
// }

// function App() {
//   const showName = false;
//   const name = "Dinesh";
//   const namesList = ["Dinesh", "Tony", "Gopal", "Bob", "John"];

//   // for(let i = 0; i < namesList.length; i++) {} = outdated or least used
//   // for(let temp in namesList) {} = outdated or least used
//   // for(let temp of namesList) {} = outdated or least used

//   // let output = [];
//   // for(let temp of namesList) {
//   //   // console.log(temp);
//   //   output.push(<li>{temp}</li>);
//   // }
//   // console.log(output);

//   // let output = [];
//   // namesList.forEach((v, i) => {
//   //   output.push(<li>{v}</li>);
//   // });

//   let output = namesList.map((v, i) => <li key={i}>{v}</li>);

//   (showName)
//     ?
//     console.log(name)
//     :
//     console.log("Name is not displayed");

//   return (
//     <>
//       <p>Name: {showName && name}</p>
//       <p>Name: 
//         {
//           showName ? name : "Name not displayed"
//         }
//       </p>
//       {/* <ul>
//         {output}
//       </ul> */}

//       <ul>
//         {
//           namesList.map((v, i) => <li key={i}>{v}</li>)
//         }
//       </ul>

//       {showName && <FuncMain />}
//     </>
//   )
// }


// import ClsPropsStates from './components/clsPropsStates';
// import FnPropsStates from './components/fnPropsStates';

// function App() {

//   const [login, setLogin] = useState(false);

//   let data = {
//     "name": "Dinesh",
//     "id": 1,
//     "age": "30",
//     "active": true,
//   }

//   return (
//     <>
//       {/* <ClsPropsStates name="Dinesh" id={1000} age="30" active={true} /> */}

//       {/* <ClsPropsStates dinesh={data} />

//       <FnPropsStates dinesh={data} /> */}

//       <p>Login Status: {login.toString()}</p>

//       {
//         login
//           ?
//           <>
//             <p><button onClick={() => setLogin(false)}>Logout</button></p>
//             <ClsPropsStates dinesh={data} />
//           </>
//           :
//           <>
//             <p><button onClick={() => setLogin(true)}>Login</button></p>
//           </>
//       }

      
      
//     </>
//   )
// }

// import ClsLifeCycle from './components/clsLifeCycle';
// import ClsAPI from './components/clsAPI';

// import FnHooks from './components/fnHooks';
// import FnAPI from './components/fnAPI';

// function App() {
//   const [login, setLogin] = useState(false);

//   return (
//     <>
//       {/* {
//         login 
//           ?
//           <button onClick={() => setLogin(false)}>Logout</button>
//           :
//           <button onClick={() => setLogin(true)}>Login</button>
//       }
//       <br />
//       <ClsLifeCycle login={login} /> */}

//       {/* <ClsAPI /> */}

//       {/* <FnHooks /> */}

//       <FnAPI />
//     </>
//   )
// }

// import ChildComp1 from './components/childComp1';
// import ChildComp2 from './components/childComp2';
// import ChildComp3 from './components/childComp3';

import FnForms from './components/fnForms';

// let loginContext = createContext();

function App() {
  // const [login, setLogin] = useState(false);
  return (
    <>
      {/* <p>Login: {login.toString()}</p>
      {
        login 
          ? 
          <button onClick={() => setLogin(false)}>Logout</button>
          :
          <button onClick={() => setLogin(true)}>Login</button>
      } */}
      {/* <ChildComp1 logged={login} />
      <ChildComp2 logged={login} />
      <ChildComp3 logged={login} /> */}

      {/* <loginContext.Provider value={login}>
        <ChildComp1 />
        <ChildComp2 />
        <ChildComp3 />
      </loginContext.Provider> */}

      <FnForms />
    </>
  )
}

export default App;
// export { loginContext };
