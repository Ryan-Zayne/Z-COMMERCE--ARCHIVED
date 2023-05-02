import Categories from './Categories';
import HotSalesProducts from './HotSalesProducts';
import RecentProducts from './RecentProducts';
import SimilarProducts from './SimilarProducts';

const HomeProducts = () => {
	return (
		<section id="Products Section" className="flex flex-col gap-[6rem] pb-[3rem]">
			<Categories />
			<HotSalesProducts />
			<RecentProducts />
			<SimilarProducts />
		</section>
	);
};

export default HomeProducts;
