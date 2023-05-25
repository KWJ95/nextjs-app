"use client";
import { Suspense } from "react";
import { Container, Text, Grid, Row, Card } from "@nextui-org/react";
import CreatePerson from "./CreatePerson";
import LoadingHeight from "./loading";
import DragBox from "./DragBox";
import { useTranslations } from "next-intl";

export default async function HeightPage() {
  // const [isImp, toggleUnit] = useState<boolean>(false);
  const t = useTranslations('Height');
  return (
    <Container>
      <Grid.Container>
        <Row>
          <Text h1>{t('title')}</Text>
        </Row>
        <Grid lg={3} md={4}>
          <Suspense fallback={<LoadingHeight />}>
            <CreatePerson />
          </Suspense>
        </Grid>
        <Grid lg={9} md={8}>
          <Row>
            <DragBox />
            {/* {isImp ? ConvertUnit(isImp, height)) : height} */}
          </Row>
          <Row>
            <Grid.Container>
              {/* {people?.map((p) => {
                return (
                  <Grid md={3} lg={2}>
                    <People key={p.id} p={p}/>
                  </Grid>
                );
              })} */}
            </Grid.Container>
          </Row>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

function People( {p} : any) {
  const {id, name, gender, height, color } = p || {};
  const hex = color?.hex ?? "invalid";
  return (
    <Card>
      <Card.Body>
        <Text size="$xl">{name}</Text>
        <Text>{gender}</Text>
        <Text>{height}</Text>
        <Text>{hex}</Text>
        {/* {color?.map((v)=>{
          return (
            <Text>{v.hex}</Text>
          );
        })} */}
      </Card.Body>
    </Card>
  );
}

function ConvertUnit(isImp: boolean, height: number) {
  if (isImp) 
    return (height*3.2808).toFixed(2);
  return height*100;
}
