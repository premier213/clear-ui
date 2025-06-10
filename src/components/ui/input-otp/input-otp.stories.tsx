import type { Meta, StoryObj } from "@storybook/react";
import type { OTPInputProps } from "input-otp";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "./index";

const meta = {
	title: "UI/InputOTP",
	component: InputOTP,
	tags: ["autodocs"],
	argTypes: {
		maxLength: {
			control: "number",
			description: "Maximum length of the OTP input",
		},
		disabled: {
			control: "boolean",
			description: "Whether the input is disabled",
		},
	},
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderOTP = (props: OTPInputProps) => (
	<InputOTP {...props}>
		<InputOTPGroup>
			<InputOTPSlot index={0} />
			<InputOTPSlot index={1} />
			<InputOTPSlot index={2} />
			<InputOTPSeparator />
			<InputOTPSlot index={3} />
			<InputOTPSlot index={4} />
			<InputOTPSlot index={5} />
		</InputOTPGroup>
	</InputOTP>
);

export const Default: Story = {
	args: {
		maxLength: 6,
	} as OTPInputProps,
	render: renderOTP,
};

export const WithLabel: Story = {
	args: {
		maxLength: 6,
	} as OTPInputProps,
	render: (args) => (
		<div className="space-y-2">
			<label htmlFor="otp" className="font-medium text-sm">
				Enter verification code
			</label>
			{renderOTP(args as OTPInputProps)}
		</div>
	),
};

export const Disabled: Story = {
	args: {
		maxLength: 6,
		disabled: true,
	} as OTPInputProps,
	render: renderOTP,
};

export const WithError: Story = {
	args: {
		maxLength: 6,
	} as OTPInputProps,
	render: (args) => (
		<InputOTP {...args}>
			<InputOTPGroup>
				<InputOTPSlot index={0} aria-invalid />
				<InputOTPSlot index={1} aria-invalid />
				<InputOTPSlot index={2} aria-invalid />
				<InputOTPSeparator />
				<InputOTPSlot index={3} aria-invalid />
				<InputOTPSlot index={4} aria-invalid />
				<InputOTPSlot index={5} aria-invalid />
			</InputOTPGroup>
		</InputOTP>
	),
};

export const CustomLength: Story = {
	args: {
		maxLength: 4,
	} as OTPInputProps,
	render: (args) => (
		<InputOTP {...args}>
			<InputOTPGroup>
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSeparator />
				<InputOTPSlot index={2} />
				<InputOTPSlot index={3} />
			</InputOTPGroup>
		</InputOTP>
	),
};
