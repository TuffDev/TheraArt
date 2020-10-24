import {createMuiTheme} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121',
            contrastText: '#fff'
        },
        secondary: {
            main: '#f44336',
        },
        background: {
            default: '#F5F5F6',
        }
    },
    typography: {
        button: {
            fontSize: 18, // works
            textTransform: 'none'
        }
    },
    // overrides: {
    //     MuiButton: {
    //         text: {
    //             textTransform: 'none'
    //         }
    //     }
    // },
});