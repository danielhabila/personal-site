import React from "react";

function WidgetNewsletter() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="text-center mb-8">
        <div className="font-aspekta font-[650] mb-1">
          Subscribe through your favorite platform.
        </div>
      </div>

      {/* Buttons */}
      <div className="-m-1.5 max-w-xl  mb-8 text-center">
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Apple Podcasts
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Spotify
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          YouTube
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Google Podcasts
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Amazon Music
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Pocket Casts
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Castro
        </button>
        <button className="text-xs px-2 rounded-full py-1 text-white bg-blue-500 hover:bg-blue-600 group shadow-sm m-1.5">
          Overcast
        </button>
      </div>
    </div>
  );
}

export default WidgetNewsletter;
