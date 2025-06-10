import type { Meta, StoryObj } from "@storybook/react";
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
	YAxis,
} from "recharts";
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "./index";

const meta: Meta<typeof ChartContainer> = {
	title: "UI/Chart",
	component: ChartContainer,
	tags: ["autodocs"],
	argTypes: {
		config: {
			control: "object",
			description: "Configuration for chart colors and themes",
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const data = [
	{ month: "Jan", sales: 4000, revenue: 2400 },
	{ month: "Feb", sales: 3000, revenue: 1398 },
	{ month: "Mar", sales: 2000, revenue: 9800 },
	{ month: "Apr", sales: 2780, revenue: 3908 },
	{ month: "May", sales: 1890, revenue: 4800 },
	{ month: "Jun", sales: 2390, revenue: 3800 },
];

const chartConfig = {
	sales: {
		label: "Sales",
		theme: {
			light: "#2563eb",
			dark: "#3b82f6",
		},
	},
	revenue: {
		label: "Revenue",
		theme: {
			light: "#16a34a",
			dark: "#22c55e",
		},
	},
};

export const LineChartExample: Story = {
	render: () => (
		<div className="mx-auto w-full max-w-3xl">
			<ChartContainer config={chartConfig}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<ChartTooltip
						content={
							<ChartTooltipContent
								indicator="line"
								labelFormatter={(value) => `Month: ${value}`}
							/>
						}
					/>
					<ChartLegend content={<ChartLegendContent />} />
					<Line
						type="monotone"
						dataKey="sales"
						stroke="var(--color-sales)"
						strokeWidth={2}
					/>
					<Line
						type="monotone"
						dataKey="revenue"
						stroke="var(--color-revenue)"
						strokeWidth={2}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	),
};

export const BarChartExample: Story = {
	render: () => (
		<div className="mx-auto w-full max-w-3xl">
			<ChartContainer config={chartConfig}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<ChartTooltip
						content={
							<ChartTooltipContent
								indicator="dot"
								labelFormatter={(value) => `Month: ${value}`}
							/>
						}
					/>
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="sales" fill="var(--color-sales)" />
					<Bar dataKey="revenue" fill="var(--color-revenue)" />
				</BarChart>
			</ChartContainer>
		</div>
	),
};

export const AreaChartExample: Story = {
	render: () => (
		<div className="mx-auto w-full max-w-3xl">
			<ChartContainer config={chartConfig}>
				<AreaChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<ChartTooltip
						content={
							<ChartTooltipContent
								indicator="dashed"
								labelFormatter={(value) => `Month: ${value}`}
							/>
						}
					/>
					<ChartLegend content={<ChartLegendContent />} />
					<Area
						type="monotone"
						dataKey="sales"
						fill="var(--color-sales)"
						stroke="var(--color-sales)"
						fillOpacity={0.2}
					/>
					<Area
						type="monotone"
						dataKey="revenue"
						fill="var(--color-revenue)"
						stroke="var(--color-revenue)"
						fillOpacity={0.2}
					/>
				</AreaChart>
			</ChartContainer>
		</div>
	),
};

export const CustomTooltip: Story = {
	render: () => (
		<div className="mx-auto w-full max-w-3xl">
			<ChartContainer config={chartConfig}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<ChartTooltip
						content={
							<ChartTooltipContent
								indicator="dot"
								hideLabel
								formatter={(value, name) => (
									<div className="flex items-center gap-2">
										<span className="font-medium">{name}:</span>
										<span className="font-mono">${value.toLocaleString()}</span>
									</div>
								)}
							/>
						}
					/>
					<ChartLegend content={<ChartLegendContent />} />
					<Line
						type="monotone"
						dataKey="sales"
						stroke="var(--color-sales)"
						strokeWidth={2}
					/>
					<Line
						type="monotone"
						dataKey="revenue"
						stroke="var(--color-revenue)"
						strokeWidth={2}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	),
};
