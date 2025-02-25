export const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "var(--red-system)",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "#ffffff",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "var(--red-system-light)",
        },
        "&.Mui-selected": {
            color: "var(--red-system)",
            fontWeight: "bold"
        },
    },
};
