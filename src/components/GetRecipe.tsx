import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CookingPot } from "lucide-react";
import { useState } from "react"

type Ingredient = {
    id : string;
    name : string;
}

type GetRecipeProps = {
    ingredients: Ingredient[];
    setRecipe : (value : string) => void;
};


const GetRecipe = ({ ingredients, setRecipe }: GetRecipeProps) => {

    const [loading, setLoading] = useState(false);
    const getRecipe = async () => {

        setLoading(true);
        const ingredientsList = ingredients.map(ingredient => ingredient.name).join(', ');

        const response = await fetch('/api/anthropic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `I have ${ingredientsList}. Please give me a recipe you'd recommend I make!` ,
            }),
        });

        const data = await response.json();
        setRecipe(data.content);
        setLoading(false)
    }

    return (
        <div className="w-full flex flex-col justify-center items-center my-22 md:m-0">
        <Card className="px-5 text-start w-full">
            <CardHeader className="flex flex-row items-center justify-center p-0">
                <div className=" hidden md:flex text-xs md:text-md w-1/2 flex flex-col items-start justify-center gap-2">
                    <CardTitle>Ready for a recipe? </CardTitle>
                    <CardDescription className="hidden md:flex">Generate a recipe from the collections of given ingredients.</CardDescription>
                </div>
                <CardAction className="w-1/2 h-full flex flex-col items-center justify-center">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs md:text-md cursor-pointer bg-violet-300 dark:bg-violet-500 dark:text-white"
                        onClick={getRecipe}
                        disabled={loading}
                    >
                        <CookingPot className="h-1 w-1 md:h-4 md:w-4"/>
                        {loading ? "Loading..." : "Get a recipe"}
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
        </div>

    )
}
export default GetRecipe
