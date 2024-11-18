import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

const SettingsPage = () => {
    return <div>Placeholder for settings page</div>;
};

domReady( () => {
    const root = createRoot(
        document.getElementById( 'tools-analytic-dashboard' )
    );

    root.render( <SettingsPage /> );
} );