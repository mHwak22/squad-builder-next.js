"use client";

import { createUser } from "@/actions/user-action";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    async function generateUser() {
      if (user) {
        const { emailAddress, firstName } = user?.externalAccounts[0];
        const response = await createUser(emailAddress, firstName);
        // console.log("server response", reposne);
      }
    }
    generateUser();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-2xl">Welcome to Ultimate Team</h1>
      <UserButton />
      {!isSignedIn && (
        <SignInButton mode="modal">
          <Button>Enter UT</Button>
        </SignInButton>
      )}
    </div>
  );
}
