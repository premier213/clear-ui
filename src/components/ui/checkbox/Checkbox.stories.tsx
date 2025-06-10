import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
	title: "UI/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Whether the checkbox is disabled",
		},
		checked: {
			control: "boolean",
			description: "Whether the checkbox is checked",
		},
		"aria-invalid": {
			control: "boolean",
			description: "Whether the checkbox is in an invalid state",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" {...args} />
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
};

export const Checked: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms-checked" defaultChecked {...args} />
			<Label htmlFor="terms-checked">Accept terms and conditions</Label>
		</div>
	),
};

export const Disabled: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms-disabled" disabled {...args} />
			<Label htmlFor="terms-disabled" className="text-muted-foreground">
				Accept terms and conditions
			</Label>
		</div>
	),
};

export const Invalid: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms-invalid" aria-invalid {...args} />
			<Label htmlFor="terms-invalid" className="text-destructive">
				Accept terms and conditions
			</Label>
		</div>
	),
};

export const WithDescription: Story = {
	render: (args) => (
		<div className="grid gap-1.5">
			<div className="flex items-center space-x-2">
				<Checkbox id="terms-desc" {...args} />
				<Label htmlFor="terms-desc">Accept terms and conditions</Label>
			</div>
			<p className="text-muted-foreground text-sm">
				By checking this box, you agree to our terms of service and privacy
				policy.
			</p>
		</div>
	),
};

export const MultipleCheckboxes: Story = {
	render: (args) => (
		<div className="grid gap-4">
			<div className="flex items-center space-x-2">
				<Checkbox id="terms-1" {...args} />
				<Label htmlFor="terms-1">Accept terms and conditions</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox id="terms-2" {...args} />
				<Label htmlFor="terms-2">Subscribe to newsletter</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox id="terms-3" {...args} />
				<Label htmlFor="terms-3">Share data with partners</Label>
			</div>
		</div>
	),
};
