import React from 'react';

const Scroll = (props) => {
	return(
			<div style={{overflowY : 'scroll',border:'3px solid black',height:'800px'}}>
				{props.children}
			</div>
		);
}

export default Scroll;

/*
- Scroll its a wrap component : render what inside of him
- Scroll can use children as a way to render its children ==> props.children
- we can use this props.children we can create component that wrap other Components  
*/