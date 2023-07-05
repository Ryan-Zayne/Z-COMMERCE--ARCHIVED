export type ReactPropsWithChildren<P> = P & {
	children: React.ReactNode;
};

export const assertDefined = <T>(value: T) => {
	if (value == null) {
		throw new Error(`"Value: ${value}" is not defined`);
	}

	return value;
};

export const assertRef = <T>(value: T) => value as NonNullable<T>;
