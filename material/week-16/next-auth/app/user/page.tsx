import { getServerSession } from "next-auth";
import { AppBar } from "../components/AppBar";
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
  const session = await getServerSession(NEXT_AUTH);

  return (
    <div>
      <AppBar />
      {"Rendered on Server Side"}
      <br />
      Server component ---- :{JSON.stringify(session)}
    </div>
  );
}
