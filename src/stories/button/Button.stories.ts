import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"ghost",
				"tertiary",
				"text",
				"destructive",
				"destructive-ghost",
				"destructive-tertiary",
				"destructive-text",
				"destructive-secondary",
			],
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		isLoading: {
			control: "boolean",
		},
		block: {
			control: "boolean",
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: "primary",
		children: "تست دکمه",
		size: "xs",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "تست دکمه",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "تست دکمه",
	},
};

export const Loading: Story = {
	args: {
		variant: "primary",
		isLoading: true,
		children: "تست دکمه",
	},
};

export const WithIcons: Story = {
	args: {
		variant: "primary",

		leftSection: React.createElement(ArrowLeft, {
			size: 20,
		}),

		rightSection: React.createElement(ArrowRight, {
			size: 20,
		}),

		children: "تست دکمه",
		size: "xl",
	},
};

export const Block: Story = {
	args: {
		variant: "primary",
		block: true,
		children: "دکمه",
	},
};
