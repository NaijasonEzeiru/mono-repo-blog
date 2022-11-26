import { createContext, useState, useEffect, ReactNode} from "react";
import router, { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

type Props = {
  children: ReactNode
}

type data = {
    accessToken: string;
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    registeredAt: Date;
} | undefined | null

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<data>(null);
  // const [error, setError] = useState(null);
  const [success, setSuccess] = useState<boolean|null>(null);

  // const check = trpc.useQuery(["users.me"])
  
  
  // useEffect(() => {
  //   const checkUserLoggedIn = ()=> {
  //     trpc.useQuery(["users.me"])}
    
  //   checkUserLoggedIn()
  // } , []);

   const { mutate, data, error } = trpc.useMutation(["users.login"], {
    onSuccess: () => {
      setUser(data)
      setSuccess(true)
      console.log("login" + {"user": user}, {"data": data})
      router.push("./");
    },
    onError: (error: any) => {
        console.log("front: " + error.message)
        alert(error.message)
    },
  });

   useEffect(() => {
    const updateUser = () => {
      setUser(data)
    }
    updateUser()
   }, [data])

  const signout = () => {
  trpc.useQuery(["users.logout"], {
    onSuccess: () => {
      setUser(null);
      router.push("/");
    }
  },)
  };

  // const checkUserLoggedIn = async (user) => {
  //   const res = await fetch("http://localhost:3000/api/user");
  //   const data = await res.json();

  //   if (res.ok) {
  //     setUser(data.user);
  //     console.log(user);
  //   } else {
  //     setUser(null);
  //   }
  // };
  return (
    <AuthContext.Provider
      value={{ user, success, signout, mutate, data }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
