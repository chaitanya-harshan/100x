import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "bro@mars.earth" },
                password: { label: "Password", type: "password", placeholder: "mt.olumpus-mons" }
            },
            async authorize(credentials:any) {
                console.log(credentials);
                return { id: "1", name: "Bro", email: "bro@mars.earth" };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: ({user} : any) => {
            console.log("________________________________________ SignIn CallBack ________________________________________");
            if (user.email == "bro@mars.mars") {
                console.log("Mars Welcomes you Eather");
                return false;
            }
            console.log(user);
            return true;
        },
        jwt: ({token}: any) => {
            console.log("________________________________________ JWT CallBack ________________________________________");
            console.log(token);
            // token.type = "admin";
            return token;
        },
        session: ({session, token, user}: any) => {
            console.log("________________________________________ Session CallBack ________________________________________");
            if (session && session.user) (session.user as any).id = token.sub;
            console.log(session);
            console.log(token);
            return session;
        }
    },
    pages: {
       signIn: "/signin"
    }
}