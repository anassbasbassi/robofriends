import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {//its pure function receive something and return something
	return(
	  	<div>
	  		{
	  			robots.map((user,i) =>{
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
	  		};
	    </div>
	);
}
export default CardList;


/*
we this we return everytime div div so in total project we have a lot of div but we can return multiple element without div with
import React, { Fragment } from "react";
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </Fragment>
  )
*/

/*
- when we doing a loop like map we must give it a unique key because if one of cards was deleted react will not know any element 
will delete and will change the entire DOM , so if it has a key prop React will remove easy element with key 
- so when we doing a loop we have to give it a unique key
*/