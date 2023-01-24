import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #b0b0b0",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const FeeDetail = () => {
  const [open, setOpen] = React.useState(false);
  const [flatfee, setFlatfee] = useState("");
  const [Variablefee, setVariablefee] = useState("");
  const [monthlyfee, setmonthlyfee] = useState("");
  const [yearlyfee, setyearlyfee] = useState("");
  const [getApiRes, setgetApiRes] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getFeeApi = () => {
    axios({
      url: "https://good-red-mackerel-shoe.cyclic.app/api/getGeneratedWalletFee",
      method: "GET",
    })
      .then((res) => {
        console.log("GetApiRes", res.data.generatedFee);
        setgetApiRes(res.data.generatedFee);
      })

      .catch((err) => {});
  };

  useEffect(() => {
    getFeeApi();
  }, []);

  const handleUpdateFee = () => {
    axios({
      url: "https://good-red-mackerel-shoe.cyclic.app/api/updateGeneratedWalletFee",
      method: "PATCH",

      data: {
        id: getApiRes._id,
        FlatFee: flatfee,
        VariableFee: Variablefee,
        monthly: monthlyfee,
        yearly: yearlyfee,
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

  const handleApiHit = () => {
    handleUpdateFee();
    handleClose();
    setTimeout(() => {
      getFeeApi();
    }, 1500);
  };

  console.log("StateCheckGetApi", getApiRes);

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
            Fee <span style={{ color: "#1faade" }}>Details</span>
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            fullWidth
            margin="normal"
            disabled
            label="Flat Fee"
            id="outlined-disabled"
            value={getApiRes.FlatFee}
            defaultValue="0.0"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            fullWidth
            margin="normal"
            disabled
            label="Variable Fee"
            id="outlined-disabled"
            value={getApiRes.VariableFee}
            defaultValue="0.0"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            fullWidth
            margin="normal"
            disabled
            label="Monthly Fee"
            id="outlined-disabled"
            value={getApiRes.monthly}
            defaultValue="0.0"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            fullWidth
            margin="normal"
            disabled
            label="Yearly Fee"
            id="outlined-disabled"
            value={getApiRes.yearly}
            defaultValue="0.0"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            fullWidth
            margin="normal"
            disabled
            label="Pay per use"
            id="outlined-disabled"
            value={getApiRes.payPerUse}
            defaultValue="0.0"
          />
        </Box>
        <Box sx={{ mt: "20px", width: "50%" }}>
          <Button
            size="large"
            variant="contained"
            sx={{ width: "100%", textTransform: "capitalize" }}
            onClick={handleOpen}
            endIcon={<EditIcon />}
          >
            Edit Fee
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box></Box>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 800,
                }}
              >
                Edit <span style={{ color: "#1faade" }}>Fee</span>
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
            <Box sx={{ mt: "20px", width: "100%" }}>
              <Button
                size="large"
                variant="contained"
                sx={{ width: "100%", textTransform: "capitalize" }}
                onClick={handleApiHit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default FeeDetail;
