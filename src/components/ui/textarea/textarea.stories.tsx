import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./index";

const meta: Meta<typeof Textarea> = {
	title: "UI/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	argTypes: {
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		required: { control: "boolean" },
		rows: { control: "number" },
		className: { control: "text" },
		"aria-invalid": { control: "boolean" },
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		placeholder: "Type your message here...",
	},
};

export const WithValue: Story = {
	args: {
		defaultValue: "This is a pre-filled textarea with some content.",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "This textarea is disabled",
		disabled: true,
	},
};

export const Required: Story = {
	args: {
		placeholder: "This field is required",
		required: true,
	},
};

export const Invalid: Story = {
	args: {
		placeholder: "This field has an error",
		"aria-invalid": true,
		defaultValue: "Invalid input",
	},
};

export const CustomRows: Story = {
	args: {
		placeholder: "This textarea has 5 rows",
		rows: 5,
	},
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="space-y-2">
			<label htmlFor="textarea" className="font-medium text-sm">
				Description
			</label>
			<Textarea id="textarea" {...args} />
		</div>
	),
	args: {
		placeholder: "Enter your description...",
	},
};

export const CustomStyling: Story = {
	args: {
		placeholder: "Custom styled textarea",
		className: "bg-slate-100 border-slate-300 focus:border-blue-500",
	},
};
