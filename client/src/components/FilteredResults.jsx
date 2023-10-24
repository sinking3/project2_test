import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

const FilteredResults = ({ recipes }) => {
  const recipeGrid = recipes.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <Link to={"/recipe/"+recipe.id}>
      <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={`Picture for ${recipe.title}`} />
      </div>
      </Link>
    </SplideSlide>
  ));

  return (
    <div>
      <h3>Results:</h3>
      <Splide options={{ type: 'loop', perPage: 3, pagination: false, drag: 'free', gap: '5rem' }}>
        {recipeGrid}
      </Splide>
    </div>
  );
};

export default FilteredResults;