//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

//function App() {
 // const [count, setCount] = useState(0)

  //return (
    //<>
      //<section id="center">
        //<div className="hero">
          //<img src={heroImg} className="base" width="170" height="179" alt="" />
          //<img src={reactLogo} className="framework" alt="React logo" />
          //<img src={viteLogo} className="vite" alt="Vite logo" />
        //</div>
        //<div>
          //<h1>Get started</h1>
          //<p>
            //Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          //</p>
        //</div>
       // <button
         // type="button"
          //className="counter"
          //onClick={() => setCount((count) => count + 1)}
        //>
         // Count is {count}
        //</button>
      //</section>

      //<div className="ticks"></div>

      //<section id="next-steps">
        //<div id="docs">
         // <svg className="icon" role="presentation" aria-hidden="true">
           // <use href="/icons.svg#documentation-icon"></use>
          //</svg>
         // <h2>Documentation</h2>
          //<p>Your questions, answered</p>
         // <ul>
           // <li>
             // <a href="https://vite.dev/" target="_blank">
                //<img className="logo" src={viteLogo} alt="" />
                //Explore Vite
              //</a>
            //</li>
            //<li>
              //<a href="https://react.dev/" target="_blank">
                //<img className="button-icon" src={reactLogo} alt="" />
                //Learn more
              //</a>
            //</li>
          //</ul>
        //</div>
        //<div id="social">
          //<svg className="icon" role="presentation" aria-hidden="true">
            //<use href="/icons.svg#social-icon"></use>
          //</svg>
          //<h2>Connect with us</h2>
          //<p>Join the Vite community</p>
          //<ul>
           // <li>
             // <a href="https://github.com/vitejs/vite" target="_blank">
               // <svg
                 // className="button-icon"
                  //role="presentation"
                  //aria-hidden="true"
                //>
                  //<use href="/icons.svg#github-icon"></use>
                //</svg>
                //GitHub
              //</a>
            //</li>
            //<li>
             // <a href="https://chat.vite.dev/" target="_blank">
               // <svg
                  //className="button-icon"
                 // role="presentation"
                  //aria-hidden="true"
                //>
                  //<use href="/icons.svg#discord-icon"></use>
               // </svg>
                //Discord
             // </a>
            //</li>
            //<li>
              //<a href="https://x.com/vite_js" target="_blank">
               // <svg
                  //className="button-icon"
                  //role="presentation"
                  //aria-hidden="true"
                //>
                  <use href="/icons.svg#x-icon"></use>
                //</svg>
               // X.com
             // </a>
           // </li>
           // <li>
             // <a href="https://bsky.app/profile/vite.dev" target="_blank">
               // <svg
                 // className="button-icon"
                  //role="presentation"
                  //aria-hidden="true"
                //>
                  //<use href="/icons.svg#bluesky-icon"></use>
                //</svg>
                //Bluesky
              // </a>
           // </li>
         // </ul>
       // </div>
     // </section>

     // <div className="ticks"></div>
      //<section id="spacer"></section>
  //  </>
  //)
//}

//*export default App

// 

// import ProfileCard from "./components/ProfileCard";
// import users from "./data/users";

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-14 px-4">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//           User Profile Cards
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Meet the team members below
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {users.map((user) => (
//           <ProfileCard
//             key={user.id}
//             image={user.image}
//             name={user.name}
//             role={user.role}
//             email={user.email}
//             status={user.status}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import ProfileCard from "./components/ProfileCard";
import users from "./data/users";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-14 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          User Profile Cards
        </h1>
        <p className="text-gray-500 mt-2">
          Meet the team members below
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            image={user.image}
            name={user.name}
            role={user.role}
            email={user.email}
            status={user.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;