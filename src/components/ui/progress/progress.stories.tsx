import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";

const meta: Meta<typeof Progress> = {
	title: "UI/Progress",
	component: Progress,
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: "number",
			description: "The value of the progress indicator (0-100)",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
	args: {
		value: 33,
	},
};

export const WithLabel: Story = {
	render: () => (
		<div className="space-y-2">
			<div className="flex items-center justify-between">
				<span className="font-medium text-sm">Loading...</span>
				<span className="text-muted-foreground text-sm">33%</span>
			</div>
			<Progress value={33} />
		</div>
	),
};

export const WithSteps: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="font-medium text-sm">Step 1 of 3</span>
					<span className="text-muted-foreground text-sm">33%</span>
				</div>
				<Progress value={33} />
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="font-medium text-sm">Step 2 of 3</span>
					<span className="text-muted-foreground text-sm">66%</span>
				</div>
				<Progress value={66} />
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="font-medium text-sm">Step 3 of 3</span>
					<span className="text-muted-foreground text-sm">100%</span>
				</div>
				<Progress value={100} />
			</div>
		</div>
	),
};

export const InCard: Story = {
	render: () => (
		<div className="w-[350px] rounded-lg border p-4">
			<h4 className="mb-4 font-medium text-sm leading-none">Storage Usage</h4>
			<div className="space-y-4">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<span className="font-medium text-sm">Documents</span>
						<span className="text-muted-foreground text-sm">45%</span>
					</div>
					<Progress value={45} />
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<span className="font-medium text-sm">Photos</span>
						<span className="text-muted-foreground text-sm">78%</span>
					</div>
					<Progress value={78} />
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<span className="font-medium text-sm">Videos</span>
						<span className="text-muted-foreground text-sm">23%</span>
					</div>
					<Progress value={23} />
				</div>
			</div>
		</div>
	),
};

export const DifferentSizes: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="space-y-2">
				<span className="font-medium text-sm">Small</span>
				<Progress value={33} className="h-1" />
			</div>
			<div className="space-y-2">
				<span className="font-medium text-sm">Default</span>
				<Progress value={33} />
			</div>
			<div className="space-y-2">
				<span className="font-medium text-sm">Large</span>
				<Progress value={33} className="h-4" />
			</div>
		</div>
	),
};
