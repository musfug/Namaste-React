// const heading=React.createElement("h1",
//          {id : "heading"},
//         "Hello World from React!");
//         const root= ReactDOM.createRoot(document.getElementById("root"));



// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",
//     {id:"child"},
//    [React.createElement("h1",{},
//     "I am an h1 tag"), React.createElement("h2",{},
//     "I am an h2 tag")]
//     )
// );



const parent=React.createElement(
        "div",
      {id:"parent"},
      [
      React.createElement("div",
      {id:"child1"},
      [React.createElement("h1",{},
        "I am an child1  h1 tag"), React.createElement("h2",{},
       "I am an child1 h2 tag")]
      ),React.createElement("div",
      {id:"child2"},
      [React.createElement("h1",{},
        "I am an child2 h1 tag"), React.createElement("h2",{},
       "I am an child2 h2 tag")]
      )]
     );
const root= ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
        root.render(parent);