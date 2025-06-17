import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ListFilterPlus} from "lucide-react";


type Props = {
    handleAddIngredient : (ingredient : string) => void;
}

const IngredientInput = ({ handleAddIngredient } : Props) => {


    const handleSubmit = ( formData : FormData ) => {

        const ingredientInput = formData.get("ingredient-input");
        if (!ingredientInput || typeof ingredientInput !== "string") {
            return;
        }
        const ingredient: string = String(ingredientInput)
        handleAddIngredient(ingredient);

    }

    return (
        <>
            <form className="w-3/4  flex flex-col md:flex-row items-center justify-center gap-4"
                    action={ handleSubmit }>

                <Input
                        type="text" placeholder="Ingredient" className="w-1/2" name="ingredient-input" id ="ingredient-input"
                />
                <Button variant="outline" size="sm">
                    <ListFilterPlus /> Add Ingredient
                </Button>
            </form>
        </>
    )
}


export default IngredientInput
