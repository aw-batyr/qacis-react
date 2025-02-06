import { FC } from "react";
import { Container } from "../layout";
import { useLang } from "@/hooks/use-lang";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  className?: string;
}

const schema = z.object({
  email: z.string().email(),
});

export type SubscribeType = z.infer<typeof schema>;

export const SubscribeForm: FC<Props> = () => {
  const form = useForm<SubscribeType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: SubscribeType) {
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-surface_container py-8"
    >
      <Container className="flex items-center justify-between">
        <h2 className="h2">
          {useLang("Подпишитесь на новости:", "Subscribe to the news:")}
        </h2>

        <div className="relative">
          <input
            {...form.register("email")}
            placeholder="E-mail"
            className="input xl:w-[392px] w-[320px]"
          />
          <span className="text-error absolute -bottom-6 text-sm left-0">
            {form.formState.errors?.email?.message}
          </span>
        </div>

        <Button className="xl:w-[288px] w-[220px]">
          {useLang("Подписаться", "Subscribe")}
        </Button>
      </Container>
    </form>
  );
};
