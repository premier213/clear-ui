import type { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from ".";

const meta: Meta<typeof Accordion> = {
	title: "UI/Accordion",
	component: Accordion,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion type="multiple" className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Can I open multiple items?</AccordionTrigger>
				<AccordionContent>
					Yes. You can open multiple items at once by using the
					type=&quot;multiple&quot; prop.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it customizable?</AccordionTrigger>
				<AccordionContent>
					Yes. You can customize the appearance using the className prop.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const CustomStyling: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1" className="border-2 border-primary">
				<AccordionTrigger className="text-primary hover:text-primary/80">
					Custom Styled Accordion
				</AccordionTrigger>
				<AccordionContent className="text-primary/80">
					This accordion has custom styling applied to demonstrate the
					customization capabilities.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
