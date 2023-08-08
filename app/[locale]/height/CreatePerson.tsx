"use client";
import "react-color-palette/lib/css/styles.css";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Radio,
  RadioGroup,
  Spacer,
} from "@nextui-org/react";
import { useColor, ColorPicker } from "react-color-palette";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Height.module.css";
import { useTranslations } from "next-intl";

export default function CreatePerson() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [unit, setUnit] = useState("ft");
  const [color, setColor] = useColor("hex", "#121212");
  const [countMale, setCountMale] = useState(0);
  const [countFemale, setCountFemale] = useState(0);
  const t = useTranslations("Height");
  const router = useRouter();

  useEffect(() => {
    const countMale = localStorage.getItem("countMale");
    const countFemale = localStorage.getItem("countFemale");
    if (countMale) {
      setCountMale(JSON.parse(countMale));
    }
    if (countFemale) {
      setCountFemale(JSON.parse(countFemale));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countMale", JSON.stringify(countMale));
    localStorage.setItem("countFemale", JSON.stringify(countFemale));
  }, [countMale, countFemale]);

  function convertHeight(unit: string, height: number) {
    const metre = unit === "cm" ? height / 100 : height / 3.2808;
    return metre.toFixed(2);
  }

  const create = async () => {
    var varGender = 0;
    if (gender == "male") {
      setCountMale(countMale + 1);
      varGender = countMale;
    } else {
      setCountFemale(countFemale + 1);
      varGender = countFemale;
    }
    const finalName =
      name.length > 0 && name !== "" ? name : gender + varGender;
    const person = {
      name: finalName,
      height: height,
      gender: gender,
      unit: unit,
      color: color,
    };
    console.table(person);
    // setName('');
    setHeight(0);
    router.refresh();
  };

  return (
    <Card>
      <CardHeader>
        {/*<
          h3
          size={40}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        > */}
        {t("card-header")}
        {/* </h3> */}
      </CardHeader>
      <CardBody>
        <RadioGroup
          orientation="horizontal"
          label={t("genderGroup.label")}
          defaultValue={gender}
          onChange={setGender}
        >
          <Radio value="male">{t("genderGroup.male")}</Radio>
          <Radio value="female">{t("genderGroup.female")}</Radio>
        </RadioGroup>
        <Spacer y={1} />
        <Input
          label={t("name")}
          placeholder={t("ph-name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Spacer y={1} />
        <div className="grid xs:grid-cols-2">
          <div>
            <Input
              type="number"
              label={t("height")}
              step="0.01"
              placeholder="120"
            //   value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <RadioGroup
              orientation="horizontal"
              label={t("unitGroup.label")}
              defaultValue={unit}
              onChange={setUnit}
            >
              <Radio value="ft">{t("unitGroup.ft")}</Radio>
              <Radio value="cm">{t("unitGroup.cm")}</Radio>
            </RadioGroup>
          </div>
        </div>
        <Spacer y={1} />
        <AccordionItem title={t("color-picker_title")}>
          <ColorPicker
            width={456}
            height={228}
            color={color}
            onChange={setColor}
            hideHSV
            dark
          />
        </AccordionItem>
        <Spacer y={1} />
        <Button color="primary" onClick={create}>
          {t("card-btn")}
        </Button>
      </CardBody>
    </Card>
  );
}
