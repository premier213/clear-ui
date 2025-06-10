import type { Meta, StoryObj } from "@storybook/react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "./index";

const meta = {
	title: "UI/Table",
	component: Table,
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the table",
		},
	},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>INV002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell>PayPal</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>INV003</TableCell>
					<TableCell>Unpaid</TableCell>
					<TableCell>Bank Transfer</TableCell>
					<TableCell className="text-right">$350.00</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$750.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
};

export const WithSelection: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[50px]">
						<input
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300"
							aria-label="Select all"
						/>
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Role</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>
						<input
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300"
							aria-label="Select row"
						/>
					</TableCell>
					<TableCell>John Doe</TableCell>
					<TableCell>john@example.com</TableCell>
					<TableCell>Admin</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<input
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300"
							aria-label="Select row"
						/>
					</TableCell>
					<TableCell>Jane Smith</TableCell>
					<TableCell>jane@example.com</TableCell>
					<TableCell>User</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Compact: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Product</TableHead>
					<TableHead>Category</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Stock</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">Laptop</TableCell>
					<TableCell>Electronics</TableCell>
					<TableCell>$999.99</TableCell>
					<TableCell>In Stock</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Desk Chair</TableCell>
					<TableCell>Furniture</TableCell>
					<TableCell>$199.99</TableCell>
					<TableCell>Low Stock</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Monitor</TableCell>
					<TableCell>Electronics</TableCell>
					<TableCell>$299.99</TableCell>
					<TableCell>Out of Stock</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const WithStatus: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Order</TableHead>
					<TableHead>Customer</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>#1234</TableCell>
					<TableCell>Alice Johnson</TableCell>
					<TableCell>
						<span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 font-medium text-green-800 text-xs">
							Completed
						</span>
					</TableCell>
					<TableCell>2024-02-20</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>#1235</TableCell>
					<TableCell>Bob Smith</TableCell>
					<TableCell>
						<span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 font-medium text-xs text-yellow-800">
							Pending
						</span>
					</TableCell>
					<TableCell>2024-02-21</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>#1236</TableCell>
					<TableCell>Carol White</TableCell>
					<TableCell>
						<span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 font-medium text-red-800 text-xs">
							Cancelled
						</span>
					</TableCell>
					<TableCell>2024-02-22</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};
