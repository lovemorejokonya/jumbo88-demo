import React from "react";
import { Box, Typography } from "@mui/material";
import ApplePayButton from "../components/ApplePayButton";
import MotionCard from "./MotionCard";

export interface Package {
  title: string;
  discount?: string;
  gc: string;
  sc?: string;
  oldPrice?: string;
  newPrice: string;
  priceId: string;
}

const packages: Package[] = [
  {
    title: "Starter",
    discount: "100%",
    gc: "20,000 GC",
    sc: "20 FREE SC",
    oldPrice: "$19.99",
    newPrice: "$9.99",
    priceId: "price_1Rf47GBG0PkbaNmOYTlP8b7O", // price_1Rf47GBG0PkbaNmOYTlP8b7O
  },
  {
    title: "Elite",
    discount: "50%",
    gc: "60,000 GC",
    sc: "60 FREE SC",
    oldPrice: "$59.99",
    newPrice: "$39.99",
    priceId: "price_1Rf47oBG0PkbaNmOEGk73IDr",
  },
  // {
  //   title: "debug webhooks package",
  //   gc: "111 GC",
  //   sc: "0.02 FREE SC",
  //   newPrice: "$0.01",
  //   priceId: "price_1Rf47GBG0PkbaNmOYTlP8b7O",
  // },
  // {
  //   title: "Quick 5",
  //   gc: "5,000 GC",
  //   newPrice: "$4.99",
  //   priceId: "price_1Rf47GBG0PkbaNmOYTlP8b7O",
  // },
  // {
  //   title: "Quick 10",
  //   gc: "10,000 GC",
  //   sc: "10 FREE SC",
  //   newPrice: "$9.99",
  //   priceId: "price_1Rf47GBG0PkbaNmOYTlP8b7O",
  // },
  // {
  //   title: "Quick 20",
  //   gc: "20,000 GC",
  //   sc: "20 FREE SC",
  //   newPrice: "$19.99",
  //   priceId: "price_1Rf47GBG0PkbaNmOYTlP8b7O",
  // },
];

export default function Jumbo88Page() {
  return (
    <Box sx={{ padding: 2, bgcolor: "#0a0f1b", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" sx={{ color: "lime", fontWeight: "bold", mb: 2 }}>
        JUMBO88
      {/* <ApplePayButton label="Starter" amount={1000}/> */}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 2,
        }}
      >
        {packages.map((pkg: Package, index: number) => (
          <React.Fragment key={index}>
            <MotionCard pkg={pkg}/>
          </React.Fragment>
        ))}
      </Box>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="white">
          VISA &nbsp; • &nbsp; MasterCard &nbsp; • &nbsp; Apple Pay &nbsp; • &nbsp; Google Pay
        </Typography>
      </Box>
    </Box>
  );
}
