import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
	title: "UI/Badge",
	component: Badge,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "destructive", "outline"],
			description: "The visual style of the badge",
		},
		asChild: {
			control: "boolean",
			description: "Whether to render as a child component",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: "Badge",
		variant: "default",
	},
};

export const Secondary: Story = {
	args: {
		children: "Badge",
		variant: "secondary",
	},
};

export const Destructive: Story = {
	args: {
		children: "Badge",
		variant: "destructive",
	},
};

export const Outline: Story = {
	args: {
		children: "Badge",
		variant: "outline",
	},
};

export const WithIcon: Story = {
	render: () => (
		<div className="flex gap-2">
			<Badge>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					role="img"
				>
					<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
				</svg>
				New
			</Badge>
			<Badge variant="secondary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					role="img"
				>
					<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
				</svg>
				Updated
			</Badge>
		</div>
	),
};

export const AsLink: Story = {
	render: () => (
		<Badge asChild>
			<a href="/">Link Badge</a>
		</Badge>
	),
};
