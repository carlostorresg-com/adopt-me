import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams(); // BrowserRouter is doing the magic to pass id
  return <h2>{id}</h2>;
};

export default Details;
