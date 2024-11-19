import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import './index.scss';
import App from './App';

const SettingsPage = () => {
    return <div>Placeholder for settings page</div>;
};

domReady( () => {
    const root = createRoot(
        document.getElementById( 'tools-analytic-dashboard' )
    );

    root.render( <App /> );
} );