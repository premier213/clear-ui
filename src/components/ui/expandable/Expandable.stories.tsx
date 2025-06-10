import type { Meta, StoryObj } from "@storybook/react";
import {
	Expandable,
	ExpandableCard,
	ExpandableCardContent,
	ExpandableCardFooter,
	ExpandableCardHeader,
	ExpandableContent,
	ExpandableTrigger,
} from "./index";

const meta: Meta<typeof Expandable> = {
	title: "UI/Expandable",
	component: Expandable,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Expandable>;

// Basic expandable with fade animation
export const Basic: Story = {
	render: () => (
		<Expandable>
			<ExpandableTrigger>
				<button
					type="button"
					className="rounded-md bg-blue-500 px-4 py-2 text-white"
				>
					Toggle Content
				</button>
			</ExpandableTrigger>
			<ExpandableContent preset="fade">
				<div className="mt-4 rounded-md bg-gray-100 p-4">
					This content will fade in and out when toggled.
				</div>
			</ExpandableContent>
		</Expandable>
	),
};

// Card with slide animation
export const CardWithSlide: Story = {
	render: () => (
		<Expandable>
			<ExpandableCard>
				<ExpandableCardHeader>
					<h3 className="font-semibold text-lg">Expandable Card</h3>
				</ExpandableCardHeader>
				<ExpandableContent preset="slide-up">
					<ExpandableCardContent>
						<p>This card content slides up when expanded.</p>
						<p className="mt-2">Additional content here...</p>
					</ExpandableCardContent>
				</ExpandableContent>
				<ExpandableCardFooter>
					<ExpandableTrigger>
						<button type="button" className="text-blue-500">
							Toggle
						</button>
					</ExpandableTrigger>
				</ExpandableCardFooter>
			</ExpandableCard>
		</Expandable>
	),
};

// Horizontal expansion
export const Horizontal: Story = {
	render: () => (
		<Expandable expandDirection="horizontal">
			<ExpandableCard
				collapsedSize={{ width: 200, height: 100 }}
				expandedSize={{ width: 400, height: 100 }}
			>
				<ExpandableCardHeader>
					<h3 className="font-semibold text-lg">Horizontal Expand</h3>
				</ExpandableCardHeader>
				<ExpandableContent preset="slide-right">
					<ExpandableCardContent>
						<p>This card expands horizontally.</p>
					</ExpandableCardContent>
				</ExpandableContent>
				<ExpandableCardFooter>
					<ExpandableTrigger>
						<button type="button" className="text-blue-500">
							Toggle
						</button>
					</ExpandableTrigger>
				</ExpandableCardFooter>
			</ExpandableCard>
		</Expandable>
	),
};

// Hover to expand
export const HoverExpand: Story = {
	render: () => (
		<Expandable>
			<ExpandableCard hoverToExpand expandDelay={300} collapseDelay={500}>
				<ExpandableCardHeader>
					<h3 className="font-semibold text-lg">Hover to Expand</h3>
				</ExpandableCardHeader>
				<ExpandableContent preset="scale">
					<ExpandableCardContent>
						<p>Hover over this card to expand it.</p>
						<p className="mt-2">It will collapse when you move away.</p>
					</ExpandableCardContent>
				</ExpandableContent>
			</ExpandableCard>
		</Expandable>
	),
};

// Staggered content
export const StaggeredContent: Story = {
	render: () => (
		<Expandable>
			<ExpandableCard>
				<ExpandableCardHeader>
					<h3 className="font-semibold text-lg">Staggered Animation</h3>
				</ExpandableCardHeader>
				<ExpandableContent preset="slide-up" stagger staggerChildren={0.1}>
					<ExpandableCardContent>
						<div className="space-y-4">
							<div className="rounded-md bg-gray-100 p-4">First item</div>
							<div className="rounded-md bg-gray-100 p-4">Second item</div>
							<div className="rounded-md bg-gray-100 p-4">Third item</div>
						</div>
					</ExpandableCardContent>
				</ExpandableContent>
				<ExpandableCardFooter>
					<ExpandableTrigger>
						<button type="button" className="text-blue-500">
							Toggle
						</button>
					</ExpandableTrigger>
				</ExpandableCardFooter>
			</ExpandableCard>
		</Expandable>
	),
};
