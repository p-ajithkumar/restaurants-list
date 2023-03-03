import axios from "axios";
import { FAIL, SUCCESS } from "./constants/restaurantConstant";

export const RestaurantsList = () => async (dispatch)=>
{
   try {const {data} = await axios.get('/restaurants.json')
    console.log(data.restaurants
        );
    dispatch(
        {
            payload:data.restaurants , type:SUCCESS

            //now payload is the data we need ie restourant list
        }
    )
}

        catch(error)
        {
            dispatch(
                {
                    payload:error , type:FAIL
                }
            )
        }
}