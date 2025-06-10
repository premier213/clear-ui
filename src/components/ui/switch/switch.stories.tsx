import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
	title: "UI/Switch",
	component: Switch,
	tags: ["autodocs"],
	argTypes: {
		checked: {
			control: "boolean",
			description: "The controlled checked state of the switch",
		},
		defaultChecked: {
			control: "boolean",
			description: "The default checked state of the switch",
		},
		disabled: {
			control: "boolean",
			description: "Whether the switch is disabled",
		},
		onCheckedChange: {
			action: "onCheckedChange",
			description: "Callback fired when the checked state changes",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		defaultChecked: false,
	},
};

export const Checked: Story = {
	args: {
		defaultChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		disabled: true,
		defaultChecked: true,
	},
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="flex items-center space-x-2">
			<Switch {...args} id="airplane-mode" />
			<label
				htmlFor="airplane-mode"
				className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Airplane Mode
			</label>
		</div>
	),
	args: {
		defaultChecked: false,
	},
};
