import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent } from "../card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./index";

const meta: Meta<typeof Carousel> = {
	title: "UI/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
			description: "The orientation of the carousel",
		},
		opts: {
			control: "object",
			description: "Options for the Embla Carousel",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = [
	{
		id: 1,
		title: "Slide 1",
		content: "This is the first slide content",
	},
	{
		id: 2,
		title: "Slide 2",
		content: "This is the second slide content",
	},
	{
		id: 3,
		title: "Slide 3",
		content: "This is the third slide content",
	},
	{
		id: 4,
		title: "Slide 4",
		content: "This is the fourth slide content",
	},
];

export const Default: Story = {
	render: (args) => (
		<div className="mx-auto w-full max-w-3xl">
			<Carousel {...args}>
				<CarouselContent>
					{items.map((item) => (
						<CarouselItem key={item.id}>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<div className="text-center">
										<h3 className="font-semibold text-lg">{item.title}</h3>
										<p className="text-muted-foreground text-sm">
											{item.content}
										</p>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

export const Vertical: Story = {
	render: (args) => (
		<div className="mx-auto h-[400px] w-full max-w-3xl">
			<Carousel orientation="vertical" {...args}>
				<CarouselContent>
					{items.map((item) => (
						<CarouselItem key={item.id}>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<div className="text-center">
										<h3 className="font-semibold text-lg">{item.title}</h3>
										<p className="text-muted-foreground text-sm">
											{item.content}
										</p>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

export const MultipleSlides: Story = {
	render: (args) => (
		<div className="mx-auto w-full max-w-3xl">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				{...args}
			>
				<CarouselContent>
					{items.map((item) => (
						<CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<div className="text-center">
										<h3 className="font-semibold text-lg">{item.title}</h3>
										<p className="text-muted-foreground text-sm">
											{item.content}
										</p>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

export const CustomControls: Story = {
	render: (args) => (
		<div className="mx-auto w-full max-w-3xl">
			<Carousel {...args}>
				<CarouselContent>
					{items.map((item) => (
						<CarouselItem key={item.id}>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<div className="text-center">
										<h3 className="font-semibold text-lg">{item.title}</h3>
										<p className="text-muted-foreground text-sm">
											{item.content}
										</p>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="mt-4 flex items-center justify-center gap-2">
					<CarouselPrevious className="static translate-y-0" />
					<CarouselNext className="static translate-y-0" />
				</div>
			</Carousel>
		</div>
	),
};
