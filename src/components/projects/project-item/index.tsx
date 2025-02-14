import { FavoriteBorder, Share } from "@mui/icons-material";
import MapIcon from "@mui/icons-material/Map";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = () => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#E0E0E0" }}>AF</Avatar>}
        action={
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton>
              <Share />
            </IconButton>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
          </Box>
        }
        title={
          <Typography variant="subtitle1" fontWeight={600}>
            Company Name
          </Typography>
        }
        subheader={
          <Chip
            label="In Progress"
            color="primary"
            size="small"
            icon={<WorkOutlineIcon />}
          />
        }
      />
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Project Name
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <MapIcon fontSize="small" />
          <Typography variant="body2" color="textSecondary">
            Location
          </Typography>
        </Box>
        <Box mt={2}>
          <Chip label="Commercial" variant="outlined" color="success" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
