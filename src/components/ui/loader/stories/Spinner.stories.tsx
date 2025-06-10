import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../spinner";

const meta: Meta<typeof Spinner> = {
	title: "UI/Loader/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
			description: "Size of the spinner",
		},
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the spinner",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
	args: {
		size: "md",
	},
};

export const ExtraSmall: Story = {
	args: {
		size: "xs",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const ExtraLarge: Story = {
	args: {
		size: "xl",
	},
};

export const CustomColor: Story = {
	args: {
		size: "md",
		className: "text-blue-500",
	},
};
