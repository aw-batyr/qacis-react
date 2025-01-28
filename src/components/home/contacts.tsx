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
    title: "+99371871814; +99363719588",
    subtitle: "Контактный номер",
    img: "/mobile.svg",
  },
];

export const Contacts: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_high pt-20 pb-10", className)}>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="md:p-10 py-10 md:bg-surface_container flex flex-col md:flex-row items-center gap-6">
            {contacts.map((item) => (
              <ContactCard {...item} key={item.title} className="w-full" />
            ))}
          </div>

          <Link to="/become-delegate" className="flex justify-center w-full">
            <Button className="md:w-fit w-full">Стать делегатом</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
