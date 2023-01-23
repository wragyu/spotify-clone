import { getProviders, signIn } from "next-auth/react"

const Login = ({ providers }) => {
  return (
    <div>
      
    </div>
  );
}

export default Login

export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}
