import {
	TypographyBlockquote,
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyH4,
	TypographyInlineCode,
	TypographyLarge,
	TypographyLead,
	TypographyList,
	TypographyMuted,
	TypographyP,
	TypographySmall,
	TypographyTable,
} from "@/components/ui/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "UI/Typography",
	component: TypographyH1,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TypographyH1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
	render: () => <TypographyH1>The Joke Tax Chronicles</TypographyH1>,
};

export const Heading2: Story = {
	render: () => <TypographyH2>The King's Plan</TypographyH2>,
};

export const Heading3: Story = {
	render: () => <TypographyH3>The Joke Tax</TypographyH3>,
};

export const Heading4: Story = {
	render: () => <TypographyH4>People stopped telling jokes</TypographyH4>,
};

export const Paragraph: Story = {
	render: () => (
		<TypographyP>
			The king, seeing how much happier his subjects were, realized the error of
			his ways and repealed the joke tax.
		</TypographyP>
	),
};

export const Blockquote: Story = {
	render: () => (
		<TypographyBlockquote>
			"After all," he said, "everyone enjoys a good joke, so it's only fair that
			they should pay for the privilege."
		</TypographyBlockquote>
	),
};

export const Table: Story = {
	render: () => (
		<TypographyTable>
			<thead>
				<tr className="m-0 border-t p-0 even:bg-muted">
					<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
						King's Treasury
					</th>
					<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
						People's happiness
					</th>
				</tr>
			</thead>
			<tbody>
				<tr className="m-0 border-t p-0 even:bg-muted">
					<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
						Empty
					</td>
					<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
						Overflowing
					</td>
				</tr>
				<tr className="m-0 border-t p-0 even:bg-muted">
					<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
						Modest
					</td>
					<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
						Satisfied
					</td>
				</tr>
			</tbody>
		</TypographyTable>
	),
};

export const List: Story = {
	render: () => (
		<TypographyList>
			<li>1st level of puns: 5 gold coins</li>
			<li>2nd level of jokes: 10 gold coins</li>
			<li>3rd level of one-liners: 20 gold coins</li>
		</TypographyList>
	),
};

export const InlineCode: Story = {
	render: () => (
		<TypographyInlineCode>@radix-ui/react-alert-dialog</TypographyInlineCode>
	),
};

export const Lead: Story = {
	render: () => (
		<TypographyLead>
			A modal dialog that interrupts the user with important content and expects
			a response.
		</TypographyLead>
	),
};

export const Large: Story = {
	render: () => <TypographyLarge>Are you absolutely sure?</TypographyLarge>,
};

export const Small: Story = {
	render: () => <TypographySmall>Email address</TypographySmall>,
};

export const Muted: Story = {
	render: () => <TypographyMuted>Enter your email address.</TypographyMuted>,
};

export const CompleteExample: Story = {
	render: () => (
		<div className="space-y-6">
			<TypographyH1>The Joke Tax Chronicles</TypographyH1>
			<TypographyLead>
				A tale of taxation, rebellion, and the power of laughter.
			</TypographyLead>
			<TypographyP>
				Once upon a time, in a far-off land, there was a very lazy king who
				spent all day lounging on his throne.
			</TypographyP>
			<TypographyH2>The King's Plan</TypographyH2>
			<TypographyP>
				The king thought long and hard, and finally came up with a brilliant
				plan: he would tax the jokes in the kingdom.
			</TypographyP>
			<TypographyBlockquote>
				"After all," he said, "everyone enjoys a good joke, so it's only fair
				that they should pay for the privilege."
			</TypographyBlockquote>
			<TypographyH3>The Joke Tax</TypographyH3>
			<TypographyList>
				<li>1st level of puns: 5 gold coins</li>
				<li>2nd level of jokes: 10 gold coins</li>
				<li>3rd level of one-liners: 20 gold coins</li>
			</TypographyList>
			<TypographyTable>
				<thead>
					<tr className="m-0 border-t p-0 even:bg-muted">
						<th className="border px-4 py-2 text-left font-bold">Status</th>
						<th className="border px-4 py-2 text-left font-bold">Result</th>
					</tr>
				</thead>
				<tbody>
					<tr className="m-0 border-t p-0 even:bg-muted">
						<td className="border px-4 py-2">Before Tax</td>
						<td className="border px-4 py-2">Laughter everywhere</td>
					</tr>
					<tr className="m-0 border-t p-0 even:bg-muted">
						<td className="border px-4 py-2">After Tax</td>
						<td className="border px-4 py-2">Silence and gloom</td>
					</tr>
				</tbody>
			</TypographyTable>
			<TypographyMuted>
				The moral of the story: never underestimate the power of a good laugh.
			</TypographyMuted>
		</div>
	),
};
