import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import SignIn from './SignIn.jsx';
import EditPage from './EditPage.jsx';
import LandingPage from './LandingPage.jsx';
import ProductPage from './ProductPage.jsx';

const router = createHashRouter([
	{
		
		path: "/",

		element: <Root />,

		children: [
			{
                path: '/',
                element: <LandingPage />
            },
			{
                path: '/valprodukt',
                element: <ProductPage />
            },
			{
                path: '/LoggaIn',
                element: <SignIn />
            },

			{
				path: '/Edit',
				element: <EditPage />
			}

			
			
		]
	},
	
]);

export { router }