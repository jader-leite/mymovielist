import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Detalhes do Filme</h1>
      <p>ID do filme: {id}</p>
    </div>
  );
}

export default MovieDetails;
