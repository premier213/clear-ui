import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-32 disabled:select-none [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:border-ring focus-visible:ring-gray-200 focus-visible:ring-4 aria-invalid:ring-destructive/20 aria-invalid:border-destructive cursor-pointer gap-none relative overflow-hidden",
	{
		variants: {
			size: {
				xs: "h-6 rounded-xs px-5xs py-6xs txt-xs-s",
				sm: "h-8 rounded-sm px-4xs py-6xs txt-sm-s",
				md: "h-10 rounded-sm px-3xs py-5xs txt-sm-s",
				lg: "h-12 rounded-sm px-3xs py-4xs txt-md-s",
				xl: "h-14 rounded-sm px-xs py-3xs txt-md-s",
			},
			variant: {
				primary: "bg-primary-700 text-gray-50 hover:bg-primary-900",
				secondary:
					"outline-[1.5px] outline-primary-700 outline-solid text-primary-700 hover:bg-primary-700 hover:text-gray-50",
				ghost: "text-gray-600 hover:bg-gray-800 hover:text-gray-50",
				tertiary: "bg-gray-900 text-gray-50 hover:bg-gray-600",
				text: "text-gray-950 underline underline-offset-4",
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
	},
);
