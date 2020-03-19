import { useEffect } from 'react';

const useDfpSlot = ({ path, size, id }) => {
  useEffect(() => {
    
    let googletag = window.googletag || {};
    
    googletag.cmd = googletag.cmd || [];

    googletag.cmd.push(() => {
        googletag.destroySlots();
        googletag.defineSlot(path, size, id).addService(googletag.pubads());
        googletag.pubads();
        googletag.enableServices();
        googletag.display(id);
      //  }
      
    });
  }, [path, size, id]);
};

export default useDfpSlot;