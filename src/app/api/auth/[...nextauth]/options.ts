import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const authOptions = {
  callbacks: {
    async signIn({ user, account }: any) {
      return { user, account };
    },
  },
  providers: [
    GitHubProvider({
      clientId: "Iv1.fa75aff34d44c845",
      clientSecret: "5345e79a0928b7316c0b76ebce029c46e6ee99df",
    }),
    GoogleProvider({
      clientId:
        "691368152129-94ti7ndijjmgb67jra885q3ncts385jg.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password, name } = credentials;
        const user = { password, email, name };
        return user;
      },
    }),
  ],
  secret: "https://onedrob.vercel.app",
};

export default authOptions;
