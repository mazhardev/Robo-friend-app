import React , {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import './App.css';
import Scroll from '../components/scroll';

 class App extends Component{
constructor(){
	super()
 this.state=
	    {
		Robots:[],
		searchField:''
		}
}

componentDidMount(){
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response=>response.json())
	.then( users=>this.setState({Robots:users}))
}
onSearchChange=(event)=>{
	this.setState({searchField:event.target.value});
	
	}
	render(){
	const	{Robots,searchField}=this.state;
		const filterRobots=Robots.filter((robot)=>{
		return (robot.name.toLowerCase().includes(searchField.toLowerCase()));})
return !Robots.length ?
		(<h1 className="tc">Loading</h1>):
		(
		<div className="tc">
		<h1 className="f1">ROBO FRIEND</h1>
		<SearchBox searchChange={this.onSearchChange}/>
	    <Scroll>
		<CardList robots={filterRobots} />
		</Scroll>
		</div>	
	   ); 		
}			

}


 export default App;