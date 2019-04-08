import React from  'react';

const SearchBox=({searchChange})=>{
return(
<div className='pa3'>
<input 
type='search'
placeholder='Search robots'
className='pa3 b---green bg-lightest-blue'
onChange={searchChange}
/>	
</div>
	);

}
export default SearchBox;