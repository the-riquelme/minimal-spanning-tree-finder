import { HeaderContainer, HeaderLimiter } from './styles';
import { Button } from '../../../Button';
import { Link } from 'react-router-dom';

export const Header = () => {

	return (
		<HeaderContainer>
			<HeaderLimiter>
				<h2 title='Voltar ao início'>
					<Link to='/home'>
            Localizador de Árvore Geradora Mínima
					</Link>
				</h2>
				<nav>
					<Button
						title={'Injetar Grafo'}
					/>
				</nav>
			</HeaderLimiter>
		</HeaderContainer>
	);
};
