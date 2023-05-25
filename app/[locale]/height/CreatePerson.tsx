"use client";
import "react-color-palette/lib/css/styles.css";
import { Collapse, Radio, Card, Text, Input, Button, Grid, Spacer } from "@nextui-org/react";
import { useColor, ColorPicker} from "react-color-palette";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Height.module.css";
import { useTranslations } from "next-intl";

export default function CreatePerson() {
    const [name, setName] = useState('');
    const [height, setHeight] = useState(0);
    const [gender, setGender] = useState('male');
    const [unit, setUnit] = useState('ft');
    const [color, setColor] = useColor("hex", "#121212");
    const [countMale, setCountMale] = useState(0);
    const [countFemale, setCountFemale] = useState(0);
    const t = useTranslations('Height');
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

    function convertHeight(unit: string, height :number) {
        const metre = (unit === 'cm') ? height/100 : height/3.2808;
        return metre.toFixed(2);
    }

    const create = async () => {
        var varGender = 0;
        if (gender == 'male') {
            setCountMale(countMale + 1);
            varGender = countMale;
        } else {
            setCountFemale(countFemale + 1);
            varGender = countFemale;
        }
        const finalName = (name.length > 0 && name !== '') ? name : gender + varGender;
        const person = {'name':finalName, 'height':height, 'gender':gender, 'unit': unit, 'color': color}
        console.table(person);
        // setName('');
        setHeight(0);
        router.refresh();
    }

    return(
        <Card>
            <Card.Header>
                <Text
                    h3
                    size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                >
                    {t('card-header')}
                </Text>
            </Card.Header>
            <Card.Body 
                css={{
                    overflow: 'hidden',
                }}    
            >
                <Radio.Group 
                    orientation="horizontal" 
                    label={t('genderGroup.label')} 
                    defaultValue={gender}
                    onChange={setGender}
                >
                    <Radio value="male">{t('genderGroup.male')}</Radio>
                    <Radio value="female">{t('genderGroup.female')}</Radio>
                </Radio.Group>
                <Spacer y={1} />
                <Input 
                    clearable 
                    bordered 
                    label={t('name')}
                    placeholder={t('ph-name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Spacer y={1} />
                <Grid.Container justify="center">
                    <Grid xs={6}>
                        <Input
                            type="number"
                            label={t('height')}
                            step="0.01"
                            placeholder="120"
                            value={height}
                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                        />
                    </Grid>
                    <Grid xs={6}>
                        <Radio.Group 
                            orientation="horizontal" 
                            label={t('unitGroup.label')}
                            defaultValue={unit}
                            onChange={setUnit}
                        >
                            <Radio value="ft">{t('unitGroup.ft')}</Radio>
                            <Radio value="cm">{t('unitGroup.cm')}</Radio>
                        </Radio.Group>
                    </Grid>
                </Grid.Container>
                <Spacer y={1} />
                <Collapse.Group>
                    <Collapse title={t('color-picker_title')}>
                        <ColorPicker
                            width={456}
                            height={228}
                            color={color}
                            onChange={setColor}
                            hideHSV
                            dark
                        />
                    </Collapse>
                </Collapse.Group>
                <Spacer y={1} />
                <Button 
                    color="primary"
                    shadow
                    auto
                    onClick={create}
                >
                    {t('card-btn')}
                </Button>
                
            </Card.Body>
        </Card>
    );
};