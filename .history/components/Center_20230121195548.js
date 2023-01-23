import { useSession } from "next-auth/react";

const Center = () => {
  // This grabs the data
  const { data: session } = useSession()

  return (
    <div className="flex flex-grow text-white">
      <h1>Welcome to the Center Area!</h1>
      <header>
        <div>
          <img src={session?.user.image} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Center;
