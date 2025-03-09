import { Box } from "@mui/material";
import React from "react";

export default function Skills({handleChange}) {

    React.useEffect(() => {
        handleChange('', "skills");
    }, []);

    return (
        <Box>
            Skills
        </Box>
    );
}