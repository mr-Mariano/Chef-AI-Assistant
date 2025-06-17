import './App.css'
import Hero from './components/Hero.tsx'
import Header from './components/Header'
import { ThemeProvider } from "@/components/theme-provider"
import IngredientInput from "@/components/IngredientInput.tsx";
import Ingredients from "@/components/Ingredients.tsx";
import  {useState, useRef, useEffect} from "react";
import GetRecipe from "@/components/GetRecipe.tsx";
import Recipe from "@/components/Recipe.tsx";

type Ingredient = {
    id : string;
    name : string;
}

function App() {

    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [recipe, setRecipe] = useState<string>()
    const recipeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (recipe && recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    const addIngredient = ( ingredient: string ) => {

        if (ingredient.trim().length === 0) {
            return
        }

        const name: string = ingredient.trim()

        const repeated: Ingredient | true | undefined = ingredients.find( ingObj => ingObj.name.toLowerCase() === name.toLowerCase())
        if (repeated) {
            return
        }

        const newIngredient : Ingredient = {
            id : crypto.randomUUID(),
            name : name,
        }

        setIngredients([
            ...ingredients,
            newIngredient
        ])

    }

    const deleteIngredient = (id:string) => {
        const newIngredientsArr: Ingredient[] = ingredients.filter( ingredient => (
            ingredient.id !== id
        ))

        setIngredients(newIngredientsArr)
    }


    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

          {/* Contenido de la app */}
          <div className="relative z-10">

              <main className="md:mx-20 lg:mx-60 flex flex-col justify-center items-center">
                  { /* Nav Bar */}
                  <Header />

                  { /* Hero Section */}
                  <Hero />

                  { /* Form and Ingredients Display */}
                  <IngredientInput handleAddIngredient={addIngredient}/>

                  <div className="w-full items-center box-content px-20 md:px-0 md:flex md:flex-row">
                      <Ingredients ingredients={ingredients} onDeleteIngredient={deleteIngredient}/>
                      {
                          ingredients.length > 4 &&
                          <div className="w-full h-fit">
                              <GetRecipe ingredients={ingredients} setRecipe={setRecipe}/>
                          </div>

                      }
                  </div>
                  {
                      recipe ? (
                            <div ref={recipeRef}>
                                <Recipe recipe={recipe}/>
                            </div>
                        ) : null
                  }
              </main>
          </div>
      </ThemeProvider>
  )
}

export default App

