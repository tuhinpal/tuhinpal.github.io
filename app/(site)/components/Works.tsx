"use client";

import Image from "next/image";
import classNames from "classnames";

import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { works, ButtonTypes } from "@/data/works";

export default function Works() {
  return (
    <div className="flex flex-col items-center gap-y-16 justify-center my-16 md:my-24">
      {works.map((work) => (
        <div
          className="flex flex-col items-center justify-center rounded-2xl md:rounded-[52px] overflow-hidden relative py-10 group hover:shadow-xl transition-all duration-100 ease-in-out"
          key={work.name}
          style={{
            backgroundColor: work.bgColor,
            height: "75vh",
          }}
        >
          <div className="px-[10%] transform translate-y-14 transition-all duration-200 group-hover:translate-y-10 ease-in-out">
            <Image src={work.image} alt={work.name} width={1000} height={500} />
          </div>

          {work.isLatest && (
            <div className="absolute md:top-14 md:left-14 top-4 left-4 z-10">
              <Button className="bg-gray-800 rounded-full px-4 py-2 text-white hover:bg-gray-800">
                Latest
              </Button>
            </div>
          )}

          <div
            className={classNames(
              `
                flex flex-col items-start justify-end w-full h-full md:px-14 md:py-16 px-4 py-6 text-start absolute bottom-0
                md:bg-gradient-to-tr md:via-transparent md:to-transparent
                md:group-hover:backdrop-blur-sm md:group-hover:bg-gradient-to-tr
                backdrop-blur-sm bg-gradient-to-tr 
                md:backdrop-blur-none`,
              {
                "md:from-pink-100 md:group-hover:from-pink-200 from-pink-200":
                  work.accentColorTW === "pink",

                "md:from-blue-100 md:group-hover:from-blue-200 from-blue-200":
                  work.accentColorTW === "blue",

                "md:from-green-100 md:group-hover:from-green-200 from-green-200":
                  work.accentColorTW === "green",

                "md:from-yellow-100 md:group-hover:from-yellow-200 from-yellow-200":
                  work.accentColorTW === "yellow",

                "md:from-purple-100 md:group-hover:from-purple-200 from-purple-200":
                  work.accentColorTW === "purple",

                "md:from-red-100 md:group-hover:from-red-200 from-red-200":
                  work.accentColorTW === "red",
              }
            )}
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
