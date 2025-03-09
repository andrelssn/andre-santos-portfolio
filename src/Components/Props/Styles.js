export const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "#ffffff",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "#cecece",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "#ffffff",
        },
        "&.Mui-selected": {
            color: "#ffffff",
            fontWeight: "bold",
            textShadow: " 0 0 3px #ffffff, 0 0 1px #ffffff"
        },
    },
};
