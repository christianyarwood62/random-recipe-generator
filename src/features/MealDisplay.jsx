function MealDisplay({ randomRecipe }) {
  return (
    <div>
      <>
        <h1>Tonight's Meal</h1>
        <h2>{randomRecipe.title}</h2>
        <p>Category: {randomRecipe.category}</p>
        <h3>Instructions: {randomRecipe.steps}</h3>
      </>
    </div>
  );
}

export default MealDisplay;
