import type { VariantProps } from "class-variance-authority";
import type * as React from "react";
import type { buttonVariants } from "./variants";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isLoading?: boolean;
	loadingText?: string;
	leftSection?: React.ReactNode;
	rightSection?: React.ReactNode;
	block?: boolean;
}
