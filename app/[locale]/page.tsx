"use client";
import { Container, Text, Card } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Index() {
  const t = useTranslations("Index");
  const details = [
    t("nextui"),
    t("next-intl"),
    t("react-color-palette"),
    t("pocketbase"),
  ];

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <Container>
      <Text
        h1
        size={50}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          lineHeight: "1.4"
        }}
        weight="bold"
      >
        {t("landing_page")}
      </Text>
      <p>{t("message")}</p>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="landingList"
      >
        {details?.map((detail) => {
          return (
            <motion.li variants={item}>
              <ListCard detail={detail} key={crypto.randomUUID()}/>
            </motion.li>
          );
        })}
      </motion.ul>
    </Container>
  );
}

function ListCard({ detail }: any) {
  return (
    <Card
      css={{
        margin: "0.5rem 0",
        mw: "60vw",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,28,162,1) 37%, rgba(0,212,255,1) 100%)", 
      }}
    >
      <Card.Body>
        <Text css={{ margin: "0", color: "white" }}>{detail}</Text>
      </Card.Body>
    </Card>
  );
}
