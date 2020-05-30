import React from 'react';//React must br when we usnig JSX


const Card = ({id,name,email}) => {
	//const {id,name,email} = props;//we can do it in the parameter
	return(//we return just one thing ===> div just one div contains all we need
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;
/*
tc : text center 
bg-light-green font-style
dib :  
br3 : border
pa3 : padding 
ma2 : margin
grow : for annimation
bw2 shadow-5 : add shadow 
*/
