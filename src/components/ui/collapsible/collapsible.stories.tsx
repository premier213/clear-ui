import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDownIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./index";

const meta = {
	title: "UI/Collapsible",
	component: Collapsible,
	tags: ["autodocs"],
	argTypes: {
		defaultOpen: {
			control: "boolean",
			description: "Whether the collapsible is open by default",
		},
	},
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Collapsible className="w-[350px] space-y-2">
			<div className="flex items-center justify-between space-x-4">
				<h4 className="font-semibold text-sm">
					@peduarte starred 3 repositories
				</h4>
				<CollapsibleTrigger className="rounded-md border p-2 hover:bg-accent hover:text-accent-foreground">
					<ChevronDownIcon className="h-4 w-4" />
					<span className="sr-only">Toggle</span>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="space-y-2">
				<div className="rounded-md border p-4">
					<h4 className="mb-1 font-medium text-sm">@radix-ui/primitives</h4>
					<p className="text-muted-foreground text-sm">
						Unstyled, accessible components for building high‑quality design
						systems and web apps in React.
					</p>
				</div>
				<div className="rounded-md border p-4">
					<h4 className="mb-1 font-medium text-sm">@radix-ui/colors</h4>
					<p className="text-muted-foreground text-sm">
						Beautiful, thought-out palettes with auto dark mode support.
					</p>
				</div>
				<div className="rounded-md border p-4">
					<h4 className="mb-1 font-medium text-sm">@stitches/react</h4>
					<p className="text-muted-foreground text-sm">
						CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a
						best-in-class developer experience.
					</p>
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
};

export const WithCustomTrigger: Story = {
	render: () => (
		<Collapsible className="w-[350px] space-y-2">
			<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-accent hover:text-accent-foreground">
				<span className="font-semibold text-sm">Click to expand</span>
				<ChevronDownIcon className="h-4 w-4" />
			</CollapsibleTrigger>
			<CollapsibleContent className="rounded-md border p-4">
				<p className="text-muted-foreground text-sm">
					This is some content that can be expanded and collapsed. The trigger
					is styled as a full-width button.
				</p>
			</CollapsibleContent>
		</Collapsible>
	),
};

export const DefaultOpen: Story = {
	args: {
		defaultOpen: true,
	},
	render: (args) => (
		<Collapsible {...args} className="w-[350px] space-y-2">
			<div className="flex items-center justify-between space-x-4">
				<h4 className="font-semibold text-sm">Expanded by default</h4>
				<CollapsibleTrigger className="rounded-md border p-2 hover:bg-accent hover:text-accent-foreground">
					<ChevronDownIcon className="h-4 w-4" />
					<span className="sr-only">Toggle</span>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="space-y-2">
				<div className="rounded-md border p-4">
					<p className="text-muted-foreground text-sm">
						This collapsible section is open by default. You can still toggle it
						using the trigger button.
					</p>
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
};

export const WithAnimation: Story = {
	render: () => (
		<Collapsible className="w-[350px] space-y-2">
			<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-accent hover:text-accent-foreground">
				<span className="font-semibold text-sm">Animated content</span>
				<ChevronDownIcon className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
			</CollapsibleTrigger>
			<CollapsibleContent className="space-y-2">
				<div className="rounded-md border p-4">
					<p className="text-muted-foreground text-sm">
						This example shows how to add animations to the collapsible content
						and trigger icon. The chevron rotates when the content is expanded.
					</p>
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
};
