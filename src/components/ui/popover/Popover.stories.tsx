import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "UI/Popover",
	component: Popover,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<Popover {...args}>
			<PopoverTrigger asChild>
				<Button variant="outline">Open Popover</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Dimensions</h4>
						<p className="text-muted-foreground text-sm">
							Set the dimensions for the layer.
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="width" className="text-sm">
								Width
							</label>
							<input
								id="width"
								defaultValue="100%"
								className="col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="height" className="text-sm">
								Height
							</label>
							<input
								id="height"
								defaultValue="25px"
								className="col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background"
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
};

export const WithForm: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<Popover {...args}>
			<PopoverTrigger asChild>
				<Button variant="outline">Open Settings</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Settings</h4>
						<p className="text-muted-foreground text-sm">
							Configure your preferences.
						</p>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center justify-between">
							<label htmlFor="notifications" className="text-sm">
								Notifications
							</label>
							<input
								type="checkbox"
								id="notifications"
								className="h-4 w-4 rounded border-gray-300"
							/>
						</div>
						<div className="flex items-center justify-between">
							<label htmlFor="dark-mode" className="text-sm">
								Dark Mode
							</label>
							<input
								type="checkbox"
								id="dark-mode"
								className="h-4 w-4 rounded border-gray-300"
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
};

export const WithList: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<Popover {...args}>
			<PopoverTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</PopoverTrigger>
			<PopoverContent className="w-60">
				<div className="grid gap-2">
					<div className="px-2 py-1.5 font-semibold text-sm">Actions</div>
					<div className="grid gap-1">
						<button
							type="button"
							className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-4 w-4"
								aria-label="Edit icon"
							>
								<title>Edit icon</title>
								<path d="M12 20h9" />
								<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
							</svg>
							Edit
						</button>
						<button
							type="button"
							className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-4 w-4"
								aria-label="Delete icon"
							>
								<title>Delete icon</title>
								<path d="M3 6h18" />
								<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
								<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
							</svg>
							Delete
						</button>
						<button
							type="button"
							className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-4 w-4"
								aria-label="Share icon"
							>
								<title>Share icon</title>
								<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
								<polyline points="16 6 12 2 8 6" />
								<line x1="12" y1="2" x2="12" y2="15" />
							</svg>
							Share
						</button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
};

export const WithCustomPosition: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<div className="flex items-center justify-center gap-4">
			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">Top</Button>
				</PopoverTrigger>
				<PopoverContent side="top" className="w-40">
					<p className="text-sm">This popover appears on top</p>
				</PopoverContent>
			</Popover>

			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">Right</Button>
				</PopoverTrigger>
				<PopoverContent side="right" className="w-40">
					<p className="text-sm">This popover appears on the right</p>
				</PopoverContent>
			</Popover>

			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">Bottom</Button>
				</PopoverTrigger>
				<PopoverContent side="bottom" className="w-40">
					<p className="text-sm">This popover appears on the bottom</p>
				</PopoverContent>
			</Popover>

			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">Left</Button>
				</PopoverTrigger>
				<PopoverContent side="left" className="w-40">
					<p className="text-sm">This popover appears on the left</p>
				</PopoverContent>
			</Popover>
		</div>
	),
};

export const WithCustomAlignment: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<div className="flex items-center justify-center gap-4">
			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">Start</Button>
				</PopoverTrigger>
				<PopoverContent align="start" className="w-40">
					<p className="text-sm">This popover is aligned to the start</p>
				</PopoverContent>
			</Popover>

			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">Center</Button>
				</PopoverTrigger>
				<PopoverContent align="center" className="w-40">
					<p className="text-sm">This popover is aligned to the center</p>
				</PopoverContent>
			</Popover>

			<Popover {...args}>
				<PopoverTrigger asChild>
					<Button variant="outline">End</Button>
				</PopoverTrigger>
				<PopoverContent align="end" className="w-40">
					<p className="text-sm">This popover is aligned to the end</p>
				</PopoverContent>
			</Popover>
		</div>
	),
};
