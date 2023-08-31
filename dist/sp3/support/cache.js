var i = Object.defineProperty;
var n = (a, e, t) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var c = (a, e, t) => (n(a, typeof e != "symbol" ? e + "" : e, t), t);
class l {
  /**
   * @description Remember a given value on local storage.
   * @param {string} key The key to identify the record.
   * @param {any} data Data that must be cached.
   * @param {string} expire A string date representation on where that date should be expired.
   */
  remember(e, t, s) {
    window.localStorage.setItem(
      e,
      JSON.stringify({
        payload: t,
        expire: s ?? (/* @__PURE__ */ new Date()).toISOString()
      })
    );
  }
  /**
   * Check if a given key exists on cache.
   * @param {string} key
   */
  exists(e) {
    return !!window.localStorage.getItem(e);
  }
  /**
   * Get the value of a given key from cache.
   *
   * @param {string} key The key to look at in the cache.
   * @param {() => any} callback Callback to execute when no value found for selected key.
   */
  async get(e, t) {
    const s = {
      cancel: (r) => (this.forget(e), r)
    };
    if (!this.exists(e)) {
      const r = /* @__PURE__ */ new Date();
      r.setDate(r.getDate() + 1), this.remember(
        e,
        await t(s),
        r.toISOString()
      );
    }
    const o = window.localStorage.getItem(e);
    return o ? JSON.parse(o).payload : await t(s);
  }
  /**
   * Remove a given key from the cache.
   * @param {string} key The key to remove.
   */
  forget(e) {
    window.localStorage.removeItem(e);
  }
}
class h {
  constructor() {
    c(this, "cache");
  }
  key() {
    return "Cache";
  }
  boot({ debug: e }) {
    return e && console.log(`[Padsquad]:${this.key()} service BOOTED.`), this.cache;
  }
  async register({ debug: e }) {
    e && console.log(`[Padsquad]:${this.key()} service REGISTERED.`), this.cache = new l();
  }
}
export {
  h as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL1N1cHBvcnQvUHNDYWNoZS50cyIsIi4uLy4uL3NyYy9jb3JlL1Byb3ZpZGVycy9Qc0NhY2hlUHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb2R1bGUgdG8gbWFuYWdlIGNhY2hpbmcgZGF0YSBvbiBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgRGVsdmkgTWFydGUgPGRlbHZpLm1hcnRlQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIFBhZHNxdWFkL1N1cHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHNDYWNoZSB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVtZW1iZXIgYSBnaXZlbiB2YWx1ZSBvbiBsb2NhbCBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIHJlY29yZC5cbiAgICogQHBhcmFtIHthbnl9IGRhdGEgRGF0YSB0aGF0IG11c3QgYmUgY2FjaGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwaXJlIEEgc3RyaW5nIGRhdGUgcmVwcmVzZW50YXRpb24gb24gd2hlcmUgdGhhdCBkYXRlIHNob3VsZCBiZSBleHBpcmVkLlxuICAgKi9cbiAgcHVibGljIHJlbWVtYmVyKGtleTogc3RyaW5nLCBkYXRhOiBhbnksIGV4cGlyZTogc3RyaW5nKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBrZXksXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBwYXlsb2FkOiBkYXRhLFxuICAgICAgICAgIGV4cGlyZTogZXhwaXJlID8/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgZ2l2ZW4ga2V5IGV4aXN0cyBvbiBjYWNoZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKi9cbiAgcHVibGljIGV4aXN0cyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiAhIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgYSBnaXZlbiBrZXkgZnJvbSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGxvb2sgYXQgaW4gdGhlIGNhY2hlLlxuICAgKiBAcGFyYW0geygpID0+IGFueX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gZXhlY3V0ZSB3aGVuIG5vIHZhbHVlIGZvdW5kIGZvciBzZWxlY3RlZCBrZXkuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0PFQgPSBhbnk+KGtleTogc3RyaW5nLCBjYWxsYmFjazogKHtjYW5jZWx9OiB7XG4gICAgY2FuY2VsOiAoZGF0YT86IFQpID0+IFRcbiAgfSkgPT4gYW55KSB7XG4gICAgY29uc3QgY29udGV4dENhbGxiYWNrID0ge1xuICAgICAgY2FuY2VsOiAob3V0cHV0PzogYW55KSA6IFQgPT4ge1xuICAgICAgICB0aGlzLmZvcmdldChrZXkpXG4gICAgICAgIHJldHVybiBvdXRwdXQgYXMgVFxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKCF0aGlzLmV4aXN0cyhrZXkpKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSlcbiAgICAgIHRoaXMucmVtZW1iZXIoXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKGNvbnRleHRDYWxsYmFjayksXG4gICAgICAgICAgZGF0ZS50b0lTT1N0cmluZygpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBjYWxsYmFjayhjb250ZXh0Q2FsbGJhY2spIGFzIFQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoY2FjaGVkKTtcblxuICAgIHJldHVybiBkYXRhLnBheWxvYWQgYXMgVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBnaXZlbiBrZXkgZnJvbSB0aGUgY2FjaGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byByZW1vdmUuXG4gICAqL1xuICBwdWJsaWMgZm9yZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiIsImltcG9ydCBQc0NhY2hlIGZyb20gXCIuLi9TdXBwb3J0L1BzQ2FjaGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbXBsZW1lbnRzIFBzLlByb3ZpZGVyLkludGVyZmFjZSB7XG4gIHByaXZhdGUgY2FjaGU/OiBQcy5TdXBwb3J0LkNhY2hlLkluc3RhbmNlO1xuXG4gIGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2FjaGUnXG4gIH1cblxuICBib290KHtkZWJ1Z306IFBzLlByb3ZpZGVyLkNvbnRleHQpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbUGFkc3F1YWRdOiR7dGhpcy5rZXkoKX0gc2VydmljZSBCT09URUQuYClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVcbiAgfVxuXG4gIGFzeW5jIHJlZ2lzdGVyKHtkZWJ1Z306IFBzLlByb3ZpZGVyLkNvbnRleHQpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbUGFkc3F1YWRdOiR7dGhpcy5rZXkoKX0gc2VydmljZSBSRUdJU1RFUkVELmApXG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZSA9IG5ldyBQc0NhY2hlKClcbiAgfVxufSJdLCJuYW1lcyI6WyJQc0NhY2hlIiwia2V5IiwiZGF0YSIsImV4cGlyZSIsImNhbGxiYWNrIiwiY29udGV4dENhbGxiYWNrIiwib3V0cHV0IiwiZGF0ZSIsImNhY2hlZCIsIlBzQ2FjaGVQcm92aWRlciIsIl9fcHVibGljRmllbGQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsTUFBcUJBLEVBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9wQixTQUFTQyxHQUFhQyxHQUFXQyxHQUFnQjtBQUN0RCxXQUFPLGFBQWE7QUFBQSxNQUNoQkY7QUFBQSxNQUNBLEtBQUssVUFBVTtBQUFBLFFBQ2IsU0FBU0M7QUFBQSxRQUNULFFBQVFDLE1BQWMsb0JBQUEsS0FBQSxHQUFPLFlBQVk7QUFBQSxNQUFBLENBQzFDO0FBQUEsSUFBQTtBQUFBLEVBRVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTU8sT0FBT0YsR0FBYTtBQUN6QixXQUFPLENBQUMsQ0FBQyxPQUFPLGFBQWEsUUFBUUEsQ0FBRztBQUFBLEVBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxNQUFhLElBQWFBLEdBQWFHLEdBRTVCO0FBQ1QsVUFBTUMsSUFBa0I7QUFBQSxNQUN0QixRQUFRLENBQUNDLE9BQ1AsS0FBSyxPQUFPTCxDQUFHLEdBQ1JLO0FBQUEsSUFDVDtBQUVGLFFBQUksQ0FBQyxLQUFLLE9BQU9MLENBQUcsR0FBRztBQUNmLFlBQUFNLHdCQUFXO0FBQ2pCLE1BQUFBLEVBQUssUUFBUUEsRUFBSyxRQUFRLElBQUksQ0FBQyxHQUMxQixLQUFBO0FBQUEsUUFDRE47QUFBQSxRQUNBLE1BQU1HLEVBQVNDLENBQWU7QUFBQSxRQUM5QkUsRUFBSyxZQUFZO0FBQUEsTUFBQTtBQUFBLElBRXZCO0FBRUEsVUFBTUMsSUFBUyxPQUFPLGFBQWEsUUFBUVAsQ0FBRztBQUU5QyxXQUFLTyxJQUlRLEtBQUssTUFBTUEsQ0FBTSxFQUVsQixVQUxILE1BQU1KLEVBQVNDLENBQWU7QUFBQSxFQU16QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNTyxPQUFPSixHQUFhO0FBQ2xCLFdBQUEsYUFBYSxXQUFXQSxDQUFHO0FBQUEsRUFDcEM7QUFDRjtBQ3hFc0QsTUFBQVEsRUFBQTtBQUFBLEVBQUE7QUFDNUMsSUFBQUMsRUFBQTtBQUFBO0FBQUEsRUFFUixNQUFjO0FBQ0wsV0FBQTtBQUFBLEVBQ1Q7QUFBQSxFQUVBLEtBQUssRUFBQyxPQUFBQyxLQUE2QjtBQUNqQyxXQUFJQSxLQUNGLFFBQVEsSUFBSSxjQUFjLEtBQUssSUFBSyxDQUFBLGtCQUFrQixHQUVqRCxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBRUEsTUFBTSxTQUFTLEVBQUMsT0FBQUEsS0FBNkI7QUFDM0MsSUFBSUEsS0FDRixRQUFRLElBQUksY0FBYyxLQUFLLElBQUssQ0FBQSxzQkFBc0IsR0FHdkQsS0FBQSxRQUFRLElBQUlYO0VBQ25CO0FBQ0Y7In0=
