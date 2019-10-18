import {createMuiTheme} from "@material-ui/core/styles/index";

export const theme = createMuiTheme({
    typography:{
        fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    },
  MuiAppBar:{
    colorPrimary:{
      backgroundColor: '#000'
    }
  },
    overrides:{
        MuiAppBar:{
            root:{
                backgroundColor: '#000'
            }
        },

    }
});