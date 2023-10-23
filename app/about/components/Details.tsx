"use client";

import Button from "@/components/Button";

export default function AboutDetails() {
  return (
    <div className="max-w-4xl flex flex-col gap-y-5 mb-16">
      <p className="font-sans text-lg md:text-xl">
        I am a full-stack engineer from India with a focus on web technology.
        Currently, I am working as a Tech Lead at visadb.io and Devi AI. In this
        role, I am responsible for driving our organizations to new heights and
        ensuring the successful implementation of innovative solutions.
      </p>
      <p className="font-sans text-lg md:text-xl">
        My expertise lies in frontend development, where I specialize in using
        Next.js, React, Tailwind CSS, MaterialUI, and Ant-Design. I am also
        proficient in other frontend frameworks like Vue, Astro, Svelte, Remix,
        and Gatsby. I am passionate about delivering exceptional user
        experiences and prioritizing usability by reducing clicks.
      </p>
      <p className="font-sans text-lg md:text-xl">
        On the backend, I have extensive experience with Node.js and MongoDB,
        and I am also proficient in using Postgres, SQLite, and MySQL. I prefer
        leveraging edge technologies wherever possible, such as Cloudflare
        Worker and Deno.
      </p>
      <p className="font-sans text-lg md:text-xl">
        In addition to my core skill set, I am continuously expanding my
        knowledge by exploring other technologies like machine learning and game
        development. I have begun studying Unreal Engine for game development
        and have a strong command of programming languages such as JavaScript,
        TypeScript, Python, and I am also a learner in C.
      </p>
      <p className="font-sans text-lg md:text-xl">
        Throughout my journey, I have been fortunate to work on challenging
        projects and collaborate with talented individuals. My passion for
        innovation and dedication to delivering high-quality results drive me to
        excel in my role as a Tech Lead.
      </p>

      <div className="flex items-center gap-4 mt-2">
        <Button
          className="bg-gray-900 text-white hover:rounded-full hover:bg-gray-700"
          title="Mail me at: me@thetuhin.com"
          onClick={() => {
            window.open("mailto:me@thetuhin.com");
          }}
        >
          Email me
        </Button>

        <Button
          className="bg-gray-100 hover:rounded-full"
          onClick={() => {
            const ask = confirm(
              "Sorry, for the native confirm dialog. I am moving very fast so the resume is changing very frequently. However you can check my Github profile (click ok to navigate)."
            );

            if (ask) {
              window.open("https://github.com/tuhinpal");
            }
          }}
        >
          Resume
        </Button>
      </div>
    </div>
  );
}
