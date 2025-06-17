
type Ingredient = {
    name: string;
    id: string;
};


type Props = {
    ingredients: Ingredient[];
    onDeleteIngredient : (id : string) => void;
}



const Ingredients = ({ ingredients, onDeleteIngredient}: Props)  => {

    return ingredients.length > 0 && (
        <>
        <div className="text-start w-full justify-center items-start flex flex-col my-20">

            <h1 className="scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight my-10">Ingredients on Hand</h1>
            <ol className="w-full relative border-s border-violet-600 dark:border-gray-700">
            {
                ingredients.map( (ingredient) => (
                    <li className="mb-5 ms-4" key={ingredient.id}>
                        <div
                            className="absolute w-3 h-3 bg-violet-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                        <h3 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {ingredient.name}
                        </h3>
                        <button
                            onClick={() => onDeleteIngredient(ingredient.id)}
                            className="text-xs relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span
                                className="cursor-pointer relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Delete
                            </span>
                        </button>

                    </li>

                ))
            }
            </ol>
        </div>
        </>
    )
}
export default Ingredients
