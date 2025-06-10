import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "UI/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger>Hover me</TooltipTrigger>
			<TooltipContent>This is a tooltip</TooltipContent>
		</Tooltip>
	),
};

export const WithDelay: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger>Hover me (with delay)</TooltipTrigger>
			<TooltipContent sideOffset={5}>
				This tooltip appears after a short delay
			</TooltipContent>
		</Tooltip>
	),
};

export const DifferentPositions: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-8">
			<Tooltip>
				<TooltipTrigger>Top Tooltip</TooltipTrigger>
				<TooltipContent side="top">This appears on top</TooltipContent>
			</Tooltip>

			<div className="flex gap-8">
				<Tooltip>
					<TooltipTrigger>Left Tooltip</TooltipTrigger>
					<TooltipContent side="left">This appears on the left</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger>Right Tooltip</TooltipTrigger>
					<TooltipContent side="right">
						This appears on the right
					</TooltipContent>
				</Tooltip>
			</div>

			<Tooltip>
				<TooltipTrigger>Bottom Tooltip</TooltipTrigger>
				<TooltipContent side="bottom">
					This appears on the bottom
				</TooltipContent>
			</Tooltip>
		</div>
	),
};

export const CustomStyling: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
				Custom Button
			</TooltipTrigger>
			<TooltipContent className="bg-destructive text-destructive-foreground">
				This tooltip has custom styling
			</TooltipContent>
		</Tooltip>
	),
};

export const WithIcon: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger className="rounded-full bg-muted p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="size-4"
					aria-label="Information icon"
				>
					<title>Information icon</title>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 16v-4" />
					<path d="M12 8h.01" />
				</svg>
			</TooltipTrigger>
			<TooltipContent>Click for more information</TooltipContent>
		</Tooltip>
	),
};

export const InteractiveContent: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger>Interactive Tooltip</TooltipTrigger>
			<TooltipContent className="p-4">
				<div className="space-y-2">
					<p className="font-medium">Interactive Content</p>
					<p className="text-muted-foreground text-xs">
						This tooltip contains multiple elements
					</p>
					<button
						type="button"
						className="mt-2 rounded-md bg-primary px-2 py-1 text-primary-foreground text-xs"
					>
						Click me
					</button>
				</div>
			</TooltipContent>
		</Tooltip>
	),
};

export const MultipleTooltips: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Tooltip>
				<TooltipTrigger className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
					Button 1
				</TooltipTrigger>
				<TooltipContent>First tooltip</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground">
					Button 2
				</TooltipTrigger>
				<TooltipContent>Second tooltip</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger className="rounded-md bg-accent px-4 py-2 text-accent-foreground">
					Button 3
				</TooltipTrigger>
				<TooltipContent>Third tooltip</TooltipContent>
			</Tooltip>
		</div>
	),
};
