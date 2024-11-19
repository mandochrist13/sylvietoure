"use client";

import Image from "next/image";

const CLIENTS = ["ogo", "qwa", "goo", "jfnlogo"];

export function Clients() {
  return (
    <section className="mt-[100px] flex items-center justify-center px-8 py-28">
      <div className="container mx-auto text-center">
        <h6
          color="blue-gray"
          className="mb-8 text-xl font-semibold text-accent sm:text-4xl"
        >
          Mes partenaires
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
