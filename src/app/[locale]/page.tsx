import Image from "next/image";
import { T } from "gt-next";
import { LocaleSelector } from "gt-next";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-16 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full items-center justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <LocaleSelector />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <T>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Welcome to this internationalized Next.js app!
            </h1>
          </T>
          <T>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              This example demonstrates how to use gt-next to internationalize a
              Next.js application. Try switching languages using the dropdown
              above.
            </p>
          </T>
          <T>
            <p className="max-w-md text-base leading-7 text-zinc-500 dark:text-zinc-500">
              gt-next makes it easy to translate your React components and
              strings. Wrap your content in a {"<T>"} component and it gets
              translated automatically.
            </p>
          </T>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[180px]"
            href="https://generaltranslation.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <T>gt-next Docs</T>
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[180px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <T>Next.js Docs</T>
          </a>
        </div>
      </main>
    </div>
  );
}
