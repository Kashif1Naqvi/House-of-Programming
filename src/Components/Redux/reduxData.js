

export const reduxData = {
    redux:[
        {
            
            url:"https://cdn-images-1.medium.com/max/800/1*4K9z2UW0LJlrLoRCrKagPg.png",
            title:"Why use Redux?            ",
            description:"As you already know, questions like “Why should you use A over B?” boil down to your personal preferences.I have built apps in production that don’t use Redux. I’m sure that many have done the same.For me, I was worried about introducing an extra layer of complexity for my team members. In case you’re wondering, I don’t regret the decision at all.Redux’s author, Dan Abamov, also warns about the danger of introducing Redux too early into your application. You may not like Redux, and that is fair enough. I have friends who don’t.That being said, there are still some very decent reasons to learn Redux.For example, in larger apps with a lot of moving pieces, state management becomes a huge concern. Redux ticks that off quite well without performance concerns or trading off testability.One other reason a lot of developers love Redux is the developer experience that comes with it. A lot of other tools have begun to do similar things, but big credits to Redux.Some of the nice things you get with using Redux include logging, hot reloading, time travel, universal apps, record and replay — all without doing so much on your end as the developer. These things will likely sound fancy until you use them and see for yourself.Dan’s talk called Hot Reloading with Time Travel will give you a good sense of how these work.Also, Mark Ericsson, one of Redux’s maintainers, says that over 60% of React apps in production use Redux. That’s a lot!Consequently, and this is just my thought, a lot of engineers like to show potential employers that they can maintain larger production codebases built in React and Redux, so they learn Redux.If you want some more reasons to use Redux, Dan, the Redux creator, has a few more reasons highlighted in his article on Medium.If you don’t consider yourself a senior engineer, I advise you to learn Redux — largely because of some of the principles it teaches. You’ll learn new ways of doing common things, and this will likely make you a better engineer.",
            chapter2:[
             
                {
                    title:"Your First Redux Application",
                    description:"We learn by example and by direct experience because there are real limits to the adequacy of verbal instruction.Malcom Gladwell Even though I have spent ample time explaining the Redux principles in a way you won’t forget, verbal instructions have their limits.                    To deepen your understanding of the principles, I’ll show you an example. Your first Redux application, if you want to call it that.My approach to teaching is to introduce examples of increasing difficulty. So, for starters, this example is focused on refactoring a simple pure React app to use Redux.The aim here is to understand how to introduce Redux in a simple React project, and deepen your understanding of the fundamental Redux concepts too.Ready?Below is the trivial “Hello World” React app we will be working with.",
                    code:"Hello world",
                },
                {
                    title:"The Structure of the React Hello World Application                    ",
                    description:"The React app we’ll be working with has been bootstrapped with create-react-app. Thus, the structure of the app is one you’re already used to.You may grab the repo from Github if you want to follow along — which I recommend.There’s an index.js entry file that renders an <App /> component to the DOM.The main App component is comprised of a certain <HelloWorld /> component.This <HelloWorld /> component takes in a tech prop, and this prop is responsible for the particular technology displayed to the user.For example, <HelloWorld tech='React' /> will yield the following:",
                    code:"Hello world Redux" , 
                },
                {   
                    description:"Now, you get the gist.Here’s what the App component looks like:src/App.js",
                    code:"import React, { Component } from 'react';import HelloWorld from '.HelloWorld ;class App extends Component { state = {   tech : 'React'} render() {  return <HelloWorld tech={this.state.tech}/>}}export default App;",
                    
                },
                {
                    description:"Have a good look at the state object.There’s just one field, tech, in the state object and it is passed down as prop into the HelloWorld component as shown below:",
                    code:"<HelloWorld tech={this.state.tech}/>                    "
                },
                {
                    description:"Don’t worry about the implementation of the HelloWorld component — yet. It just takes in a tech prop and applies some fancy CSS. That’s all.Since this is focused mainly on Redux, I’ll skip the details of the styling.So, here’s the challenge.How do we refactor our App to use Redux ?How do we take away the state object and have it entirely managed by Redux? Remember that Redux is the state manager for your app.Let’s begin to answer these questions in the next section.Revisiting your Knowledge of Redux Remember the quote from the official docs ?Redux is a predictable state container for JavaScript apps.One key phrase in the above sentence is state container.Technically, you want the state of your application to be managed by Redux.This is what makes Redux a state container.Your React component state still exists. Redux doesn’t take it away.However, Redux will efficiently manage your overall application state. Like a bank vault, it’s got a store to do that.For the simple <App/> component we’ve got here, the state object is simple.Here it is:",
                    code:"{ tech: 'React'}                    "
                },
                {
                    description:"We need to take this out of the <App /> component state, and have it managed by Redux.From my earlier explanation, you should remember the analogy between the Bank Vault and the Redux Store. The Bank Vault keeps money, the Redux store keeps the application state object.So, what is the first step to refactoring the <App /> component to use Redux?Yeah, you got that right.Remove the component state from within <App />.The Redux store will be responsible for managing the App’s state. With that being said, we need to remove the current state object from App/&gt;.",
                    code:"import React, { Component } from 'react';import HelloWorld from './HelloWorld';class App extends Component { // the state object has been removed. render() {  return <HelloWorld tech={this.state.tech}/>}}export default App;"
                },
                {
                    description:"The solution above is incomplete, but right now, <App/> has no state.Please install Redux by running yarn add redux from the command line interface (CLI). We need the redux package to do anything right.Creating a Redux Store If the <App /> won’t manage it’s state, then we have to create a Redux Store to manage our application state.For a Bank Vault, a couple mechanical engineers were probably hired to create a secure money-keeping facility.To create a manageable state-keeping facility for our application, we don’t need mechanical engineers. We’ll do so programmatically using some of the APIs Redux avails to us.Here’s what the code to create a Redux store looks like:",
                    code:"import { createStore } from 'redux'; //an import from the redux libraryconst store = createStore();  // an incomplete solution - for now.                    "
                },
            ],
            basic:[
                {
                    title:"How Redux works!",
                    description:"Redux is state management that is use to manage the states.You can use data any where from child to parent or parent to child"
                },
                {
                    title:"Action",
                    description:"Action is use to handle diffrent type of actions.in action we can fetch api or add diffrent business logics",
                },
                {
                    title:"Reducer",
                    description:"Reducer is like a pure function out and input is same,just use to update the state"
                },
                {
                    title:"Store",
                    description:"store is simple object that is use to manage the state transfor state from reducers to react componennts. "
                },
                {
                    title:"mapStateToProps",
                    description:"this is use to mange the states map the states from props "
                },
                {
                    title:"provider",
                    description:"provider is use to mange the defination between React and redux use connect for connecting react redux"
                }
            ]
        },
        {
            
            title:"What is Redux?            ",
            url:"https://cdn-images-1.medium.com/max/800/1*1dMEMg7Z1a7PIU4YWA7JXw.png",
            description:"What is Redux? As seen on the Redux Documentation The official documentation for Redux reads:Redux is a predictable state container for JavaScript apps.Those 9 words felt like 90 incomplete phrases when I first read them. I just didn’t get it. You most likely don’t, either.Don’t sweat it. I’ll go over that in a bit, and as you use Redux more, that sentence will get clearer.On the bright side, if you read the documentation a little longer, you’ll find the more explanatory stuff somewhere in there.It reads:It helps you write applications that behave consistently…You see that?In lay-man’s terms, that’s saying, “it helps you tame the beast”. Metaphorically.Redux takes away some of the hassles faced with state management in large applications. It provides you with a great developer experience, and makes sure that the testability of your app isn’t sacrificed for any of those.As you develop React applications, you may find that keeping all your state in a top-level component is no longer sufficient for you.You may also have a lot of data changing in your application over time.Redux helps solve these kinds of problems. Mind you, it isn’t the only solution out there.",
            chapter2:[
             
                {
                    title:"Your First Redux Application",
                    description:"We learn by example and by direct experience because there are real limits to the adequacy of verbal instruction.Malcom Gladwell Even though I have spent ample time explaining the Redux principles in a way you won’t forget, verbal instructions have their limits.                    To deepen your understanding of the principles, I’ll show you an example. Your first Redux application, if you want to call it that.My approach to teaching is to introduce examples of increasing difficulty. So, for starters, this example is focused on refactoring a simple pure React app to use Redux.The aim here is to understand how to introduce Redux in a simple React project, and deepen your understanding of the fundamental Redux concepts too.Ready?Below is the trivial “Hello World” React app we will be working with.",
                    code:"Hello world",
                },
                {
                    title:"The Structure of the React Hello World Application                    ",
                    description:"The React app we’ll be working with has been bootstrapped with create-react-app. Thus, the structure of the app is one you’re already used to.You may grab the repo from Github if you want to follow along — which I recommend.There’s an index.js entry file that renders an <App /> component to the DOM.The main App component is comprised of a certain <HelloWorld /> component.This <HelloWorld /> component takes in a tech prop, and this prop is responsible for the particular technology displayed to the user.For example, <HelloWorld tech='React' /> will yield the following:",
                    code:"Hello world Redux" , 
                },
                {   
                    description:"Now, you get the gist.Here’s what the App component looks like:src/App.js",
                    code:"import React, { Component } from 'react';import HelloWorld from '.HelloWorld ;class App extends Component { state = {   tech : 'React'} render() {  return <HelloWorld tech={this.state.tech}/>}}export default App;",
                    
                },
                {
                    description:"Have a good look at the state object.There’s just one field, tech, in the state object and it is passed down as prop into the HelloWorld component as shown below:",
                    code:"<HelloWorld tech={this.state.tech}/>                    "
                },
                {
                    description:"Don’t worry about the implementation of the HelloWorld component — yet. It just takes in a tech prop and applies some fancy CSS. That’s all.Since this is focused mainly on Redux, I’ll skip the details of the styling.So, here’s the challenge.How do we refactor our App to use Redux ?How do we take away the state object and have it entirely managed by Redux? Remember that Redux is the state manager for your app.Let’s begin to answer these questions in the next section.Revisiting your Knowledge of Redux Remember the quote from the official docs ?Redux is a predictable state container for JavaScript apps.One key phrase in the above sentence is state container.Technically, you want the state of your application to be managed by Redux.This is what makes Redux a state container.Your React component state still exists. Redux doesn’t take it away.However, Redux will efficiently manage your overall application state. Like a bank vault, it’s got a store to do that.For the simple <App/> component we’ve got here, the state object is simple.Here it is:",
                    code:"{ tech: 'React'}                    "
                },
                {
                    description:"We need to take this out of the <App /> component state, and have it managed by Redux.From my earlier explanation, you should remember the analogy between the Bank Vault and the Redux Store. The Bank Vault keeps money, the Redux store keeps the application state object.So, what is the first step to refactoring the <App /> component to use Redux?Yeah, you got that right.Remove the component state from within <App />.The Redux store will be responsible for managing the App’s state. With that being said, we need to remove the current state object from App/&gt;.",
                    code:"import React, { Component } from 'react';import HelloWorld from './HelloWorld';class App extends Component { // the state object has been removed. render() {  return <HelloWorld tech={this.state.tech}/>}}export default App;"
                },
                {
                    description:"The solution above is incomplete, but right now, <App/> has no state.Please install Redux by running yarn add redux from the command line interface (CLI). We need the redux package to do anything right.Creating a Redux Store If the <App /> won’t manage it’s state, then we have to create a Redux Store to manage our application state.For a Bank Vault, a couple mechanical engineers were probably hired to create a secure money-keeping facility.To create a manageable state-keeping facility for our application, we don’t need mechanical engineers. We’ll do so programmatically using some of the APIs Redux avails to us.Here’s what the code to create a Redux store looks like:",
                    code:"import { createStore } from 'redux'; //an import from the redux libraryconst store = createStore();  // an incomplete solution - for now.                    "
                },
            ],
            basic:[
                {
                    title:"How Redux works!",
                    description:"Redux is state management that is use to manage the states.You can use data any where from child to parent or parent to child"
                },
                {
                    title:"Action",
                    description:"Action is use to handle diffrent type of actions.in action we can fetch api or add diffrent business logics",
                },
                {
                    title:"Reducer",
                    description:"Reducer is like a pure function out and input is same,just use to update the state"
                },
                {
                    title:"Store",
                    description:"store is simple object that is use to manage the state transfor state from reducers to react componennts. "
                },
                {
                    title:"mapStateToProps",
                    description:"this is use to mange the states map the states from props "
                },
                {
                    title:"provider",
                    description:"provider is use to mange the defination between React and redux use connect for connecting react redux"
                }
            ]
        },
        {
            
            title:"Getting to know Redux            ",
            url:"https://cdn-images-1.medium.com/max/800/1*8cpJBanzu5koQqzkBirvsQ.png",
            description:"Some years back, developing front-end applications seemed like a joke to many. These days, the increasing complexity of building decent front-end applications is almost overwhelming.It seems that to meet the pressing requirements of the ever-demanding user, the gentle cute cat has overgrown the confines of a home. It’s become a fearless lion with 3-inch claws and a mouth that opens wide enough to fit a human head.Yeah, that’s what modern front-end development feels like these days.Modern frameworks like Angular, React and Vue have done a great job at taming this “beast”. Likewise, modern philosophies such as those enforced by Redux also exist to give this “beast” a chill pill.Follow along as we have a look at these philosophies.",
            chapter2:[
             
                {
                    title:"Your First Redux Application",
                    description:"We learn by example and by direct experience because there are real limits to the adequacy of verbal instruction.Malcom Gladwell Even though I have spent ample time explaining the Redux principles in a way you won’t forget, verbal instructions have their limits.                    To deepen your understanding of the principles, I’ll show you an example. Your first Redux application, if you want to call it that.My approach to teaching is to introduce examples of increasing difficulty. So, for starters, this example is focused on refactoring a simple pure React app to use Redux.The aim here is to understand how to introduce Redux in a simple React project, and deepen your understanding of the fundamental Redux concepts too.Ready?Below is the trivial “Hello World” React app we will be working with.",
                    code:"Hello world",
                },
                {
                    title:"The Structure of the React Hello World Application                    ",
                    description:"The React app we’ll be working with has been bootstrapped with create-react-app. Thus, the structure of the app is one you’re already used to.You may grab the repo from Github if you want to follow along — which I recommend.There’s an index.js entry file that renders an <App /> component to the DOM.The main App component is comprised of a certain <HelloWorld /> component.This <HelloWorld /> component takes in a tech prop, and this prop is responsible for the particular technology displayed to the user.For example, <HelloWorld tech='React' /> will yield the following:",
                    code:"Hello world Redux" , 
                },
                {   
                    description:"Now, you get the gist.Here’s what the App component looks like:src/App.js",
                    code:"import React, { Component } from 'react';import HelloWorld from '.HelloWorld ;class App extends Component { state = {   tech : 'React'} render() {  return <HelloWorld tech={this.state.tech}/>}}export default App;",
                    
                },
                {
                    description:"Have a good look at the state object.There’s just one field, tech, in the state object and it is passed down as prop into the HelloWorld component as shown below:",
                    code:"<HelloWorld tech={this.state.tech}/>                    "
                },
                {
                    description:"Don’t worry about the implementation of the HelloWorld component — yet. It just takes in a tech prop and applies some fancy CSS. That’s all.Since this is focused mainly on Redux, I’ll skip the details of the styling.So, here’s the challenge.How do we refactor our App to use Redux ?How do we take away the state object and have it entirely managed by Redux? Remember that Redux is the state manager for your app.Let’s begin to answer these questions in the next section.Revisiting your Knowledge of Redux Remember the quote from the official docs ?Redux is a predictable state container for JavaScript apps.One key phrase in the above sentence is state container.Technically, you want the state of your application to be managed by Redux.This is what makes Redux a state container.Your React component state still exists. Redux doesn’t take it away.However, Redux will efficiently manage your overall application state. Like a bank vault, it’s got a store to do that.For the simple <App/> component we’ve got here, the state object is simple.Here it is:",
                    code:"{ tech: 'React'}                    "
                },
                {
                    description:"We need to take this out of the <App /> component state, and have it managed by Redux.From my earlier explanation, you should remember the analogy between the Bank Vault and the Redux Store. The Bank Vault keeps money, the Redux store keeps the application state object.So, what is the first step to refactoring the <App /> component to use Redux?Yeah, you got that right.Remove the component state from within <App />.The Redux store will be responsible for managing the App’s state. With that being said, we need to remove the current state object from App/&gt;.",
                    code:"import React, { Component } from 'react';import HelloWorld from './HelloWorld';class App extends Component { // the state object has been removed. render() {  return <HelloWorld tech={this.state.tech}/>}}export default App;"
                },
                {
                    description:"The solution above is incomplete, but right now, <App/> has no state.Please install Redux by running yarn add redux from the command line interface (CLI). We need the redux package to do anything right.Creating a Redux Store If the <App /> won’t manage it’s state, then we have to create a Redux Store to manage our application state.For a Bank Vault, a couple mechanical engineers were probably hired to create a secure money-keeping facility.To create a manageable state-keeping facility for our application, we don’t need mechanical engineers. We’ll do so programmatically using some of the APIs Redux avails to us.Here’s what the code to create a Redux store looks like:",
                    code:"import { createStore } from 'redux'; //an import from the redux libraryconst store = createStore();  // an incomplete solution - for now.                    "
                },
            ],
            basic:[
                {
                    title:"How Redux works!",
                    description:"Redux is state management that is use to manage the states.You can use data any where from child to parent or parent to child"
                },
                {
                    title:"Action",
                    description:"Action is use to handle diffrent type of actions.in action we can fetch api or add diffrent business logics",
                },
                {
                    title:"Reducer",
                    description:"Reducer is like a pure function out and input is same,just use to update the state"
                },
                {
                    title:"Store",
                    description:"store is simple object that is use to manage the state transfor state from reducers to react componennts. "
                },
                {
                    title:"mapStateToProps",
                    description:"this is use to mange the states map the states from props "
                },
                {
                    title:"provider",
                    description:"provider is use to mange the defination between React and redux use connect for connecting react redux"
                }
            ]
        },
    ]
}