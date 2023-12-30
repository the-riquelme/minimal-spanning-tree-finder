import {  HomeContainer } from './styles';
import { ContentContainer } from '../components/ContentContainer';

export const Home = () => {

	return (
		<>
			<ContentContainer>
				<HomeContainer>
					<h2>Informe o Arquivo com o Grafo</h2>
					<p>O Processo Será Feito Utilizando-se do Algoritmo de Kruskal</p>
				</HomeContainer>
			</ContentContainer>
		</>
	);
};
