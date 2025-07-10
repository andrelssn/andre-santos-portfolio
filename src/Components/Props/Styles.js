export const tabSx = {
    "& .MuiTabs-indicator": {
        backgroundColor: "var(--secondary)",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
        color: "var(--text)",
        fontWeight: "bold",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "var(--secondary)",
        },
        "&.Mui-selected": {
            color: "var(--secondary)",
            fontWeight: "bold",
        },
    },
    width: "100% !important",
    '& .MuiTabs-flexContainer': {
        flexWrap: 'nowrap'
    },
    '& .MuiTabs-scrollButtons': {
        color: 'var(--text)',
    },
    '& .Mui-disabled': {
        opacity: 0.3
    },
};
