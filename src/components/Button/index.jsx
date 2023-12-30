import { ButtonContainer } from './styles';
import { inputFile } from '../../utils/minimumSpanningTree.js';

export const Button = ({
	variantType='box',
	title,
}) => {
	return (
		<ButtonContainer
			title={title}
			variantType={variantType}
			onClick={inputFile}
		>
			{title}
		</ButtonContainer>
	);
};
