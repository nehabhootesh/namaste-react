const heading = React.createElement(
    "h1",
    { id: 'heading' },
    "Hello World from React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
/* <div id="parent">
    <div id="child">
        <h1>Hello from h1</h1>
    </div>
</div> */
// const parent=React.createElement(
//     "div",
//     {
//         id:'parent',
//     },
//     React.createElement("div",{id: 'child'},React.createElement("h1",{},"H1 tag"))
// );
/* <div id="parent">
    <div id="child">
        <h1>Hello from h1</h1>
        <h2>h2tag</h2>
    </div>
</div> */

// const parent=React.createElement(
//     "div",
//     {
//         id:'parent',
//     },
//     React.createElement("div",{id: 'child'},[React.createElement("h1",{},"H1 tag"),React.createElement("h2",{},"H2 tag")])
// );

/* <div id="parent">
    <div id="child1">
        <h1>Hello from h1</h1>
        <h2>h2tag</h2>
    </div>
        <div id="child2">
        <h1>Hello from h1</h1>
        <h2>h2tag</h2>
    </div>
</div> */
const parent = React.createElement(
    "div",
    {
        id: 'parent',
    },
    [React.createElement("div", { id: 'child1' }, 
        [React.createElement("h1", {}, "H1 tag"), 
        React.createElement("h2", {}, "H2 tag")]), 
    React.createElement("div", { id: 'child2' },
        [React.createElement("h1", {}, "H1 tag"), 
        React.createElement("h2", {}, "H2 tag")])
    ]
);
// console.log(heading);
root.render(parent);