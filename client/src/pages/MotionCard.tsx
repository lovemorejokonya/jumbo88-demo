import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import * as motion from "motion/react-client";
import type { Package } from "./Jumbo88";
import { useNavigate } from "react-router-dom";

interface MotionCardProps {
  pkg: Package;
}

export default function MotionCard({ pkg }: MotionCardProps) {

  const navigate = useNavigate();

  const handleNavigate = (priceId: string) => {
    // console.log({priceId});
    navigate(`/checkout/${priceId}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ cursor: 'pointer', ...box }}
      onClick={() => handleNavigate(pkg.priceId)}
    >
      <Card
        sx={{
          background: 'rgba(30, 41, 59, 0.35)',
          color: 'white',
          border: '1.5px solid rgba(255,255,255,0.25)',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'visible',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(14px) saturate(180%)',
          WebkitBackdropFilter: 'blur(14px) saturate(180%)',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Featured Star */}
        { pkg.featured && (
        <Box sx={{ position: 'absolute', top: -18, left: -18, zIndex: 2, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', p: 0.5, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
          <StarIcon sx={{ color: '#FFD600', fontSize: 36, filter: 'drop-shadow(0 2px 4px #0008)' }} />
        </Box>
        )}
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h6" display="flex" sx={{ flexGrow: 1 }}>
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
          <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }} onClick={() => handleNavigate(pkg.priceId)}>
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
