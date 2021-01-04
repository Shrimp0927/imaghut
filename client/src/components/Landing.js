import React from 'react';

const Landing = (props) => {
	return (
		<div>
            <h1 style={{ margin: '0', position: 'absolute', top: '35%', left: '28%' }}>
                Welcome to Imaghut!
            </h1>
            <h4 style={{ margin: '0', position: 'absolute', top: '50%', left: '47%' }}>
                Share photos for free!
            </h4>
            <button style={{
                margin: '0', 
                position: 'absolute', 
                top: '60%', 
                left: '61%' }}>
                <a style={{color:'black'}} href="/auth/google">Login with google</a>
            </button>
		</div>
	);
};

export default Landing;
