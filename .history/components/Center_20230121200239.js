import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

const Center = () => {
  // This grabs the data
  const { data: session } = useSession()

  return (
    <div className="flex flex-grow text-white">
      <h1>Welcome to the Center Area!</h1>
      <header>
        <div className="flex items-center bg-black">
          <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  );
}

export default Center;
