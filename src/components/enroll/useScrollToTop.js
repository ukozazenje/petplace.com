import React from "react"

const useScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }, [])
}

export default useScrollToTop
