import { useEffect } from 'react';

import { logAmplitudeEvent } from '@common/amplitude';

const useTrackScreenLoad = eventName => {
  useEffect(() => {
    logAmplitudeEvent(eventName);
  }, [eventName]);
};

export default useTrackScreenLoad;
