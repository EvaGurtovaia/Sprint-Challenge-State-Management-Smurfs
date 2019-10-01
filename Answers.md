1. What problem does the context API help solve?

React Context is a way for a child component to access a value in a parent component. One familiar problem in React is what is popularly known as prop drilling. Prop drilling occurs in situations where you’re looking to get the state from the top of your react tree to the bottom and you end up passing props through components that do not necessarily need them. React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.

This is where the new React Context API comes in.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store: store holds the whole state tree of our application. The only way to change the state inside it is to dispatch an action on it. A store is not a class. It's just an object with a few methods on it.

reducers: reducers specify how the application's state changes in response to actions sent to the store. Actions only describe what happened, but don't describe how the application's state changes.

actions: actions are payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using store.dispatch(). Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Not Redux, for sure).
