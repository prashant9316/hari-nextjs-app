"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import ProductGrid from "./product-grid";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>E-Commerce Home</title>
        <meta
          name="description"
          content="Welcome to our e-commerce platform."
        />
      </Head>

      <main className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to Our E-Commerce Store
          </h2>
          <p className="text-gray-600 mb-4">
            Explore a wide variety of products and find the best deals.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500">
            Shop Now
          </button>
        </motion.div>
        <ProductGrid />
      </main>
    </>
  );
};

export default HomePage;
