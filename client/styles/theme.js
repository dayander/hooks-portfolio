import {createMuiTheme} from "@material-ui/core/styles/index";

export const theme = createMuiTheme({
    typography:{
        fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    },
    overrides:{
        MuiAppBar:{
            root:{
                backgroundColor: '#000'
            }
        },

    }
});