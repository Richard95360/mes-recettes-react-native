import axios from "axios";
import { fetchRecipesAction, fetchSelectedRecipeAction } from "../../redux/actions";


const ENDPOINT_BASE = 'https://api.spoonacular.com/recipes'
const ENDPOINT_RECIPES =  ENDPOINT_BASE + '/complexSearch'

const apiKey = "8b6d6533a7c54484aa75f0e7bf76591b"
const MAX_PER_PAGE = 30

export const fetchRecipes = async (dispatch,cb, query) => {
    try {
        console.log("Dans ftech recipes");
        const response = await  axios.get(ENDPOINT_RECIPES, {
            
              params:{
                  apiKey,
                  number:MAX_PER_PAGE
              }
          });
          console.log("La réponse", response.data.results);

         cb && cb()
          dispatch(fetchRecipesAction(response.data.results))
        
    } catch (e) {
        console.log("error requete recipes", e);
    }

}

export const fetchSelectedRecipe = async (dispatch, recipeId) => {
    try {
        console.log("Dans fetch selected");
        const response = await axios.get(ENDPOINT_BASE + "/" + recipeId + "/information",{
            params:{
                apiKey,
            }
        })

        console.log("Response =", response.data);

        dispatch(fetchSelectedRecipeAction(response.data))
    } catch (e) {
        console.log("error", e);
    }
}




