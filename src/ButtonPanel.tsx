import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useStyles } from "./useStyles";
import ButtonGroup from '@mui/material/ButtonGroup';

interface ButtonPanelProps {
  setValue: (value: number[]) => void;
  value: number[];
  operator: string;
  setOperator: (value: string) => void;
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({
  setValue,
  value,
  operator,
  setOperator,
}) => {
  const classes = useStyles();
  const typeNumber = (event: any) => {
    const typedValue = Number((event.target as HTMLInputElement).textContent);
    if (operator === "=") {
      setValue([typedValue]);
      setOperator("");
    } else if (operator === "") {
      setValue([Number("" + value + typedValue)]);
    } else {
      setValue(value.concat(typedValue));
    }
  };
  const operate = (event: any) => {
    const operation: string = (event.target as HTMLInputElement).textContent!;

    if (value.length === 1 || operator === "") {
      setOperator(operation);
    } else {
      let result: number;
      switch (operator) {
        case "+":
          result = value[0] + value[1];
          break;
        case "-":
          result = value[0] - value[1];
          break;
        case "*":
          result = value[0] * value[1];
          break;
        case "÷":
          result = value[0] / value[1];
          
            
          break;
      }
      setValue([result!]);
      setOperator(operation);
    }
  };

  return (
    <Box className={classes.buttonPanel}>
      {/* <Stack direction="row" className={classes.buttonStack}> */}
      <ButtonGroup variant="contained" size="large" className={classes.buttonStack} >
  
        <Button
        
          className={classes.buttons}
          onClick={() => {
            setValue([]);
            setOperator("");
          }}
        >
          AC
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => {
            if (operator === "") {
              setValue([value[0] * -1]);
            } else {
              setValue([value[0], value[1] * -1]);
            }
          }}
        >
          +/-
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => {
            if (operator === "") {
              setValue([value[0] / 100]);
            } else {
              setValue([value[0], value[1] / 100]);
            }
          }}
        >
          %
        </Button>
        <Button className={classes.buttons} onClick={operate}>
          ÷
        </Button>
      {/* </Stack> */}
      </ButtonGroup>
      {/* <Stack direction="row" className={classes.buttonStack}> */}
      <ButtonGroup variant="contained" size="large" className={classes.buttonStack} >
        <Button className={classes.buttons} onClick={typeNumber}>
          7
        </Button>
        <Button className={classes.buttons} onClick={typeNumber}>
          8
        </Button>
        <Button className={classes.buttons} onClick={typeNumber}>
          9
        </Button>
        <Button className={classes.buttons} onClick={operate}>
          *
        </Button>
      {/* </Stack> */}
      </ButtonGroup>
      {/* <Stack direction="row" className={classes.buttonStack}> */}
      <ButtonGroup variant="contained" size="large" className={classes.buttonStack} >
        <Button className={classes.buttons} onClick={typeNumber}>
          4
        </Button>
        <Button className={classes.buttons} onClick={typeNumber}>
          5
        </Button>
        <Button className={classes.buttons} onClick={typeNumber}>
          6
        </Button>
        <Button className={classes.buttons} onClick={operate}>
          -
        </Button>
      {/* </Stack> */}
      </ButtonGroup>
      {/* <Stack direction="row" className={classes.buttonStack}> */}
      <ButtonGroup variant="contained" size="large" className={classes.buttonStack} >
        <Button className={classes.buttons} onClick={typeNumber}>
          1
        </Button>
        <Button className={classes.buttons} onClick={typeNumber}>
          2
        </Button>
        <Button className={classes.buttons} onClick={typeNumber}>
          3
        </Button>
        <Button className={classes.buttons} onClick={operate}>
          +
        </Button>
        </ButtonGroup>
      {/* </Stack> */}
      {/* <Stack direction="row" className={classes.buttonStack}> */}
      <ButtonGroup variant="contained" size="large" className={classes.buttonStack} >
        <Button className={classes.buttons} onClick={typeNumber}>
          0
        </Button>
       
        
        <Button className={`${classes.buttonsequal} wide`} onClick={operate}>
          =
        </Button>
      {/* </Stack> */}
      </ButtonGroup>
    </Box>
  );
};
