import getToken from "../Token/GetToken"
import {API_URL} from "@env"
const apiUrl=API_URL
const createTransaction=async ({amount,to,category})=>{
    const token=await getToken()
    const payload = {
        Amount: amount,
        To: to,
        category: category,
      };

      try {
        const response = await fetch(`${apiUrl}/transactions/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        return response;
    }catch (error) {
            console.error("fetch error: ", error);
          }

}

export default createTransaction;