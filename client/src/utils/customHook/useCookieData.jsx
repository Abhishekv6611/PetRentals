// useCookieData.ts
import { useEffect, useState } from "react";
import cookies from "js-cookie";

export const UseUserData = ({ key }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = cookies.get(key);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
      } catch (error) {
        console.log("Error parsing cookies data", error);
        setUserData(null);
      }
    } else {
      setUserData(null);
    }
    setLoading(false);
  }, [key]);

  return { userData, loading };
};
