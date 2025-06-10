import type { Meta, StoryObj } from "@storybook/react";
import { CopyIcon, PencilIcon, TrashIcon } from "lucide-react";
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "./index";

const meta = {
	title: "UI/ContextMenu",
	component: ContextMenu,
	tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					<PencilIcon className="mr-2" />
					Edit
					<ContextMenuShortcut>⌘E</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					<CopyIcon className="mr-2" />
					Copy
					<ContextMenuShortcut>⌘C</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					<TrashIcon className="mr-2" />
					Delete
					<ContextMenuShortcut>⌘D</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};

export const WithSubmenu: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					<PencilIcon className="mr-2" />
					Edit
				</ContextMenuItem>
				<ContextMenuItem>
					<CopyIcon className="mr-2" />
					Copy
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuSub>
					<ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-48">
						<ContextMenuItem>Save as...</ContextMenuItem>
						<ContextMenuItem>Export...</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Share</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
			</ContextMenuContent>
		</ContextMenu>
	),
};

export const WithCheckboxes: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuLabel>View Options</ContextMenuLabel>
				<ContextMenuCheckboxItem checked>Show Toolbar</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem checked>
					Show Statusbar
				</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuLabel>Panel Position</ContextMenuLabel>
				<ContextMenuRadioGroup value="bottom">
					<ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
					<ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
					<ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
				</ContextMenuRadioGroup>
			</ContextMenuContent>
		</ContextMenu>
	),
};

export const WithDestructive: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					<PencilIcon className="mr-2" />
					Edit
				</ContextMenuItem>
				<ContextMenuItem>
					<CopyIcon className="mr-2" />
					Copy
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">
					<TrashIcon className="mr-2" />
					Delete
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};
