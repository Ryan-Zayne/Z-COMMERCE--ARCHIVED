export type ReactPropsWithChildren<P = unknown> = P & {
	children: React.ReactNode;
};

export const assertDefined = <T = unknown>(value: T): NonNullable<T> => {
	if (value == null) {
		throw new Error(`Error: "${value}" is not defined`);
	}

	return value;
};
