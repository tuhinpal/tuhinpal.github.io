import Anchor from "./Anchor";

export default function ErrorPage({ message = "" }) {
  return (
    <div className="flex flex-col gap-5 items-center min-h-[81vh] py-16">
      <h1 className="text-4xl font-bold">Oh snap!</h1>
      <h2 className="text-lg max-w-xl text-center">
        It says{" "}
        <span className="bg-red-50 text-red-500 px-2 border rounded-md">
          {message}
        </span>
        . Check console for more info.
      </h2>

      <Anchor
        href="/"
        className="bg-gray-900 text-white hover:bg-gray-700 hover:rounded-full mt-3"
      >
        Go back to homepage
      </Anchor>
    </div>
  );
}
