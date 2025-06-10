import type { Meta, StoryObj } from "@storybook/react";
import { addDays, format } from "date-fns";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
	title: "UI/Calendar",
	component: Calendar,
	tags: ["autodocs"],
	argTypes: {
		mode: {
			control: "select",
			options: ["single", "range", "multiple"],
			description: "The selection mode of the calendar",
		},
		showOutsideDays: {
			control: "boolean",
			description: "Whether to show days outside the current month",
		},
		captionLayout: {
			control: "select",
			options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
			description: "The layout of the month caption",
		},
		buttonVariant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
			description: "The variant of the navigation buttons",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
	args: {
		mode: "single",
		showOutsideDays: true,
		captionLayout: "label",
		buttonVariant: "ghost",
	},
};

export const WithRange: Story = {
	args: {
		mode: "range",
		showOutsideDays: true,
		captionLayout: "label",
		buttonVariant: "ghost",
		selected: {
			from: new Date(),
			to: addDays(new Date(), 7),
		},
	},
};

export const WithMultiple: Story = {
	args: {
		mode: "multiple",
		showOutsideDays: true,
		captionLayout: "label",
		buttonVariant: "ghost",
		selected: [new Date(), addDays(new Date(), 2), addDays(new Date(), 4)],
	},
};

export const WithDropdown: Story = {
	args: {
		mode: "single",
		showOutsideDays: true,
		captionLayout: "dropdown",
		buttonVariant: "ghost",
	},
};

export const WithButtons: Story = {
	args: {
		mode: "single",
		showOutsideDays: true,
		captionLayout: "label",
		buttonVariant: "ghost",
	},
};

export const WithoutOutsideDays: Story = {
	args: {
		mode: "single",
		showOutsideDays: false,
		captionLayout: "label",
		buttonVariant: "ghost",
	},
};

export const WithCustomFormatters: Story = {
	args: {
		mode: "single",
		showOutsideDays: true,
		captionLayout: "label",
		buttonVariant: "ghost",
		formatters: {
			formatMonthDropdown: (date) => format(date, "MMMM"),
			formatYearDropdown: (date) => format(date, "yyyy"),
		},
	},
};
