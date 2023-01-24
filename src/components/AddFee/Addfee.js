import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from "sweetalert2";

const Addfee = () => {
  const [flatfee, setFlatfee] = useState("");
  const [Variablefee, setVariablefee] = useState("");
  const [monthlyfee, setmonthlyfee] = useState("");
  const [yearlyfee, setyearlyfee] = useState("");

  const handleApi = () => {
    axios({
      url: "https://good-red-mackerel-shoe.cyclic.app/api/generateWalletFee",
      method: "POST",

      data: {
        flatFee: flatfee,
        variableFee: Variablefee,
        month: monthlyfee,
        year: yearlyfee,
      },
    })
      .then((res) => {
        Swal.fire(
          "Success",
          res.data.msg,
          "success",

          {
            buttons: false,
            timer: 2000,
          }
        );
      })

      .catch((err) => {
        Swal.fire(
          "Failed",
          err.message,
          "error",

          {
            buttons: false,
            timer: 2000,
          }
        );
      });
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mt: "50px" }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            Add <span style={{ color: "#1faade" }}>Fee</span>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            type="number"
            id="standard-basic"
            label="Flat Fee"
            variant="standard"
            onChange={(e) => setFlatfee(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            type="number"
            id="standard-basic"
            label="Variable Fee"
            variant="standard"
            onChange={(e) => setVariablefee(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            type="number"
            id="standard-basic"
            label="Month"
            variant="standard"
            onChange={(e) => setmonthlyfee(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            type="number"
            id="standard-basic"
            label="Year"
            variant="standard"
            onChange={(e) => setyearlyfee(e.target.value)}
          />
        </Box>
        <Box sx={{ mt: "20px", width: "50%" }}>
          <Button
            size="large"
            variant="contained"
            sx={{ width: "100%", textTransform: "capitalize" }}
            onClick={handleApi}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Addfee;
