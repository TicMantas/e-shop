const errorClass = "text-lg text-center text-red-500 p-2";

export const errorMessage = (error: string) => {
 if(error === "Login successfully !" || error === "Check your inbox to confirm your account ! ") {
  return <span>{error}</span>;
}else{
  return <span className={errorClass}>{error}</span>;
}}