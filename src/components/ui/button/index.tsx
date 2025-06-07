"use client";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { Spinner } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export function Button({
	className,
	variant,
	size,
	isLoading = false,
	block = false,
	children,
	onClick,
	asChild = false,
	leftSection,
	rightSection,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const createRippleEffect = (event: React.MouseEvent) => {
		const button = buttonRef.current;
		if (!button) return;

		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		const rect = button.getBoundingClientRect();

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - rect.left - radius}px`;
		circle.style.top = `${event.clientY - rect.top - radius}px`;
		circle.className =
			"absolute rounded-full bg-white/20 pointer-events-none animate-ripple";

		const ripple = button.querySelector(".animate-ripple");
		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
		setTimeout(() => {
			if (circle) {
				circle.remove();
			}
		}, 600);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		createRippleEffect(event);
		if (!isLoading && onClick) {
			onClick(event);
		}
	};

	return (
		<Comp
			data-slot="button"
			disabled={props.disabled}
			ref={buttonRef}
			onClick={handleClick}
			className={cn(
				buttonVariants({
					variant,
					size,
					isLoading,
					block,
					className,
				}),
			)}
			{...props}
		>
			<div className="relative flex h-full w-full items-center justify-center overflow-hidden">
				<div
					className={cn(
						"absolute inset-0 flex w-full transform items-center justify-center transition-all duration-300",
						isLoading
							? "translate-y-0 opacity-100"
							: "-translate-y-full opacity-0",
					)}
				>
					<Spinner className="animate-spin" size={size} />
				</div>
				<div
					className={cn(
						"flex w-full transform items-center justify-center transition-all duration-300",
						isLoading ? "invisible opacity-0" : "visible opacity-100",
					)}
					aria-hidden={isLoading}
				>
					{leftSection && (
						<span
							className={cn({
								"pr-1": size === "xs",
								"pr-2": size === "sm",
								"pr-3": size === "md",
								"pr-4": size === "lg",
								"pr-5": size === "xl",
							})}
						>
							{leftSection}
						</span>
					)}
					{children}
					{rightSection && (
						<span
							className={cn({
								"pl-1": size === "xs",
								"pl-2": size === "sm",
								"pl-3": size === "md",
								"pl-4": size === "lg",
								"pl-5": size === "xl",
							})}
						>
							{rightSection}
						</span>
					)}
				</div>
			</div>
		</Comp>
	);
}

export { buttonVariants };
