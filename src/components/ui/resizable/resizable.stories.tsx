import type { Meta, StoryObj } from "@storybook/react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from ".";

const meta: Meta<typeof ResizablePanelGroup> = {
	title: "UI/Resizable",
	component: ResizablePanelGroup,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
	render: () => (
		<div className="h-[200px] w-full">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={25}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Sidebar</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={75}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Content</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div className="h-[400px] w-full">
			<ResizablePanelGroup direction="vertical">
				<ResizablePanel defaultSize={25}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Header</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={75}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Content</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
};

export const Complex: Story = {
	render: () => (
		<div className="h-[400px] w-full">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={20}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Sidebar</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={80}>
					<ResizablePanelGroup direction="vertical">
						<ResizablePanel defaultSize={25}>
							<div className="flex h-full items-center justify-center p-6">
								<span className="font-semibold">Header</span>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={75}>
							<div className="flex h-full items-center justify-center p-6">
								<span className="font-semibold">Content</span>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
};

export const WithContent: Story = {
	render: () => (
		<div className="h-[400px] w-full">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={25}>
					<div className="flex h-full flex-col gap-4 p-4">
						<h4 className="font-medium text-sm">Navigation</h4>
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
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={75}>
					<div className="flex h-full flex-col gap-4 p-4">
						<h4 className="font-medium text-sm">Content Area</h4>
						<div className="grid gap-4">
							<div className="rounded-lg border p-4">
								<h5 className="font-medium text-sm">Section 1</h5>
								<p className="text-muted-foreground text-sm">
									This is a resizable content area.
								</p>
							</div>
							<div className="rounded-lg border p-4">
								<h5 className="font-medium text-sm">Section 2</h5>
								<p className="text-muted-foreground text-sm">
									You can resize the panels by dragging the handle.
								</p>
							</div>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
};
