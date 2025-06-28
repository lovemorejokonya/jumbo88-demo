import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid, Chip } from "@mui/material";
import ApplePayButton from "../components/ApplePayButton";

interface Package {
  title: string;
  discount?: string;
  gc: string;
  sc?: string;
  oldPrice?: string;
  newPrice: string;
}

const packages: Package[] = [
  {
    title: "Starter",
    discount: "100%",
    gc: "20,000 GC",
    sc: "20 FREE SC",
    oldPrice: "$19.99",
    newPrice: "$9.99",
  },
  {
    title: "Elite",
    discount: "50%",
    gc: "60,000 GC",
    sc: "60 FREE SC",
    oldPrice: "$59.99",
    newPrice: "$39.99",
  },
  {
    title: "debug webhooks package",
    gc: "111 GC",
    sc: "0.02 FREE SC",
    newPrice: "$0.01",
  },
  {
    title: "Quick 5",
    gc: "5,000 GC",
    newPrice: "$4.99",
  },
  {
    title: "Quick 10",
    gc: "10,000 GC",
    sc: "10 FREE SC",
    newPrice: "$9.99",
  },
  {
    title: "Quick 20",
    gc: "20,000 GC",
    sc: "20 FREE SC",
    newPrice: "$19.99",
  },
];

export default function Jumbo88Page() {
  return (
    <Box sx={{ padding: 2, bgcolor: "#0a0f1b", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" sx={{ color: "lime", fontWeight: "bold", mb: 2 }}>
        JUMBO88
      <ApplePayButton />
      </Typography>

      <Grid container spacing={2} direction="column">
        {packages.map((pkg, index) => (
          <Grid key={index}>
            <Card
              sx={{
                bgcolor: "#1e293b",
                color: "white",
                border: "2px solid #22c55e",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {pkg.title}
                  </Typography>
                  {pkg.discount && (
                    <Chip label={pkg.discount} color="success" size="small" sx={{ ml: 1 }} />
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
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  {pkg.newPrice}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="white">
          VISA &nbsp; • &nbsp; MasterCard &nbsp; • &nbsp; Apple Pay &nbsp; • &nbsp; Google Pay
        </Typography>
      </Box>
    </Box>
  );
}
