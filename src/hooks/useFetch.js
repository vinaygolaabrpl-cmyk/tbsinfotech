import { useEffect, useState } from 'react';

/**
 * Generic data hook. Today it resolves data synchronously from the
 * JSON-backed services/*Api.js layer; swap the resolver for an axios
 * call later without touching any component that consumes this hook.
 */
export function useFetch(resolver, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    Promise.resolve()
      .then(() => resolver())
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        if (!cancelled) setState({ data: null, loading: false, error });
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
