import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Theme/Global Styles",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<h2 className="mb-4 font-bold text-xl">Background Colors</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<div className="h-20 rounded-lg border bg-background p-4">
							<p className="text-foreground">Background</p>
						</div>
						<div className="h-20 rounded-lg border bg-card p-4">
							<p className="text-card-foreground">Card</p>
						</div>
						<div className="h-20 rounded-lg border bg-popover p-4">
							<p className="text-popover-foreground">Popover</p>
						</div>
					</div>
					<div className="space-y-2">
						<div className="h-20 rounded-lg border bg-muted p-4">
							<p className="text-muted-foreground">Muted</p>
						</div>
						<div className="h-20 rounded-lg border bg-accent p-4">
							<p className="text-accent-foreground">Accent</p>
						</div>
						<div className="h-20 rounded-lg border bg-destructive p-4">
							<p className="text-destructive-foreground">Destructive</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h2 className="mb-4 font-bold text-xl">Chart Colors</h2>
				<div className="grid grid-cols-5 gap-4">
					<div className="h-20 rounded-lg bg-[var(--chart-1)] p-4">
						<p className="text-white">Chart 1</p>
					</div>
					<div className="h-20 rounded-lg bg-[var(--chart-2)] p-4">
						<p className="text-white">Chart 2</p>
					</div>
					<div className="h-20 rounded-lg bg-[var(--chart-3)] p-4">
						<p className="text-white">Chart 3</p>
					</div>
					<div className="h-20 rounded-lg bg-[var(--chart-4)] p-4">
						<p className="text-white">Chart 4</p>
					</div>
					<div className="h-20 rounded-lg bg-[var(--chart-5)] p-4">
						<p className="text-white">Chart 5</p>
					</div>
				</div>
			</div>

			<div>
				<h2 className="mb-4 font-bold text-xl">Sidebar Colors</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<div className="h-20 rounded-lg border bg-[var(--sidebar)] p-4">
							<p className="text-[var(--sidebar-foreground)]">Sidebar</p>
						</div>
						<div className="h-20 rounded-lg border bg-[var(--sidebar-primary)] p-4">
							<p className="text-[var(--sidebar-primary-foreground)]">
								Sidebar Primary
							</p>
						</div>
					</div>
					<div className="space-y-2">
						<div className="h-20 rounded-lg border bg-[var(--sidebar-accent)] p-4">
							<p className="text-[var(--sidebar-accent-foreground)]">
								Sidebar Accent
							</p>
						</div>
						<div className="h-20 rounded-lg border-2 border-[var(--sidebar-border)] p-4">
							<p>Sidebar Border</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	),
};

export const BorderRadius: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<h2 className="mb-4 font-bold text-xl">Border Radius</h2>
				<div className="grid grid-cols-4 gap-4">
					<div className="h-20 rounded-[var(--radius-sm)] bg-muted p-4">
						<p>Small</p>
					</div>
					<div className="h-20 rounded-[var(--radius-md)] bg-muted p-4">
						<p>Medium</p>
					</div>
					<div className="h-20 rounded-[var(--radius-lg)] bg-muted p-4">
						<p>Large</p>
					</div>
					<div className="h-20 rounded-[var(--radius-xl)] bg-muted p-4">
						<p>Extra Large</p>
					</div>
				</div>
			</div>
		</div>
	),
};

export const Typography: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<h2 className="mb-4 font-bold text-xl">Font Family</h2>
				<div className="space-y-4">
					<p className="text-2xl">Vazirmatn Regular</p>
					<p className="font-bold text-2xl">Vazirmatn Bold</p>
				</div>
			</div>
		</div>
	),
};

export const Animations: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<h2 className="mb-4 font-bold text-xl">Ripple Animation</h2>
				<div className="relative h-20 w-20 animate-ripple rounded-full bg-primary">
					<div
						className="absolute inset-0 animate-ripple rounded-full bg-primary/20"
						style={{ animationDelay: "0.2s" }}
					/>
					<div
						className="absolute inset-0 animate-ripple rounded-full bg-primary/10"
						style={{ animationDelay: "0.4s" }}
					/>
				</div>
			</div>
		</div>
	),
};
