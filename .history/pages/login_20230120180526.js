import { getProviders, signIn } from "next-auth/react"

const Login = ({ providers }) => {
  return (
    <div>
      <img className="w-52 mb-5" src="https://links.papareact.com/pxl" alt="" />

      {Object.values(providers).map((provider) => (
        <div>
          
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
