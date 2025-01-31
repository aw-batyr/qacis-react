// import { FieldError } from "react-hook-form";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";
// import { LegacyRef } from "react";

// type Props = {
//   control: any;
//   name: string;
//   label?: string;
//   placeholder?: string;
//   error?: FieldError | undefined;
//   area?: boolean;
//   ref?: LegacyRef<HTMLInputElement>;
//   type?: string;
//   className?: string;
//   disabled?: boolean;
//   textDark?: boolean;
//   supporText?: string;
//   handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

// export const Field = ({
//   control,
//   name,
//   label,
//   placeholder,
//   error,
//   type = "text",
//   className,
//   disabled,
//   ref,
//   textDark,
//   supporText,
//   handleChange,
// }: Props) => {
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className={cn(className, "flex flex-col w-full relative")}>
//           <FormLabel
//             className={cn(
//               "text-xl",
//               textDark ? "text-on_surface" : "text-on_surface_v"
//             )}
//           >
//             {label}
//           </FormLabel>

//           <FormControl>
//             <>
//               {type !== "file" ? (
//                 <Input
//                   type={type}
//                   placeholder={placeholder}
//                   {...field}
//                   disabled={disabled}
//                   className={error && "border-[#BA1A1A]"}
//                 />
//               ) : (
//                 <div className="relative">
//                   <Input
//                     ref={ref}
//                     type="file"
//                     placeholder={placeholder}
//                     onChange={(e) => {
//                       const file = e.target.files?.[0] || null;
//                       console.log("Выбранный файл:", file); // Проверим, выбран ли файл
//                       field.onChange(file); // Передаем файл в react-hook-form
//                       if (handleChange) handleChange(e); // Дополнительный обработчик
//                     }}
//                     disabled={disabled}
//                     className={error?.message && "border-[#BA1A1A]"}
//                   />
//                   {field.value && (
//                     <div className="text-sm mt-2 text-gray-500 absolute top-8">
//                       Выбранный файл: {field.value.name}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Обработка файлов */}
//             </>
//           </FormControl>
//           <FormMessage
//             className={cn(
//               "absolute -bottom-5 left-0 text-sm font-medium leading-[130%] ",
//               Boolean(error) && "text-[#BA1A1A]"
//             )}
//           >
//             {error ? error.message : supporText}
//           </FormMessage>
//         </FormItem>
//       )}
//     />
//   );
// };

import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { LegacyRef } from "react";
import { Textarea } from "../ui/textarea";

type Props = {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  area?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
  type?: string;
  textArea?: boolean;
  className?: string;
  disabled?: boolean;
  textDark?: boolean;
  supporText?: string;
  onPrimary?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Field = ({
  control,
  name,
  label,
  placeholder,
  error,
  type = "text",
  className,
  disabled,
  textArea = false,
  textDark,
  supporText,
  handleChange,

  onPrimary = false,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, "flex flex-col w-full relative")}>
          <FormLabel
            className={cn(
              "text-xl",
              onPrimary && "!text-on_primary",
              textDark ? "text-on_surface" : "text-on_surface_v"
            )}
          >
            {label}
          </FormLabel>

          <FormControl>
            <>
              {textArea ? (
                <Textarea
                  rows={3}
                  {...field}
                  placeholder={placeholder}
                  className={cn(
                    error && "border-[#BA1A1A]",
                    onPrimary &&
                      "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                  )}
                />
              ) : type !== "file" ? (
                <Input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={cn(
                    error && "border-[#BA1A1A]",
                    onPrimary &&
                      "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                  )}
                />
              ) : (
                <div className="relative">
                  <Input
                    type="file"
                    placeholder={placeholder}
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      console.log("Выбранный файл:", file); // Проверим, выбран ли файл
                      field.onChange(file); // Передаем файл в react-hook-form
                      if (handleChange) handleChange(e); // Дополнительный обработчик
                    }}
                    disabled={disabled}
                  />
                  {field.value && (
                    <div className="text-sm mt-2 text-gray-500 absolute top-8">
                      Выбранный файл: {field.value.name}
                    </div>
                  )}
                </div>
              )}
            </>
          </FormControl>
          <FormMessage
            className={cn(
              "absolute -bottom-5 left-0 text-sm font-medium leading-[130%]",
              Boolean(error) && onPrimary ? "!text-white" : "text-[#BA1A1A]"
            )}
          >
            {error ? error.message : supporText}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
