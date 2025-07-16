
export const styleSx = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: "var(--text)", // Cor da borda
        },
        '&:hover fieldset': {
            borderColor: "var(--text)", // Cor ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            borderColor: "var(--text)", // Cor ao focar
            textShadow: " 0 0 3px #ffffff, 0 0 1px #ffffff"
        },
        "& .MuiSvgIcon-root": {
            color: "var(--text)"
        },
    }
};

export const props = {
    input: {
        style: {
            color: "var(--text)",
            borderColor: "var(--text)"
        }
    },
    inputLabel: {
        style: {
            color: "var(--text)",
            fontWeight: "bold"
        }
    },
    select: {
        MenuProps: {
            sx: {
                '& .MuiPaper-root': {
                    backgroundColor: "var(--background)",
                    color: "var(--text)",
                    borderRadius: '8px',
                },
                '& .MuiMenuItem-root': {
                    '&:hover': {
                        backgroundColor: "var(--background)",
                    },
                },
            },
        }
    }
};