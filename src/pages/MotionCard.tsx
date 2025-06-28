import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import * as motion from "motion/react-client";

export default function MotionCard({ pkg, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={box}
    >
      <Card
        key={index}
        sx={{
          bgcolor: "#1e293b",
          color: "white",
          border: "2px solid #22c55e",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {pkg.title}
              </Typography>
              {pkg.discount && (
                <Chip
                  label={pkg.discount}
                  color="success"
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </Box>
            <Typography variant="body1">{pkg.gc}</Typography>
            {pkg.sc && (
              <Typography variant="body2" color="secondary">
                {pkg.sc}
              </Typography>
            )}
            {pkg.oldPrice && (
              <Typography
                variant="body2"
                sx={{ textDecoration: "line-through", color: "#94a3b8" }}
              >
                {pkg.oldPrice}
              </Typography>
            )}
          </Box>
          <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
            {pkg.newPrice}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  // width: 100,
  // height: 100,
  // backgroundColor: "#9911ff",
  // borderRadius: 5,
};
