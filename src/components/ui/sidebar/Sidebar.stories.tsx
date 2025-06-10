import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon, SettingsIcon, UsersIcon } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarSeparator,
	SidebarTrigger,
} from "./index";

const meta: Meta<typeof Sidebar> = {
	title: "UI/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<SidebarProvider>
				<div className="flex min-h-[400px] w-full">
					<Story />
					<main className="flex-1 p-4">Main Content</main>
				</div>
			</SidebarProvider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Basic sidebar with default settings
export const Basic: Story = {
	render: () => (
		<Sidebar>
			<SidebarHeader>
				<SidebarTrigger />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Home">
									<HomeIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Users">
									<UsersIcon />
									<span>Users</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	),
};

// Floating variant with icon collapsible
export const Floating: Story = {
	render: () => (
		<Sidebar variant="floating" collapsible="icon">
			<SidebarHeader>
				<SidebarTrigger />
				<SidebarInput placeholder="Search..." />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Home">
									<HomeIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Users">
									<UsersIcon />
									<span>Users</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton tooltip="Settings">
							<SettingsIcon />
							<span>Settings</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	),
};

// Inset variant with offcanvas collapsible
export const Inset: Story = {
	render: () => (
		<Sidebar variant="inset" collapsible="offcanvas">
			<SidebarHeader>
				<SidebarTrigger />
				<SidebarInput placeholder="Search..." />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive tooltip="Home">
									<HomeIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Users">
									<UsersIcon />
									<span>Users</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Settings</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Settings">
									<SettingsIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	),
};

// Right-aligned sidebar
export const RightAligned: Story = {
	render: () => (
		<Sidebar side="right" variant="floating">
			<SidebarHeader>
				<SidebarTrigger />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Home">
									<HomeIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Users">
									<UsersIcon />
									<span>Users</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	),
};
