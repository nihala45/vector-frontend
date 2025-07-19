import React from "react";

const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_Logo.png",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
];

const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-violet-700 mb-8">
          Our Trusted Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-10 sm:h-12 object-contain"
              style={{ maxWidth: "120px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
