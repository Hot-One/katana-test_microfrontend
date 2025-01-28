import { configure } from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom/client';

setTimeout(() =>
	configure({
		enforceActions: 'never',
		reactionScheduler: (f) => setTimeout(f),
	})
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div>shit</div>
	</React.StrictMode>
);
