import { FC, useState } from "react";
import { Container } from "../layout";
import { useLang } from "@/hooks/use-lang";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { postSubscribe } from "@/services";

interface Props {
  className?: string;
}

const schema = z.object({
  email: z.string().email(),
});

export type SubscribeType = z.infer<typeof schema>;

export const SubscribeForm: FC<Props> = () => {
  const [success, setSuccess] = useState(false);
  const form = useForm<SubscribeType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: SubscribeType) {
    try {
      const status = await postSubscribe(data);

      form.reset();
      setSuccess(status);
    } catch (error) {
      console.error("POST subscribe", error);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-surface_container py-8"
    >
      <Container className="flex lg:flex-row flex-col gap-6 lg:items-center justify-between">
        <h2 className="h2">
          {useLang("Подпишитесь на новости:", "Subscribe to the news:")}
        </h2>

        <div className="relative">
          <input
            {...form.register("email")}
            placeholder="Email"
            className="input xl:w-[392px] lg:w-[320px] w-full"
          />
          <span className="text-error absolute -bottom-6 text-sm left-0">
            {form.formState.errors?.email?.message}
          </span>
        </div>

        <Button disabled={success} className="xl:w-[288px] lg:w-[220px] w-full">
          {success
            ? useLang("Отправлено", "Submitted")
            : useLang("Подписаться", "Subscribe")}
        </Button>
      </Container>
    </form>
  );
};
