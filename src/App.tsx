import * as React from "react";
import { Box, Stack, Container, Card, CardHeader } from "@mui/material";
import { useStyles } from "./useStyles";
import { ButtonPanel } from "./ButtonPanel";
import { Calculator } from "calculator-typescript";

export const App: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([]);
  const [operator, setOperator] = React.useState<string>("");

  return (
    <Container className={classes.appContainer}>
      <Card raised={true} className={classes.contentBox}>
        <CardHeader
          title="Calculator"
          subheader="Click the button and perform desired calculation"
        />
        
        <Stack className={classes.calculatorBox}>
          <Box>
            <input
              className={classes.displayField}
              value={value.join(operator)}
            />
          </Box>
          <ButtonPanel
            setValue={setValue}
            value={value}
            operator={operator}
            setOperator={setOperator}
          />
        </Stack>

      
      </Card>
      
    </Container>
  );
};
