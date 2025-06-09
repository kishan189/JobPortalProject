import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Box,
} from "@mui/material";

const menuData = {
  Internships: {
    left: ["Top Locations", "Profile", "Top Categories", "Explore More Internships", "Placement Guarantee Courses"],
    right: [
      "Work from Home",
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internship in Hyderabad",
      "Internship in Mumbai",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Jaipur",
      "International Internship",
      "View all internships",
    ],
  },
  Jobs: {
    left: ["Popular Job Roles", "Companies Hiring"],
    right: [
      "Software Developer",
      "Product Manager",
      "Data Analyst",
      "Sales Executive",
      "Marketing Manager",
      "View all jobs",
    ],
  },
  Courses: {
    left: ["All Courses", "Placement Guarantee"],
    right: [
      "Web Development",
      "Data Science",
      "Digital Marketing",
      "UI/UX Design",
      "Programming with Python",
      "View all courses",
    ],
  },
};

const HoverMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleHover = (event, menuType) => {
    setAnchorEl(event.currentTarget);
    setSelectedMenu(menuType);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMenu("");
  };

  const renderMenu = () => {
    const content = menuData[selectedMenu];
    if (!content) return null;

    return (
      <Paper sx={{ padding: 2, width: 500 }} onMouseLeave={handleClose} >
        <Grid container spacing={2}>
          <Grid item xs={5}>
            {content.left.map((item, index) => (
              <MenuItem key={index}>{item}</MenuItem>
            ))}
          </Grid>
          <Grid item xs={7}>
            {content.right.map((item, index) => (
              <MenuItem key={index} onClick={handleClose}>
                {item}
              </MenuItem>
            ))}
          </Grid>
        </Grid>
      </Paper>
    );
  };

  return (
    <Box
      sx={{ display: "flex", gap: 2 }}
      onMouseLeave={handleClose}
    >
      <Button
        onMouseEnter={(e) => handleHover(e, "Internships")}
        onClick={()=>console.log("hello")}
      >
        Internships ▾
      </Button>
      <Button
        onMouseEnter={(e) => handleHover(e, "Jobs")}
      >
        Jobs ▾
      </Button>
      <Button
        onMouseEnter={(e) => handleHover(e, "Courses")}
      >
        Courses ▾
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{ sx: { padding: 0 } }}
        disableAutoFocusItem
        MenuProps={{ onMouseLeave: handleClose }}
      >
        {renderMenu()}
      </Menu>
    </Box>
  );
};

export default HoverMenu;
