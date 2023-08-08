"use client";
import { Suspense } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Link
} from "@nextui-org/react";
import CreatePerson from "./CreatePerson";
import LoadingHeight from "./loading";
import DragBox from "./DragBox";
import { useTranslations } from "next-intl";

export default async function HeightPage() {
  // const [isImp, toggleUnit] = useState<boolean>(false);
  const t = useTranslations("Height");
  return (
    <div>
      <div className="grid grid-col-2">
        <div>
          <h1>{t("title")}</h1>
        </div>
        <div>
          <h3>
            This is a WIP for creating a height comparison tool by cloning&nbsp;
            <Link
              href="https://hikaku-sitatter.com/en/"
              target="_blank"
              isExternal
            >
              hikaku sitatter
            </Link>
            &nbsp;functionality
          </h3>
        </div>
        <div className="lg:w-32 md:w-48">
          <Suspense fallback={<LoadingHeight />}>
            <CreatePerson />
          </Suspense>
        </div>
        <div className="lg:w-9 md:w-8">
          <div>
            <DragBox />
            {/* {isImp ? ConvertUnit(isImp, height)) : height} */}
          </div>
          <div>
            <div>
              {/* {people?.map((p) => {
                return (
                  <div md={3} lg={2}>
                    <People key={p.id} p={p}/>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function People({ p }: any) {
  const { id, name, gender, height, color } = p || {};
  const hex = color?.hex ?? "invalid";
  return (
    <Card>
      <CardBody>
        <p /* size="$xl" */>{name}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{hex}</p>d
        {/* {color?.map((v)=>{
          return (
            <p>{v.hex}</p>
          );
        })} */}
      </CardBody>
    </Card>
  );
}

function ConvertUnit(isImp: boolean, height: number) {
  if (isImp) return (height * 3.2808).toFixed(2);
  return height * 100;
}
