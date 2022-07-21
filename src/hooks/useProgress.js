/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useProgress = promises => {
  let done = 0;
  const [progress, setProgress] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [finished, setFinished] = useState(done === promises.length);
  useEffect(() => {
    if (progress === 1) {
      setFinished(true);
    }
  }, [progress]);

  if (!isSubscribed) {
    promises.map(p =>
      p.finally(() => {
        done += 1;
        setProgress(Number.parseFloat((done / promises.length).toFixed(2)));
      })
    );
    setIsSubscribed(true);
  }

  return { progress, finished };
};

export default useProgress;
