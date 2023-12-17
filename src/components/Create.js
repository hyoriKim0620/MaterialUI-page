import { Edit } from "@mui/icons-material";
import {
  Box,
  Fab,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ModalUI from "./ModalUI";

const Create = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title="Create" sx={{ position: "fixed", bottom: 20, right: 30 }}>
        <IconButton>
          <Fab color="success">
            <Edit onClick={handleOpen} />
          </Fab>
        </IconButton>
      </Tooltip>
      <ModalUI
        open={open}
        handleClose={handleClose}
        title={"게시물 등록"}
        content={"기능 준비중ㆍㆍㆍ"}
      />
    </>
  );
};

export default Create;
