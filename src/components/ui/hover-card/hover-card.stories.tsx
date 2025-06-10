import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from ".";

const meta: Meta<typeof HoverCard> = {
	title: "UI/HoverCard",
	component: HoverCard,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger>@shadcn</HoverCardTrigger>
			<HoverCardContent>
				<div className="flex justify-between space-x-4">
					<div className="space-y-1">
						<h4 className="font-semibold text-sm">@shadcn</h4>
						<p className="text-sm">
							The creator of shadcn/ui and other open source projects.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-muted-foreground text-xs">
								Joined December 2021
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};

export const WithImage: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger>@radix-ui</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex justify-between space-x-4">
					<img
						src="https://github.com/radix-ui.png"
						alt="Radix UI"
						className="h-12 w-12 rounded-full"
					/>
					<div className="space-y-1">
						<h4 className="font-semibold text-sm">@radix-ui</h4>
						<p className="text-sm">
							Unstyled, accessible components for building high‑quality design
							systems and web apps in React.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-muted-foreground text-xs">
								Followed by you and 1,000 others
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};

export const WithStats: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger>React</HoverCardTrigger>
			<HoverCardContent>
				<div className="space-y-2">
					<h4 className="font-semibold text-sm">React</h4>
					<p className="text-sm">
						A JavaScript library for building user interfaces.
					</p>
					<div className="flex items-center gap-4 pt-2">
						<div className="space-y-1">
							<p className="text-muted-foreground text-xs">Stars</p>
							<p className="font-medium text-sm">200k+</p>
						</div>
						<div className="space-y-1">
							<p className="text-muted-foreground text-xs">Forks</p>
							<p className="font-medium text-sm">40k+</p>
						</div>
						<div className="space-y-1">
							<p className="text-muted-foreground text-xs">Contributors</p>
							<p className="font-medium text-sm">1.5k+</p>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};

export const WithLinks: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger>Documentation</HoverCardTrigger>
			<HoverCardContent>
				<div className="space-y-2">
					<h4 className="font-semibold text-sm">Quick Links</h4>
					<div className="flex flex-col space-y-1">
						<a
							href="/docs/getting-started"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Getting Started
						</a>
						<a
							href="/docs/components"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Components
						</a>
						<a
							href="/docs/api"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							API Reference
						</a>
						<a
							href="/docs/examples"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Examples
						</a>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};

export const WithCustomTrigger: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger>
				<button
					type="button"
					className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
				>
					Hover me
				</button>
			</HoverCardTrigger>
			<HoverCardContent>
				<div className="space-y-2">
					<h4 className="font-semibold text-sm">Custom Trigger</h4>
					<p className="text-sm">
						This hover card is triggered by a custom button component.
					</p>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};
