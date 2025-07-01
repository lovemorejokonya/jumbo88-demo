import React from "react";
import { Box, Typography } from "@mui/material";
import MotionCard from "./MotionCard";

export interface Package {
  title: string;
  discount?: string;
  gc: string;
  sc?: string;
  oldPrice?: string;
  newPrice: string;
  priceId: string;
  featured?: boolean;
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
    featured: true,
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
    <Box sx={{
      px: 0,
      py: { xs: 2, sm: 4 },
      bgcolor: "#0a0f1b",
      minHeight: "100vh",
      width: '100vw',
    }}>
      <Box sx={{ maxWidth: 1400, mx: 'auto', px: 4, alignItems: 'center' }}>
        <Typography variant="h4" align="center" sx={{ color: "lime", fontWeight: "bold", mb: 2 }}>
          JUMBO88
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
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
            {/* VISA */}
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', height: 32 }}>
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="6" fill="#fff"/>
                <text x="24" y="21" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#1A1F71">VISA</text>
              </svg>
            </Box>
            {/* Mastercard */}
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', height: 32 }}>
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="6" fill="#fff"/>
                <circle cx="19" cy="16" r="10" fill="#EB001B"/>
                <circle cx="29" cy="16" r="10" fill="#F79E1B" fillOpacity="0.85"/>
              </svg>
            </Box>
            {/* Apple Pay */}
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', height: 32 }}>
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="6" fill="#000"/>
                <text x="24" y="20" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#fff"> Pay</text>
              </svg>
            </Box>
            {/* Google Pay */}
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', height: 32 }}>
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="6" fill="#fff"/>
                <g>
                  <text x="24" y="21" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#4285F4">G</text>
                  <text x="31" y="21" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#000">Pay</text>
                </g>
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 8, textAlign: "center", color: '#a3e635', fontWeight: 'bold', fontSize: 18 }}>
        Enjoy secure checkout and instant delivery!
      </Box>
    </Box>
  );
}
