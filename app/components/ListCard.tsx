"use client";
import { Card, Text } from "@nextui-org/react";
import { Reorder, motion, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";

export default function ListCard({ detail }: any) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.15 } }}
      value={detail}
      id={detail}
      style={{
        boxShadow,
        y,
        width: "60vw",
      }}
    >
      <motion.div>
        <Card
          css={{
            margin: "0.5rem 0",
            mw: "60vw",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,28,162,1) 37%, rgba(0,212,255,1) 100%)",
          }}
        >
          <Card.Body>
            <Text css={{ margin: "0", color: "white" }}>{detail}</Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Reorder.Item>
  );
}
