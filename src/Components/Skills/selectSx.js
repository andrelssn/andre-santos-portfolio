
export const styleSx = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#fff', // Cor da borda
        },
        '&:hover fieldset': {
            borderColor: '#fff', // Cor ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff', // Cor ao focar
            textShadow: " 0 0 3px #ffffff, 0 0 1px #ffffff"
        },
        "& .MuiSvgIcon-root": {
            color: "#fff"
        },
    }
};

export const props = {
    input: {
        style: {
            color: "#fff",
            borderColor: "#fff"
        }
    },
    inputLabel: {
        style: {
            color: "#fff",
            fontWeight: "bold"
        }
    },
    select: {
        MenuProps: {
            sx: {
                '& .MuiPaper-root': {
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '8px',
                },
                '& .MuiMenuItem-root': {
                    '&:hover': {
                        backgroundColor: '#555',
                    },
                },
            },
        }
    }
};