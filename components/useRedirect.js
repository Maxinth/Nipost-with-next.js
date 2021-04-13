import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useRedirect = () => {
  const [time, setTime] = useState(3);
  const countTimeDown = () => setTime(time - 1);
  const router = useRouter();

  useEffect(() => {
    let newTime = setInterval(() => {
      countTimeDown();
    }, 2000);

    return () => {
      clearInterval(newTime);
    };
  }, [time]);

  useEffect(() => {
    if (time === 1) {
      router.push("/");
    }
  });
  return { time };
};

export default useRedirect;
