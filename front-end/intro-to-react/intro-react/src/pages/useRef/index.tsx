import { useRef } from "react";

export function UseRefPage() {
  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const handleRegister = (event: React. FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    console.log(inputUsername?.current?.value)
    console.log(inputPassword?.current?.value)

  }
  return (
    <>
      <form onSubmit={handleRegister} className="flex flex-col items-center gap-3">
        <input
          type="text"
          placeholder="Type Username"
          className="input mt-3"
          ref={inputUsername}
        />

        <input
          type="password"
          placeholder="Type Password"
          className="input mt-3"
          ref={inputPassword}
        />

        <button className="btn btn-success w-[20%]">Submit</button>
      </form>
    </>
  );
}
