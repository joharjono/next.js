import React from "react";

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-start justify-start h-screen ">
      <h2 className="text-2xl py-5 mb-5 relative underline-quarter max-w-fit">
        Contact Me
      </h2>
      <p className="mb-6">
        Have any questions or projects in mind? Feel free to reach out via
        email:
      </p>
      <a
        href="mailto:your-email@example.com"
        className="text-blue-500 hover:underline text-lg"
      >
        joharjono.cr@gmail.com
      </a>
    </div>
  );
}
