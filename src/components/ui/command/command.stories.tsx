import type { Meta, StoryObj } from "@storybook/react";
import {
	CalculatorIcon,
	CalendarIcon,
	CreditCardIcon,
	SettingsIcon,
	SmileIcon,
	UserIcon,
} from "lucide-react";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "./index";

const meta = {
	title: "UI/Command",
	component: Command,
	tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Command className="rounded-lg border shadow-md">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon className="mr-2" />
						Calendar
					</CommandItem>
					<CommandItem>
						<SmileIcon className="mr-2" />
						Search Emoji
					</CommandItem>
					<CommandItem>
						<CalculatorIcon className="mr-2" />
						Calculator
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<UserIcon className="mr-2" />
						Profile
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCardIcon className="mr-2" />
						Billing
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<SettingsIcon className="mr-2" />
						Settings
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
};

export const Dialog: Story = {
	render: () => (
		<CommandDialog>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon className="mr-2" />
						Calendar
					</CommandItem>
					<CommandItem>
						<SmileIcon className="mr-2" />
						Search Emoji
					</CommandItem>
					<CommandItem>
						<CalculatorIcon className="mr-2" />
						Calculator
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<UserIcon className="mr-2" />
						Profile
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCardIcon className="mr-2" />
						Billing
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<SettingsIcon className="mr-2" />
						Settings
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	),
};

export const WithCustomEmpty: Story = {
	render: () => (
		<Command className="rounded-lg border shadow-md">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty className="py-6 text-center">
					<SmileIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
					<p className="text-muted-foreground text-sm">No results found.</p>
					<p className="text-muted-foreground text-xs">
						Try searching for something else.
					</p>
				</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon className="mr-2" />
						Calendar
					</CommandItem>
					<CommandItem>
						<SmileIcon className="mr-2" />
						Search Emoji
					</CommandItem>
					<CommandItem>
						<CalculatorIcon className="mr-2" />
						Calculator
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
};

export const WithLoading: Story = {
	render: () => (
		<Command className="rounded-lg border shadow-md">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Recent">
					<CommandItem disabled>
						<div className="flex items-center gap-2">
							<div className="h-4 w-4 animate-pulse rounded bg-muted" />
							<div className="h-4 w-24 animate-pulse rounded bg-muted" />
						</div>
					</CommandItem>
					<CommandItem disabled>
						<div className="flex items-center gap-2">
							<div className="h-4 w-4 animate-pulse rounded bg-muted" />
							<div className="h-4 w-32 animate-pulse rounded bg-muted" />
						</div>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon className="mr-2" />
						Calendar
					</CommandItem>
					<CommandItem>
						<SmileIcon className="mr-2" />
						Search Emoji
					</CommandItem>
					<CommandItem>
						<CalculatorIcon className="mr-2" />
						Calculator
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
};
