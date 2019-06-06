
    export const reactJson = [
        {
            hello_world:[
                {
                    title:"Hello World",
                    description:"The smallest React example looks like this: It displays a heading saying “Hello, world!” on the page.                    ",
                    code:"ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'));",
                },
                {
                    title:"How to Read This Guide",
                    description:"In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.Tip This guide is designed for people who prefer learning concepts step by step. If you prefer to learn by doing, check out our practical tutorial. You might find this guide and the tutorial complementary to each other.This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.Every chapter in this guide builds on the knowledge introduced in earlier chapters. You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar. For example, “Introducing JSX” is the next chapter after this one.",
                    code:"code is art,so Reactjs is a UI designing art :)"
                },
                {
                    title:"Knowledge Level Assumptions",
                    description:"React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. If you don’t feel very confident, we recommend going through a JavaScript tutorial to check your knowledge level and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.'Note This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years, these three points should get you most of the way.'",
                    code:""
                }
            ],
            Introducing_JSX:[
                {                    description:"Consider this variable declaration above: This funny tag syntax is neither a string nor HTML.It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.",

                    title:"Introducing JSX",
                    code:"const element = <h1>Hello, world!</h1>;                    ",
                },
                {
                    title:"Why JSX?",
                    code:"Question Raise in mind",
                    description:"React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.With that out of the way, let’s get started!",
                },
                {
                    title:"Embedding Expressions in JSX",
                    code:"const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;ReactDOM.render(element,document.getElementById('root'));",
                    description:"You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.In the example below, we embed the result of calling a JavaScript function, formatName(user), into an <h1> element.",
                    
                },
                {
                    title:"JSX is an Expression Too                    ",
                    code:"function getGreeting(user) { if (user) {return <h1>Hello, {formatName(user)}!</h1>;}return <h1>Hello, Stranger.</h1>;}",
                    description:"After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:",
                },
            ],
            Rendering_Elements:[
                {   title:"Rendering_Elements",
                    
                    description:"React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.                    "
                },{
                    title:"Updating the Rendered Element                    ",
                    description:"React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render()."
                },
            ],
            Components_Props:[
                {   
                    title:"Components and Props                    ",
                    description:"Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."
                },
                {
                    title:"WHY I HATE REACT WHEN I CANNOT UNDERSTAND I TELL YOU ABOUT MY STORY                    ",
                    description:"My name is syed kashif ali naqvi ,i am telling you every thing in React in very easy way.firstly i telling you my story how i learn React,i’m sure you have not problem like me.when i am firstly learn React ask from my teacher sir #Murtza .i Ask a question from my Teacher Sir in React what is important why we use built some interest in me for learning React more efficient way,then he tell me son ReactjS is use for making Web Apps i ask him what do you mean by web Apps exactly my teacher sir syed murtza can say son web App is very simple we use for making Dynamic Application and tell me also we use Web App using web browser Technologies over the internet.so i understand web app then i start learning in react my teacher can say you learn son props but i understand pros so i research on it so much different work i think in react,when i am going to home than i tell him about React pros but he should say you learn React,It a problem for me,so when i m start to learning props i cannot understand it properly then i learn in very basics so i think that JavaScript Dom use in it,but problem is in every time when i give the value of any variable every time change the situation so DOM is problem in it so when i am learn In react use Virtual Dom I’m so happy because in DOM every work i can do every time variable change but react friend virtual Dom solve the problem ,Virtual Dom is not the part of react but react use it,Hence virtual Dom increase the speed of web page rendering."
                },{
                    title:"Components and other things in React",
                    description:"So i start learning firstly i have many problem to understand the concept in react props i am work practically on code academy my teacher can say you use create-react-app But i cannot understand about create-react-app i have a problem i cannot ask any question from my teacher many time because i think that my teacher disturb i i ask question so i research more and not ask many of question when i think i am not solve this problem in then i say to my teacher you give me the solution of that problem then he tell me.so i am start my journey in React learning.Firstly i see the concept of component then i start learning on component.i understand in component is simply the JavaScript classes or function that accepts inputs in the form of properties(props) and display on the screen as UI(User interface) when i think i learn theoretically but a question raise in my mind how i work in practically so i briefly learn about react component then understand the logic.It simple like JavaScript function or classes.After Reading this i can understand the component is chunks of code that are use many time in any webpage we use to transfer one component data into another.React is in simple words we use for building single page Applications.it’s so much simple in react if we click one link to another page is not refresh because in react we use routes for control the components.the other important concept in React is props that are use to send data from one component to another.props are the property of components.we send data from one component to another component using props.props is simply JavaScript function that accepts arbitrary inputs and return React Element describing what should appear on the screen….so props is very simple when i am learn first time props i face many problems but today i represent in front of you very easy way props you understand easily the concepts of props.enough theory so we go to practical how props work",
                },
            ],
            state:[
                {
                    title:"Why is State",
                    description:"state is use to change when user do response .State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule. "
                }
            ],
            think_React:[
                {
                    title:"Thinking in React                    ",
                    description:"React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.                    One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React."   
                },
                {
                    title: "Break The UI Into A Component Hierarchy",
                    description:"The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!.But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.Since you’re often displaying a JSON data model to a user, you’ll find that if your model was built correctly, your UI (and therefore your component structure) will map nicely. That’s because UI and data models tend to adhere to the same information architecture, which means the work of separating your UI into components is often trivial. Just break it up into components that represent exactly one piece of your data model."
                },
                {
                    title:"Build A Static Version in React",
                    description:"Now that you have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We’ll see why.To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with FilterableProductTable) or with the ones lower in it (ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have render() methods since this is a static version of your app. The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. If you make a change to your underlying data model and call ReactDOM.render() again, the UI will be updated. It’s easy to see how your UI is updated and where to make changes since there’s nothing complicated going on. React’s one-way data flow (also called one-way binding) keeps everything modular and fast."
                },
                {
                    title:"A Brief Interlude: Props vs State                    ",
                    description:"There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two; skim the official React docs if you aren’t sure what the difference is."
                },
                {
                    title:" Identify The Minimal (but complete) Representation Of UI State                    ",
                    description:"To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, just keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, simply take the length of the TODO items array.Think of all of the pieces of data in our example application. We have:The original list of products.The search text the user has entered.The value of the checkbox.The filtered list of productsLet’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:Is it passed in from a parent via props? If so, it probably isn’t state.Does it remain unchanged over time? If so, it probably isn’t state.Can you compute it based on any other state or props in your component? If so, it isn’t state.The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.",
                }
            ]
        },
    ]
