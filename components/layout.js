import React from 'react';
import HeaderComponent from './partials/header';
import FooterComponent from './partials/footer';

const LayoutComponent = ({children}) => {
	return (
		<>
			<HeaderComponent/>
			<main className="container">
				{children}
			</main>
			<FooterComponent/>
		</>
	)
}
export default React.memo(LayoutComponent);