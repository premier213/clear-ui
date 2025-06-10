import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
	title: "UI/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the skeleton",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	args: {
		className: "h-4 w-[250px]",
	},
};

export const Card: Story = {
	render: () => (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};

export const Avatar: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};

export const Form: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="space-y-2">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-10 w-full" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-10 w-full" />
			</div>
			<Skeleton className="h-10 w-[100px]" />
		</div>
	),
};

export const Table: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center space-x-4">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-4 w-[100px]" />
			</div>
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={`item-${i + 1}`} className="flex items-center space-x-4">
					<Skeleton className="h-4 w-[100px]" />
					<Skeleton className="h-4 w-[100px]" />
					<Skeleton className="h-4 w-[100px]" />
				</div>
			))}
		</div>
	),
};
