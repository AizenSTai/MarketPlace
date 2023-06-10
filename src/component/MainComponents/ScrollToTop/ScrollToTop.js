import React from "react";
import PropTypes from "prop-types";
import { Zoom, useScrollTrigger, makeStyles, Fab,Box } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useCallback } from "react";

function ScrollToTop() {
  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  })

  const scrollToTopA = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTopA}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  )
}
export default ScrollToTop