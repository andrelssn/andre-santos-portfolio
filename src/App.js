import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// Styles
import "./App.css";

// Components
import MainRouter from "./Router/MainRouter";

function App() {
    const themeWeb = useTheme();
    const isMobile = useMediaQuery(themeWeb.breakpoints.down('md'));

	const [theme, setTheme] = React.useState(!localStorage.getItem('theme') ? 'dark' : localStorage.getItem('theme'));

	React.useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = (value) => {
		setTheme(value);
	};

  	return (
    	<body>
			<div class="container">
				<MainRouter
					theme={theme}
					toggleTheme={toggleTheme}
					isMobile={isMobile}
				/>
			</div>
		</body>
  	);
}

export default App;
