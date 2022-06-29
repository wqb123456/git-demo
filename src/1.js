import { useEffect } from 'react';

function f() {
  useEffect(() => {
    console.log(123);
  }, []);
}
export default f;
