import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Input } from "../input";
import { Label } from "./index";

const meta: Meta<typeof Label> = {
	title: "UI/Label",
	component: Label,
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the label",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
	render: (args) => (
		<div className="grid gap-1.5">
			<Label htmlFor="email" {...args}>
				Email
			</Label>
			<Input id="email" type="email" placeholder="Enter your email" />
		</div>
	),
};

export const WithCheckbox: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" />
			<Label htmlFor="terms" {...args}>
				Accept terms and conditions
			</Label>
		</div>
	),
};

export const Required: Story = {
	render: (args) => (
		<div className="grid gap-1.5">
			<Label htmlFor="username" {...args}>
				Username <span className="text-destructive">*</span>
			</Label>
			<Input id="username" placeholder="Enter your username" />
		</div>
	),
};

export const WithDescription: Story = {
	render: (args) => (
		<div className="grid gap-1.5">
			<Label htmlFor="password" {...args}>
				Password
			</Label>
			<Input id="password" type="password" placeholder="Enter your password" />
			<p className="text-muted-foreground text-sm">
				Must be at least 8 characters long
			</p>
		</div>
	),
};

export const Disabled: Story = {
	render: (args) => (
		<div className="grid gap-1.5">
			<Label htmlFor="disabled" className="text-muted-foreground" {...args}>
				Disabled Field
			</Label>
			<Input id="disabled" disabled placeholder="This field is disabled" />
		</div>
	),
};

export const CustomStyling: Story = {
	render: (args) => (
		<div className="grid gap-1.5">
			<Label
				htmlFor="custom"
				className="font-bold text-lg text-primary"
				{...args}
			>
				Custom Styled Label
			</Label>
			<Input id="custom" placeholder="Enter something" />
		</div>
	),
};
