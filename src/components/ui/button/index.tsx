import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { useCallback } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
			block: {
				true: "w-full",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			block: false,
		},
	},
);

type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

function Button({
	className,
	variant,
	size,
	block,
	asChild = false,
	onClick,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			onClick?.(e);
			if (!asChild) {
				const button = e.currentTarget;
				const rect = button.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				const ripple = document.createElement("span");
				ripple.className =
					"absolute block rounded-full bg-white/20 animate-ripple";
				ripple.style.left = `${x}px`;
				ripple.style.top = `${y}px`;
				ripple.style.width = "100px";
				ripple.style.height = "100px";
				ripple.style.marginLeft = "-50px";
				ripple.style.marginTop = "-50px";
				button.appendChild(ripple);

				ripple.addEventListener("animationend", () => {
					ripple.remove();
				});
			}
		},
		[asChild, onClick],
	);

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, block, className }))}
			onClick={handleClick}
			{...props}
		>
			{props.children}
		</Comp>
	);
}

export { Button, buttonVariants };
