import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import SignIn from './SignIn.jsx';
import EditPage from './EditPage.jsx';
import LandingPage from './LandingPage.jsx';
import ShoppingCart from './ShoppingCart.jsx';

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
                path: '/Varukorg',
                element: <ShoppingCart />
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