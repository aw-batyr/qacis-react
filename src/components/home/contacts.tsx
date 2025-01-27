import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "../layout";
import { ContactCard } from "../shared";

interface Props {
  className?: string;
}

export const times = [
  {
    name: "Монтаж выставки",
    date: "1 — 27 апреля 2025 года",
  },
  {
    name: "Работа",
    date: "29 — 1 мая 2025 года",
  },
  {
    name: "Демонтаж",
    date: "1 — 2 мая 2025 года",
  },
];

const contacts = [
  {
    title: "contact@turkmenexpo.com",
    subtitle: "Адрес электронной почты",
    img: "/mail.svg",
  },
  {
    title: "здание ТПП Туркменистана",
    subtitle: "Адрес выставки",
    img: "/location.svg",
  },
  {
    title: "+993(62) 00-62-00",
    subtitle: "Контактный номер",
    img: "/mobile.svg",
  },
];

export const Contacts: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_high pt-10 pb-20", className)}>
      <Container>
        <h2 className="text-3xl mb-10">Время мероприятий</h2>

        <div className="flex flex-col gap-6">
          <div className="p-10 bg-surface_container flex items-center gap-6">
            {contacts.map((item) => (
              <ContactCard {...item} key={item.title} className="w-full" />
            ))}
          </div>

          <Link to="/delegate-form" className="w-fit mx-auto">
            <Button>Стать делегатом</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
