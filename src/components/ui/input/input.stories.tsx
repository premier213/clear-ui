import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
	title: "UI/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["text", "password", "email", "number", "tel", "url"],
		},
		disabled: {
			control: "boolean",
		},
		placeholder: {
			control: "text",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Enter text...",
	},
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="space-y-2">
			<label htmlFor="input" className="font-medium text-sm">
				Email
			</label>
			<Input id="input" type="email" {...args} />
		</div>
	),
	args: {
		placeholder: "Enter your email",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: "Disabled input",
	},
};

export const WithError: Story = {
	args: {
		"aria-invalid": true,
		placeholder: "Error state",
		value: "Invalid input",
	},
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Enter password",
	},
};
