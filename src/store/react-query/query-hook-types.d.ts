export type ResponseData = {
	products: Array<{
		id: number;
		title: string;
		description: string;
		price: number;
		rating: number;
		stock: number;
		brand: string;
		category: string;
		thumbnail: string;
		images: string[];
	}>;
};
