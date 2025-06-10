import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";

const meta: Meta<typeof Slider> = {
	title: "UI/Slider",
	component: Slider,
	tags: ["autodocs"],
	argTypes: {
		defaultValue: {
			control: "object",
			description: "The default value of the slider",
		},
		value: {
			control: "object",
			description: "The controlled value of the slider",
		},
		min: {
			control: "number",
			description: "The minimum value of the slider",
		},
		max: {
			control: "number",
			description: "The maximum value of the slider",
		},
		step: {
			control: "number",
			description: "The step value of the slider",
		},
		disabled: {
			control: "boolean",
			description: "Whether the slider is disabled",
		},
		onValueChange: {
			action: "onValueChange",
			description: "Callback fired when the value changes",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
	args: {
		defaultValue: [50],
	},
};

export const Range: Story = {
	args: {
		defaultValue: [25, 75],
	},
};

export const WithSteps: Story = {
	args: {
		defaultValue: [50],
		step: 10,
	},
};

export const CustomRange: Story = {
	args: {
		defaultValue: [50],
		min: 0,
		max: 200,
	},
};

export const Disabled: Story = {
	args: {
		defaultValue: [50],
		disabled: true,
	},
};

export const WithLabels: Story = {
	render: (args) => (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<span className="font-medium text-sm">Volume</span>
				<span className="text-muted-foreground text-sm">50%</span>
			</div>
			<Slider {...args} />
		</div>
	),
	args: {
		defaultValue: [50],
	},
};

export const Vertical: Story = {
	render: (args) => (
		<div className="h-[200px]">
			<Slider {...args} orientation="vertical" />
		</div>
	),
	args: {
		defaultValue: [50],
	},
};

export const VerticalRange: Story = {
	render: (args) => (
		<div className="h-[200px]">
			<Slider {...args} orientation="vertical" />
		</div>
	),
	args: {
		defaultValue: [25, 75],
	},
};
