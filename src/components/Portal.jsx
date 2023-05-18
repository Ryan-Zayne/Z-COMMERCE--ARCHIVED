import { createPortal } from 'react-dom';

const Portal = ({ children, destination = document.body }) => {
	return createPortal(children, destination);
};
export default Portal;
