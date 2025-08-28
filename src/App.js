import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// Styles
import "./App.css";

// Components
import MainRouter from "./Router/MainRouter";

function App() {
    const themeWeb = useTheme();
    const isMobile = useMediaQuery(themeWeb.breakpoints.down('md'));

	// const [theme, setTheme] = React.useState(!localStorage.getItem('theme') ? 'dark' : localStorage.getItem('theme'));
	const [theme, setTheme] = React.useState('dark');

	React.useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = (value) => {
		setTheme(value);
	};

  	return (
    	<main>
			<MainRouter
				theme={theme}
				toggleTheme={toggleTheme}
				isMobile={isMobile}
			/>
		</main>
  	);
}

export default App;
