"use client"
import { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "globalwisdom.substack.com",
      layout: "right",
      posts: 3,
      colors: {
        primary: "#ffa600ff",
        secondary: "#808080",
        background: "#FFFFFF",
      },
    };

    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;