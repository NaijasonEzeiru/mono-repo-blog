import { unstable_getServerSession } from "next-auth";
// import { authOptions} from "../auth/[...nextauth]"

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content: "Granted",
    });
  } else {
    res.send({
      error: "You are not signed in",
    });
  }
};
