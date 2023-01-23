import { getProviders, signIn } from "next-auth/react"

const Login = ({ providers }) => {
  return (
    <div>
      <img className="w-52 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#]">Login with {provider.name}</button>
        </div>
      ))}

    </div>
  );
}

export default Login

export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers,
    }
  }
}