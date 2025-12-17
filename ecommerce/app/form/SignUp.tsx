import Input from "@/components/Input";

const SignUp = () => {
  const inputClass = "shadow-md rounded-xl text-center p-2 w-full flex-5";

  return (
    <form className="rounded-4xl flex flex-col p-5 flex-1 m-2 items-center justify-center">
      <Input
        placeholder={"Enter your user name"}
        type={"text"}
        children={"Username"}
        name={"userName"}
        additionalClass={inputClass}
        required
      />
      <Input
        placeholder={"Enter your email"}
        type={"email"}
        children={"Email"}
        name={"userName"}
        additionalClass={inputClass}
        required
      />
      <Input
        placeholder={"Enter your password"}
        type={"password"}
        children={"Password"}
        name={"password"}
        additionalClass={inputClass}
        required
      />
      <Input
        placeholder={"Repeat your password"}
        type={"password"}
        children={"Password"}
        name={"password"}
        additionalClass={inputClass}
        required
      />
    </form>
  );
};

export default SignUp;
