import { FC } from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

interface Props {
  className?: string;
  control: any;
  label: string;
  name: string;
}

export const CheckboxField: FC<Props> = ({ control, label, name }) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="flex flex-row  items-center !bg-transparent space-x-3 space-y-0 rounded-md   ">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-xl cursor-pointer">{label}</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};
