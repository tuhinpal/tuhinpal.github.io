"use client";

import Image from "next/image";
import classNames from "classnames";

import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { works, ButtonTypes } from "@/data/works";

export default function Works() {
  return (
    <div className="flex flex-col items-center justify-center my-16 md:my-24">
      {works.map((work) => (
        <div
          className="flex flex-col items-center justify-center rounded-[52px] overflow-hidden relative py-10 group hover:shadow-xl transition-all duration-100 ease-in-out"
          key={work.name}
          style={{
            backgroundColor: work.bgColor,
            height: "75vh",
          }}
        >
          <div className="px-[10%] transform translate-y-20 transition-all duration-200 group-hover:translate-y-10 ease-in-out">
            <Image
              src={work.image}
              alt={work.name}
              width={1000}
              height={500}
              className=""
            />
          </div>

          {work.isLatest && (
            <div className="absolute top-14 left-14 z-10">
              <Button className="bg-gray-800 rounded-full px-4 py-2 text-white hover:bg-gray-800">
                Latest
              </Button>
            </div>
          )}

          <div
            className="
                      flex flex-col items-start justify-end w-full h-full px-14 py-16 text-start absolute bottom-0
                      md:bg-gradient-to-tr md:from-pink-100 md:via-transparent md:to-transparent
                      md:group-hover:backdrop-blur-sm md:group-hover:bg-gradient-to-tr md:group-hover:from-pink-200
                      backdrop-blur-sm bg-gradient-to-tr from-pink-200
                      md:backdrop-blur-none
                      "
          >
            <h2 className="text-4xl font-bold leading-tight">{work.name}</h2>

            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-3">
              {work.categories.map((category) => (
                <Button
                  className="text-xs py-0.5 px-3 rounded-md cursor-default hover:bg-white hover:rounded-full text-black bg-white bg-opacity-75"
                  key={category}
                >
                  {category}
                </Button>
              ))}
            </div>

            <p className="mt-3.5 text-lg font-medium max-w-2xl block group-hover:block md:hidden">
              {work.description}
            </p>

            <div className="mt-4 gap-3 flex md:hidden group-hover:flex">
              {work.links.map((link) => (
                <Anchor
                  key={link.title}
                  href={link.url}
                  passHref
                  aria-label={link.title}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  className={classNames(
                    "hover:rounded-full px-3 py-1 text-white",
                    {
                      "bg-gray-800 hover:bg-gray-900":
                        link.buttonType === ButtonTypes.PRIMARY,
                      "bg-gray-50 hover:bg-gray-100 text-black":
                        link.buttonType === ButtonTypes.SECONDARY,
                    }
                  )}
                >
                  {link.title}
                </Anchor>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
