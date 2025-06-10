import { cn } from "@/lib/utils";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl" | null;

export interface SpinnerProps {
	className?: string;
	size?: SpinnerSize;
}

export function Spinner({ className, size = "md" }: SpinnerProps) {
	const sizeMap = {
		xs: "h-3 w-3",
		sm: "h-3.5 w-3.5",
		md: "h-4 w-4",
		lg: "h-5 w-5",
		xl: "h-6 w-6",
	};

	const spinnerSize = size ? sizeMap[size] : sizeMap.md;

	return (
		<svg
			className={cn("animate-spin", spinnerSize, className)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			data-oid="5.152on"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
				data-oid="o.j96gg"
			/>

			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				data-oid="pueb.y."
			/>
		</svg>
	);
}
