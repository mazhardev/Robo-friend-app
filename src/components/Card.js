import React from 'react';

const Card=({id, name, email})=>{
	return(
<div className="tc bg-light-green br3 b2 dib pa3 ma2 grow shadow-5">
<img alt='' src={`https://robohash.org/${id}?200*200"`} />
	<h2>{name}</h2>
	<p>{email}</p>
</div>
		)
}
export default Card;