import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-32 disabled:select-none [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer gap-none relative overflow-hidden font-medium text-primary-foreground",
  {
    variants: {
      size: {
        xs: "h-8 px-2 py-1 text-xs rounded-sm",
        sm: "h-10 px-4 py-2 text-sm rounded-sm",
        md: "h-12 px-6 py-2 text-md rounded-sm",
        lg: "h-14 px-8 py-2 text-lg rounded-sm",
        xl: "h-16 px-16 py-2 text-xl rounded-sm",
      },
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "text-gray-600 hover:bg-gray-800 hover:text-gray-50",
        tertiary: "bg-gray-900 text-gray-50 hover:bg-gray-600",
        text: "text-gray-950 underline underline-offset-4",
        "text-secondary":
          "text-secondary-foreground underline underline-offset-4",
        destructive: "bg-red-600 text-gray-50 hover:bg-red-700",
        "destructive-ghost": "text-red-600 hover:bg-red-600 hover:text-gray-50",
        "destructive-tertiary":
          "text-red-600 hover:bg-red-600 hover:text-gray-50",
        "destructive-text": "text-red-600 hover:underline",
        "destructive-secondary":
          "outline-[1.5px] outline-red-600 outline-solid text-red-600 hover:bg-red-600 hover:text-gray-50",
      },
      isLoading: {
        true: "cursor-wait",
        false: "",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      isLoading: false,
      block: false,
    },
  }
);
