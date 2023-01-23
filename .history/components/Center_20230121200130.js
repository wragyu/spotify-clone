import { useSession } from "next-auth/react";

const Center = () => {
  // This grabs the data
  const { data: session } = useSession()

  return (
    <div className="flex flex-grow text-white">
      <h1>Welcome to the Center Area!</h1>
      <header>
        <div className="">
          <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
          <h2>{session?.}</h2>
        </div>
      </header>
    </div>
  );
}

export default Center;
