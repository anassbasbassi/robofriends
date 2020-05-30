import React,{ Component } from 'react';
import CardList from '../component/CardList';//the parent of Card it contains a list of card 
/*import { robots } from './robots';*///{ robots } because its export without default so it can export alot of thing => se we select what we want
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';//to make the searchBox fix and data still load when scrolling
import './App.css';
import ErrorBoundry from '../component/ErrorBoundry';//gestionne d'erreur

class App extends Component{
	constructor(){
		super();
		this.state = {
			//robots : robots,
			robots : [],
			searchfield:''
		}
		console.log('constructor','1');
	}
	componentDidMount(){
		//make HTTP request and fetch receive responce
		//fetch allows us to make request on server and return for us a list of users
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		}).then(users => {
			this.setState({robots: users});
		})
		console.log('componentDidMount','2');
	}

	onSearchChange = (event) => {//change it to arrow function to make this refers to App and not to input
		this.setState({searchfield : event.target.value});//give value in searchBox
	}
	render(){
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
		console.log('render','3');
		return !robots.length?//if we have a lot of users and we take a lot of time to get it from the servers 
			<h1>Loading</h1>:
			(
				<div className='tc'>
					<h1 className='f2'>RoboFriend</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>	
				</div>	
			)
		}
	}

export default App; 

/*
- to make our website responsive we need searchBox communicate with CardList and also CardList communicate with SearchBox 
- we have the perent is : App and he have two children : SearchBox and CardList 
- so to SearchBox communicate with CardList we must pass over the father(App) and Then communicate with CardList
- to do this React offer : 
	State : - its simply means the description of our app
			- is simply an object that describ my application 
			- able to change and affect our app
			- usuelly live in the parent component(passes "state" to deffrent component)
- and wich describ our application is the robot and the SearchBox  
- so we're able to change what in the searchBox and we able to change what robot means => what gets displayed
- props are simply things that come out of "state"
- so a parent feeds "state" into a child componenet and as soon as a child(component) component receive the "state" its property
that child can never change this property. the parent just tells it what the "state" is ad the child receives it as a "robots" 
- to use state we must work with class
- it triggers the event , the parents says "oh, run this funciuon" (onsearchChange()) now we have the value in searchBox we can
communicat directly with CardList 

<********************-the entire process: ***************************>
1)- we have our app component that has two states "robot" and "searchfield" and because App own the state any component 
has "state" uses the "class" syntax so they can use  "constructor" function to create "this.state" and this "state" is what
change in an app => it's whats describes the app
2)- the virtuel DOM is just an object that collect this entire state and React uses this state to render and pass them down
as props to these components
3)- these component are just pure functions can just render 
4)- always know that the app is going to look  the same because they are just pure function 
5)- the App can pass down things such as props, so we passed down "onSearchChange" to the searchBox 
6)- and the searchBox every time there is an "onChange" on the input it let the app konw,"hey, there was a change run this function"
7)- it run the function with the event and update the state of the "searchfield" to whatever we type 
8)- with the information we have from the searchBox we can now communicate to the CardList and tell it "filter the 
robots state and to now have only what include in the searchfield"
9)- and we passed filterRobots to CardList  

<******************************** make app realistic and get robots data from a server ***************************************>
- App.js has state : a piece of data tha describ our app
- and because they have state we call them : smart component (must have class syntax)
-state become : this.state = {
					robots : [],
					searchfield:''
				}==> i asked for users from somewhere over the internet
- React has also something call lifecycle method or lifecycle hooks its method come with react(like : constructor,render) because what 
they do is,if we run these ,it will automatically trigger when this app gets loaded on the web site
- Each component has several “lifecycle methods” that you can override to run code at particular times in the process.
	- Mounting : when we click refresh the app component get mounted in root element(document.getElemnetById('root'))
		- replace document containte by our containte
		- is the startup of the app 
		- its mount things in order :
			- constructor() : in React constructors are only used for two purposes:
				- Initializing local state by assigning an object to this.state.
				- Binding event handler methods to an instance.
			- static getDerivedStateFromProps() : is invoked right before calling the render method, both on the initial mount and on 
				subsequent updates. It should return an object to update the state, or null to update nothing.
			- render() : method is the only required method in a class component.
				- When called, it should examine this.props and this.state and return one of the following types:
					- React elements. Typically created via JSX. For example, <div />
					- Arrays and fragments. Let you return multiple elements from render. See the documentation on fragments.
					- Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
					- String and numbers. These are rendered as text nodes in the DOM.
					- Booleans or null. Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)
			- componentDidMount() : is invoked immediately after a component is mounted (inserted into the tree).
	- Updating : An update can be caused by changes to props or state. These methods are called in the following order when a component 
	is being re-rendered:
		- static getDerivedStateFromProps() :  is invoked right before calling the render method, both on the initial mount and on subsequent 
			updates. It should return an object to update the state, or null to update nothing.
		- shouldComponentUpdate() :to let React know if a component’s output is not affected by the current change in state or props. 
		- render()
		- getSnapshotBeforeUpdate() :  is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables 
			your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value 
			returned by this lifecycle will be passed as a parameter to componentDidUpdate().
		- componentDidUpdate() : is invoked immediately after updating occurs. This method is not called for the initial render.
	- Unmounting : This method is called when a component is being removed from the DOM:
		- componentWillUnmount() : is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in 
			this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created 
			in componentDidMount().
- these aare called "lifecycle hooks"  because they get run every time a component does something and it comes with react, so we can
put them in our class class componenet and they will automatically get trigerred(we don't have worry about calling them)

- As soon robots and searchfield changes React tickless down All this information as "props" to all these component and magically 
creates our view for us ==> that's why React so powerfull it's a view layer , it's take care of manipulating the DOM and all we tell 
it's "hey what the state" ==> it's a super app and these component are now reusable 

<****************** add errorboundry **************************************>
- import ErrorBoundry class
- get it before the CardList for reason that if something goes on with the CardList we want to have some sort of a graceful exit boundry
- so with this error boundry, if anything in the CardList fails it's going to catch it and display our error msg 




*/
