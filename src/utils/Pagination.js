import React from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/system";

const PaginationComponent = ({ page, setPage, totalPages }) => {
  return (
    <Stack spacing={2}>
    <Pagination
      count={totalPages}
      page={page}
      onChange={(e, value) => {
        setPage({ page: +value });
      }}
      className="Pagination"
      variant="outlined" color="primary"
    />
    </Stack>
  );
};

export default PaginationComponent;
