"use client";
import "./globals.css";
import { Card1, Card2, Card3, Card4, Card5 } from "../components/CustomCards";
// import { Container, Text } from "@nextui-org/react";
import { Reorder, Variants, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ListCard from "../components/ListCard";
import { useMediaQuery } from "react-responsive";

export default function Index() {
  const t = useTranslations("Index");
  const initialDetails = [
    t("nextui"),
    t("next-intl"),
    t("react-color-palette"),
    t("pocketbase"),
  ];
  const isMobile = useMediaQuery({ query: '(min-width: 650px'});
  const [details, setDetails] = useState(initialDetails);
  const cardVariants: Variants = {
    offscreenUp: { y: 200, opacity: 0 },
    offscreenDown: { y: -200, opacity: 0 },
    onscreenY: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div  
    // Container
    >
      <h1
        // h1
        // size={50}
        // css={{
        //   textGradient: "45deg, $blue600 -20%, $pink600 50%",
        //   lineHeight: "1.4",
        // }}
        // weight="bold"
      >
        {t("landing_page")}
      </h1>
      <p>{t("message")}</p>
      <Reorder.Group axis="y" onReorder={setDetails} values={details}>
        {details?.map((detail) => (
          <ListCard key={detail} item={detail} detail={detail} />
        ))}
      </Reorder.Group>
      <div
      // Grid.Container gap={2} justify="center"
      >
        <div 
        // xs={12} sm={4}
        >
          <motion.div
            initial="offscreenUp"
            whileInView="onscreenY"
            style={{ width: "100%" }}
          >
            <motion.div variants={cardVariants}>
              <Card1 />
            </motion.div>
          </motion.div>
        </div>
        <div 
        // xs={12} sm={4}
        >
          <motion.div
            initial={isMobile ? "offscreenUp" : "offscreenDown"}
            whileInView="onscreenY"
            style={{ width: "100%" }}
          >
            <motion.div variants={cardVariants}>
              <Card2 />
            </motion.div>
          </motion.div>
        </div>
        <div 
        // xs={12} sm={4}
        >
          <motion.div
            initial="offscreenUp"
            whileInView="onscreenY"
            style={{ width: "100%" }}
          >
            <motion.div variants={cardVariants}>
              {/* <Card3 /> */}
            </motion.div>
          </motion.div>
        </div>
        <div
        // xs={12} sm={5}
        >
          <Card4 />
        </div>
        <div 
        // xs={12} sm={7}
        >
          {/* <Card5 /> */}
        </div>
      </div>
    </div>
  );
}