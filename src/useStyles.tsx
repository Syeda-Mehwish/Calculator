import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles: any = makeStyles<Theme>((theme) =>
  createStyles({
    appContainer: {
      width: "100%",
      maxWidth: "inherit",
      marginBottom: "10rem",
    },
    calculatorBox: {
      width: "fit-content",
      margin: "auto",
    },
    displayField: {
      color: "#000",
      backgroundColor: "#f3e5f5",
      fontWeight: "bold",
      height: "5rem",
      textAlign: "right",
      fontSize: "24px",
      width: "99%",
    },
    buttonPanel: {
      marginBottom: "2rem",
    },
    buttonStack: {
      border: "1px solid",
      width: "100%",
      height: "4rem",
      "&:last-child": {
        borderBottom: "1px solid",
      },
    },
    buttons: {
      "&:last-child": {
        borderRight: "1px solid ",
        backgroundColor: "#9c27b0",
        fontSize: "30px",
      color: "black",
      width: "25%",
     
        
      },
      "&:first-child": {
        fontSize: "30px",
      color: "black",
      borderRight: "1px solid ",
      backgroundColor: "#f3e5f5",
      width: "25%",
      height: "4rem",
        
      },
      "&:nth-child(2)": {
        fontSize: "30px",
      color: "black",
      borderRight: "1px solid ",
      backgroundColor: "#f3e5f5",
      width: "25%",
      height: "4rem",
        
      },
      "&:nth-child(3)": {
      fontSize: "30px",
      color: "black",
      borderRight: "1px solid ",
      backgroundColor: "#f3e5f5",
      width: "25%",
      height: "4rem",
        
      },
      "&.wide": {
        width: "75%",
      },
    },

      buttonsequal: {
        fontSize: "30px",
      color: "black",
      borderRight: "1px solid ",
      
      width: "25%",
      height: "4rem",
          backgroundColor: "#9c27b0",
          "&.wide": {
            width: "75%",
          },
         
        },
      
    contentBox: {
      margin: "9rem 0 3rem 0",
      paddingTop: "2rem",
    },
  })
);