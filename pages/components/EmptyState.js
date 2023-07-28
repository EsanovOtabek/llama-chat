export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl font-medium leading-12">
      <p className="mt-1">
        Welcome to Llama Chat, an{" "}
        <a className="underline" href="https://github.com/replicate/llama-chat">
          open source app
        </a>{" "}
        for chatting with Llama 2. If you&apos;re a developer and want to build
        your own streaming chat app, this is a great place to start. <br />
      </p>

      <p>
        {" "}
        Customize Llama&apos;s personality by clicking on the top right{" "}
        <button className="underline" onClick={() => setOpen(true)}>
          settings
        </button>{" "}
        button.
      </p>
      <p>
        I can{" "}
        <button
          className="inline-flex underline"
          onClick={() =>
            setPrompt(
              "Explain the self-attention mechanism that Transformers use like I'm five."
            )
          }
        >
          explain concepts,
        </button>{" "}
        write{" "}
        <button
          className="inline-flex underline"
          onClick={() =>
            setPrompt("Write a poem about open source machine learning. ")
          }
        >
          poems
        </button>{" "}
        and{" "}
        <button
          className="inline-flex underline"
          onClick={() =>
            setPrompt(
              "Write a python script that trains `bert-large` on the `IMDB` dataset using the Transformers `Trainer` class and Datasets library. I have access to four GPUs, so let's use DDP. Please write the script and then tell me how to launch it on the command line."
            )
          }
        >
          code,
        </button>{" "}
        <button
          className="inline-flex underline"
          onClick={() =>
            setPrompt(
              "Respond to this question only based on the information provided here. Cats like dogs, and dogs like rabbits. Cats like anything that dogs like. I really really dislike rabbits. How do cats feel about rabbits?"
            )
          }
        >
          solve logic puzzles,
        </button>{" "}
        or even{" "}
        <button
          className="inline-flex underline"
          onClick={() =>
            setPrompt(
              "please provide 10 fun names for a pet pelican. Please come up with unique emojis to go along with each name. Try not to repeat the same emojis. Make them fun, colorful, and loving names"
            )
          }
        >
          name your pets.
        </button>{" "}
      </p>
      <p>Send me a message.</p>
    </div>
  );
}
