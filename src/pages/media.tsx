import { FC } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { Container, Cover } from "@/components/layout";
import { Loading, Menu } from "@/components/shared";
import { usePhotos } from "@/services/hooks/use-photos";

interface Props {
  className?: string;
}

// const momentsTabs = [
//   {
//     id: 0,
//     title: "Фото",
//     titleEn: "Видео",
//   },
//   {
//     id: 1,
//     title: "Photo",
//     titleEn: "Video",
//   },
// ];

export const Media: FC<Props> = ({ className }) => {
  // const [state, setState] = useState(0);
  const { data, isPending } = usePhotos(1);

  console.log(data);

  const lang = useLangStore((state) => state.lang);

  return (
    <section className={cn("", className)}>
      <Cover title={lang === "ru" ? "Моменты QACIS" : "Moments QACIS"} />

      <Container className="page-padding">
        {isPending ? (
          <Loading />
        ) : (
          <>
            {/* <Tabs
              state={state}
              setState={setState}
              data={momentsTabs}
              className="mb-6"
            /> */}

            <Menu
              title="2025"
              triggerClassName="md:text-3xl text-2xl medium mb-10"
            />

            <div className="grid lg:grid-cols-4 lg:gap-y-4 lg:gap-x-6 md:gap-6 gap-4 grid-cols-2 place-items-center">
              {data?.map((photo, i) => (
                <div key={i} className=" size-full">
                  <img
                    src={photo?.photo?.path ?? ""}
                    alt={photo?.photo?.file_name ?? "photo"}
                    className="size-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
