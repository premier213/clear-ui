import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta = {
	title: "UI/DatePicker",
	component: DatePicker,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
	args: {
		placeholder: "Select date",
	},
};

export const WithDate: Story = {
	args: {
		date: new Date("2024-03-15"),
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: "Date picker disabled",
	},
};

export const CustomPlaceholder: Story = {
	args: {
		placeholder: "Choose your birthday",
	},
};

export const WithCustomClassName: Story = {
	args: {
		className: "bg-primary text-primary-foreground hover:bg-primary/90",
		placeholder: "Custom styled date picker",
	},
};
