import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from ".";

const meta: Meta<typeof ScrollArea> = {
	title: "UI/ScrollArea",
	component: ScrollArea,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
	render: () => (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
			<div className="space-y-4">
				<h4 className="font-medium text-sm leading-none">Tags</h4>
				<div className="text-sm">
					{Array.from({ length: 50 }).map((_, i) => (
						<div key={`item-${i + 1}`} className="mb-2">
							<div className="rounded-md border p-2">
								<div className="font-medium">Tag {i + 1}</div>
								<div className="text-muted-foreground">
									This is a description for tag {i + 1}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</ScrollArea>
	),
};

export const WithHorizontalScroll: Story = {
	render: () => (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border">
			<div className="flex w-[800px] p-4">
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={`item-${i + 1}`}
						className="mr-4 flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-md border"
					>
						Item {i + 1}
					</div>
				))}
			</div>
		</ScrollArea>
	),
};

export const WithBothScrolls: Story = {
	render: () => (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border">
			<div className="flex w-[800px] p-4">
				{Array.from({ length: 20 }).map((_, i) => (
					<div key={`item-${i + 1}`} className="mr-4">
						{Array.from({ length: 20 }).map((_, j) => (
							<div
								key={`item-${i * 20 + j + 1}`}
								className="mb-4 flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-md border"
							>
								Item {i * 20 + j + 1}
							</div>
						))}
					</div>
				))}
			</div>
		</ScrollArea>
	),
};

export const WithContent: Story = {
	render: () => (
		<ScrollArea className="h-[300px] w-[350px] rounded-md border">
			<div className="p-4">
				<h4 className="mb-4 font-semibold text-lg">Scrollable Content</h4>
				<div className="space-y-4">
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={`item-${i + 1}`} className="rounded-lg border p-4">
							<h5 className="mb-2 font-medium text-sm">Section {i + 1}</h5>
							<p className="text-muted-foreground text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					))}
				</div>
			</div>
		</ScrollArea>
	),
};

export const WithCustomScrollbar: Story = {
	render: () => (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border">
			<div className="p-4">
				<div className="space-y-4">
					{Array.from({ length: 20 }).map((_, i) => (
						<div
							key={`item-${i + 1}`}
							className="flex items-center justify-between rounded-md border p-4"
						>
							<div className="font-medium">Item {i + 1}</div>
							<div className="text-muted-foreground text-sm">
								Description for item {i + 1}
							</div>
						</div>
					))}
				</div>
			</div>
		</ScrollArea>
	),
};
