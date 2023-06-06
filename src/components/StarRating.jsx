import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ rating, text, className = '', icon = AiFillStar }) => {
	const RatingIcon = icon;

	const star5 = [...Array(5).keys()].map((id) => <RatingIcon key={id} color="var(--text-header)" />);

	const star4 = [...Array(5).keys()].map((id, index) =>
		index === 4 ? (
			<RatingIcon key={id} color="var(--text-dark)" />
		) : (
			<RatingIcon key={id} color="var(--text-header)" />
		)
	);

	return (
		<div className={`mt-[1rem] flex items-center gap-[1rem] text-[1.2rem] ${className}`}>
			<span className="flex">{rating > 4.5 ? star5 : star4}</span>
			<span>
				{rating} {text}
			</span>
		</div>
	);
};

export default StarRating;
