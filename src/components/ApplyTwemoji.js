import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import twemoji from 'twemoji';

const ApplyTwemoji = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      twemoji.parse(document.body, {base: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/"});
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location]);
  return null;
};

export default ApplyTwemoji;
