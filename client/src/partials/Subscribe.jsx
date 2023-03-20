import React, { useState, useRef } from "react";

function Subscribe() {
  const [url, setUrl] = useState("https://cruip.com/podcast");

  const input = useRef(null);

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    input.current.select();
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-40">
          <div className="relative">
            {/* Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden"
              aria-hidden="true"
            >
              {/* Illustration */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10 blur-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2106"
                  height="1327"
                >
                  <defs>
                    <filter
                      id="hi-a"
                      width="133.3%"
                      height="131.3%"
                      x="-16.7%"
                      y="-15.6%"
                      filterUnits="objectBoundingBox"
                    >
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                    </filter>
                    <filter
                      id="hi-b"
                      width="133.3%"
                      height="131.3%"
                      x="-16.7%"
                      y="-15.6%"
                      filterUnits="objectBoundingBox"
                    >
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                    </filter>
                    <filter
                      id="hi-c"
                      width="159.9%"
                      height="145%"
                      x="-29.9%"
                      y="-22.5%"
                      filterUnits="objectBoundingBox"
                    >
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                    </filter>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#6D28D9"
                      fillOpacity=".72"
                      d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                      filter="url(#hi-a)"
                      transform="translate(0 -605)"
                    />
                    <path
                      fill="#67E8F9"
                      fillOpacity=".64"
                      d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                      filter="url(#hi-b)"
                      transform="translate(0 -605)"
                    />
                    <path
                      fill="#F472B6"
                      fillOpacity=".8"
                      d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
                      filter="url(#hi-c)"
                      transform="translate(0 -605)"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Sparkles */}
            <div
              className="absolute top-0 -mt-4 left-1/2 -translate-x-1/2 pointer-events-none -z-10 hidden md:block"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1270" height="483">
                <g fill="#FCD34D" fillRule="nonzero">
                  <path d="M500 13.283A22.888 22.888 0 0 0 511.495.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM547.29 36.768a24 24 0 0 0 12.06-13.76c.13-.36 2.26 11.8 9.5 14.14 0 0-8.71 4.18-10.78 12.45-.03.11-.53-6.57-10.78-12.83ZM373 468.47c5.425.258 10.73-1.707 14.754-5.466.247-.223-3.208 10.084 1.246 14.993l-.344-.01c-1.611-.023-8.525.176-12.907 5.012-.068.072 2.332-5.303-2.749-14.53Z" />
                </g>
              </svg>
            </div>

            {/* Content */}
            <div className="py-12 md:py-20 -mx-20 px-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 font-hkgrotesk text-slate-100 mb-12">
                  Subscribe through your favorite
                  <span className="font-permanent-marker text-blue-500 font-normal whitespace-nowrap">
                    {" "}
                    <span className="inline-flex relative">
                      <svg
                        className="absolute right-0 top-full mt-1 max-w-none -z-10"
                        width="235"
                        height="8"
                        viewBox="0 0 235 8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-white"
                          fillRule="nonzero"
                          d="m62.122 0 .736.129 11.33-.031c1.516-.002 3.042-.003 4.584 0l6.493.028c4.172.02 8.378.046 12.711.104l2.178.032c4.478.074 8.218-.013 12.786.08l5.106.116c15.559.37 32.114.991 49.489 1.857l2.27.114c4.391.228 8.539.39 12.888.613 4.35.224 8.7.434 12.968.64 2.695.115 5.633.3 8.282.455 2.803.138 5.692.303 8.652.495a751.7 751.7 0 0 1 16.286 1.355l2.375.226c4.123.399 4.492.865 2.788 1.244-1.817.475-5.678.645-10.959.483l-2.783-.098c-.313-.012-.63-.026-.95-.04l-3.894-.206-7.828-.405c-5.099-.23-10.236-.481-15.456-.746-4.35-.22-8.504-.377-12.789-.57l-2.59-.122c-5.22-.256-10.24-.433-15.585-.693a464.63 464.63 0 0 0-9.088-.312c-2.989-.09-5.979-.17-8.846-.228L126.6 4.313l-12.14-.117c-8.102-.069-16.139-.108-23.613-.04-7.163.012-13.797.136-20.43.259l-14.243.434-5.209.222c-2.755.122-5.439.255-7.891.428-3.062.223-5.756.507-8.409.796l-1.417.162c-2.088.248-4.053.512-6.458.701-1.342.094-2.356.237-3.698.331-4.845.33-8.099.201-13.623-.446l-.647-.077c-1.383-.155-2.758-.32-4.114-.496l-.544-.076C.469 5.852-.843 5.161.534 4.526l1.08-.44c.822-.333 1.71-.662 2.892-.948 1.252-.304 2.946-.54 4.676-.77l1.882-.25c2.177-.296 5.255-.455 8.12-.654l.57-.04c3.02-.218 6.408-.36 9.714-.53l3.409-.141C42.04.389 51.8.138 62.122 0Z"
                          opacity=".32"
                        />
                      </svg>{" "}
                      platform
                    </span>
                    <span className="text-slate-100">.</span>
                  </span>
                </h1>
                {/* Buttons */}
                <div className="-m-1.5 max-w-xl mx-auto mb-8">
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Apple Podcasts
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Spotify
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    YouTube
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Google Podcasts
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Amazon Music
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Pocket Casts
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Castro
                  </button>
                  <button className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
                    Overcast
                  </button>
                </div>
                {/* Subscribe */}
                <div className="max-w-[360px] mx-auto">
                  <div className="text-xs text-slate-500 font-medium uppercase italic mb-8">
                    Subscribe by RSS feed
                  </div>
                  <div className="w-full">
                    <label className="sr-only" htmlFor="url">
                      URL
                    </label>
                    <div className="relative flex items-center">
                      <div
                        className="absolute inset-0 opacity-60 bg-gradient-to-r from-slate-700 to-slate-700/50 rounded-full pointer-events-none -z-10"
                        aria-hidden="true"
                      />
                      <input
                        id="url"
                        type="text"
                        className="form-input w-full bg-transparent border-transparent text-slate-300 focus:border-blue-300 focus:ring-0 pr-24 text-sm"
                        defaultValue="https://cruip.com/podcast"
                        ref={input}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                      <button
                        className="absolute inset-0 left-auto text-sm pl-2 pr-3 font-medium text-blue-500"
                        onClick={copyUrl}
                      >
                        <span
                          className="absolute inset-0 right-auto w-px -ml-px my-2 bg-slate-600"
                          aria-hidden="true"
                        />
                        <span>Copy URL</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
