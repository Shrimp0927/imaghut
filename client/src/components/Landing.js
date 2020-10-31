import React from 'react';

const Landing = (props) => {
	return (
		<div>
            <button style={{ margin: '0', position: 'absolute', top: '50%', left: '45%' }}>
                <a
                href="/auth/google" 
                style={{textDecoration: 'none', color: 'black'}}>Login with Google</a>
            </button>
		</div>
	);
};

export default Landing;
