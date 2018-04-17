import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3 center'>
				{`${name}, your current entry count is...`}
			</div>
			<div className='white f1 center gold'>
				{entries}
			</div>
		</div>
	)
}

export default Rank;