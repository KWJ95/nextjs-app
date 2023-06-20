import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useTranslations } from "next-intl";

// const t = useTranslations('Cards');

export const Card1 = () => {
  const t = useTranslations("Cards");

  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {/* What to watch */}
            {t("card1.text1")}
          </Text>
          <Text h4 color="white">
            {/* Stream the Acme event */}
            {t("card1.text2")}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src="https://nextui.org/images/card-example-4.jpeg"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
  );
};

export const Card2 = () => {
  const t = useTranslations("Cards");

  return (
    <Card css={{ w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {/* Plant a tree */}
            {t("card2.text1")}
          </Text>
          <Text h4 color="white">
            {/* Contribute to the planet */}
            {t("card2.text2")}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src="https://nextui.org/images/card-example-3.jpeg"
        width="100%"
        height={340}
        objectFit="cover"
        alt="Card image background"
      />
    </Card>
  );
};

export const Card3 = () => {
  const t = useTranslations("Cards");

  return (
    <Card css={{ bg: "$black", w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {/* Supercharged */}
            {t("card3.text1")}
          </Text>
          <Text h4 color="white">
            {/* Creates beauty like a beast */}
            {t("card3.text2")}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src="https://nextui.org/images/card-example-2.jpeg"
        width="100%"
        height={340}
        objectFit="cover"
        alt="Card image background"
      />
    </Card>
  );
};

export const Card4 = () => {
  const t = useTranslations("Cards");

  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {/* New */}
            {t("card4.text1")}
          </Text>
          <Text h3 color="black">
            {/* Acme camera */}
            {t("card4.text2")}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://nextui.org/images/card-example-6.jpeg"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {/* Available soon. */}
              {t("card4.text3")}
            </Text>
            <Text color="#000" size={12}>
              {/* Get notified. */}
              {t("card4.text4")}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="secondary">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  {/* Notify Me */}
                  {t("card4.text5")}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export const Card5 = () => {
  const t = useTranslations("Cards");

  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {/* Your day your way */}
            {t("card5.text1")}
          </Text>
          <Text h3 color="white">
            {/* Your checklist for better sleep */}
            {t("card5.text2")}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://cdn.wareable.com/r/s/1200x/assets/images/2022/06/35389-original-jpg.webp"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  {/* Breathing App */}
                  {t("card5.text3")}
                </Text>
                <Text color="#d1d1d1" size={12}>
                  {/* Get a good night's sleep. */}
                  {t("card5.text4")}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  {/* Get App */}
                  {t("card5.text5")}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
