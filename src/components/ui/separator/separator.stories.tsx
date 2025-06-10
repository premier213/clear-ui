import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from ".";

const meta: Meta<typeof Separator> = {
	title: "UI/Separator",
	component: Separator,
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
			description: "The orientation of the separator",
		},
		decorative: {
			control: "boolean",
			description: "Whether the separator is purely decorative",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
	args: {
		orientation: "horizontal",
	},
};

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<div className="flex h-5 items-center">
			<span>Left</span>
			<Separator {...args} className="mx-4" />
			<span>Right</span>
		</div>
	),
};

export const WithText: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<h4 className="font-medium text-sm leading-none">Radix Primitives</h4>
				<p className="text-muted-foreground text-sm">
					An open-source UI component library.
				</p>
			</div>
			<Separator />
			<div className="flex h-5 items-center space-x-4 text-sm">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	),
};

export const InCard: Story = {
	render: () => (
		<div className="w-[350px] rounded-lg border p-4">
			<div className="space-y-1">
				<h4 className="font-medium text-sm leading-none">Dimensions</h4>
				<p className="text-muted-foreground text-sm">
					Set the dimensions for the layer.
				</p>
			</div>
			<Separator className="my-4" />
			<div className="flex h-5 items-center space-x-4 text-sm">
				<div className="grid w-full grid-cols-3 gap-4">
					<div className="space-y-1">
						<p className="font-medium text-sm leading-none">Width</p>
						<p className="text-muted-foreground text-sm">100%</p>
					</div>
					<Separator orientation="vertical" />
					<div className="space-y-1">
						<p className="font-medium text-sm leading-none">Height</p>
						<p className="text-muted-foreground text-sm">100%</p>
					</div>
				</div>
			</div>
		</div>
	),
};

export const InNavigation: Story = {
	render: () => (
		<div className="w-[200px] space-y-4">
			<div className="space-y-1">
				<h4 className="font-medium text-sm leading-none">Navigation</h4>
				<p className="text-muted-foreground text-sm">
					Navigate through the application.
				</p>
			</div>
			<Separator />
			<nav className="space-y-2">
				<a href="/dashboard" className="block text-sm">
					Dashboard
				</a>
				<a href="/settings" className="block text-sm">
					Settings
				</a>
				<a href="/profile" className="block text-sm">
					Profile
				</a>
			</nav>
			<Separator />
			<div className="space-y-2">
				<a href="/help" className="block text-sm">
					Help
				</a>
				<a href="/about" className="block text-sm">
					About
				</a>
			</div>
		</div>
	),
};
