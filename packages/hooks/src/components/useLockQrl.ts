import { useSignal, $ } from '@builder.io/qwik';
/**
 * Apply a lock to a QRL or to prevent parallel executions 
 * */

export function useLockQRL<P extends any[] = any[], V = any>(fn: (...args: P) => Promise<V>) {
  const lockSig = useSignal(false);
  return $(
    async (...args: P) => {
      if (lockSig.value) return;
      lockSig.value = true;
      try {
        const ret = await fn(...args);
        return ret;
      } catch (e) {
        throw e;
      } finally {
        lockSig.value = false;
      }
    });
}
