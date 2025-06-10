import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from ".";

const meta: Meta<typeof AspectRatio> = {
	title: "UI/AspectRatio",
	component: AspectRatio,
	tags: ["autodocs"],
	argTypes: {
		ratio: {
			control: "number",
			description: "The ratio of width to height",
			defaultValue: 16 / 9,
		},
	},
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<AspectRatio {...args}>
				<img
					src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
					alt="Landscape by Tobias Tullius"
					className="h-full w-full rounded-md object-cover"
				/>
			</AspectRatio>
		</div>
	),
	args: {
		ratio: 16 / 9,
	},
};

export const Square: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<AspectRatio {...args}>
				<img
					src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
					alt="Landscape by Tobias Tullius"
					className="h-full w-full rounded-md object-cover"
				/>
			</AspectRatio>
		</div>
	),
	args: {
		ratio: 1,
	},
};

export const Portrait: Story = {
	render: (args) => (
		<div className="w-[300px]">
			<AspectRatio {...args}>
				<img
					src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
					alt="Landscape by Tobias Tullius"
					className="h-full w-full rounded-md object-cover"
				/>
			</AspectRatio>
		</div>
	),
	args: {
		ratio: 3 / 4,
	},
};
