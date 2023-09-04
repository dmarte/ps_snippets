var m = Object.defineProperty;
var v = (t, e, n) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => (v(t, typeof e != "symbol" ? e + "" : e, n), n);
import g from "../libs/lib-alpine.js";
const d = {
  name: "spot",
  handler(t, { expression: e, modifiers: n }, { evaluate: r, cleanup: o }) {
    var u;
    if (!(t instanceof HTMLElement))
      return;
    const i = () => {
      var h;
      const s = r(e);
      document.dispatchEvent(new CustomEvent("hotspot:click", {
        bubbles: !0,
        detail: {
          data: {
            asset: t.id ?? t.dataset.asset ?? (s == null ? void 0 : s.asset),
            label: `${n[0] ?? ""}`,
            url: `${(s == null ? void 0 : s.asset) ?? ((h = t.dataset) == null ? void 0 : h.url) ?? ""}`
          },
          el: t
        }
      }));
    }, c = () => {
      document.dispatchEvent(new CustomEvent("hotspot:touchstart", {
        bubbles: !0,
        detail: {
          data: r(e),
          labels: n,
          el: t
        }
      }));
    }, a = document.createElement("div");
    a.style.width = `${t.clientWidth}px`, a.style.height = `${t.clientHeight}px`, a.style.position = "absolute", a.addEventListener("click", i), a.addEventListener("touchstart", c), o(() => {
      a.removeEventListener("click", i), a.removeEventListener("touchstart", c);
    }), (u = t == null ? void 0 : t.style) != null && u.position || (t.style.position = "relative"), t.prepend(a);
  }
}, y = {
  getWeekDayShortName: (t) => [
    "Sun",
    "Mon",
    "Tue",
    "Wen",
    "Thu",
    "Fri",
    "Sat"
  ][t] ?? "",
  getMonthShortName: (t) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t] ?? "",
  asDMy(t) {
    return `${this.getWeekDayShortName(t.getDay())}, ${this.getMonthShortName(t.getMonth())} ${t.getFullYear().toString().substring(2)}`;
  },
  format(t, e = "DMy") {
    return this[`as${e}`] ? this[`as${e}`](t) : "";
  }
}, p = {
  name: "date-format",
  handler(t, { modifiers: e, expression: n }, { evaluate: r }) {
    if (t instanceof HTMLElement) {
      e.length < 1 && (e[0] = "DMy");
      try {
        const o = /* @__PURE__ */ new Date(`${r(n)}` ?? t.textContent);
        t.innerText = y.format(o, e[0]);
      } catch {
        return;
      }
    }
  }
};
class S {
  constructor() {
    l(this, "alpine", g);
  }
  boot({ debug: e }) {
    return e && console.log("[PadSquad]:Alpine service BOOTED."), this.alpine;
  }
  key() {
    return "alpine";
  }
  async register({ debug: e }) {
    e && console.log("[PadSquad]:Alpine service REGISTERED."), this.alpine.directive(d.name, d.handler), this.alpine.directive(p.name, p.handler);
  }
}
export {
  S as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaW5lLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9EaXJlY3RpdmVzL1Nwb3QudHMiLCIuLi8uLi9zcmMvY29yZS9EaXJlY3RpdmVzL0RhdGVGb3JtYXQudHMiLCIuLi8uLi9zcmMvY29yZS9Qcm92aWRlcnMvQWxwaW5lUHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgPFBzLkFscGluZS5EaXJlY3RpdmU+e1xuICBuYW1lOiAnc3BvdCcsXG4gIGhhbmRsZXIoZWwsIHtleHByZXNzaW9uLCBtb2RpZmllcnN9LCB7ZXZhbHVhdGUsIGNsZWFudXB9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgYSA9IGV2YWx1YXRlKGV4cHJlc3Npb24pIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB1bmRlZmluZWRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdob3RzcG90OmNsaWNrJywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhc3NldDogZWwuaWQgPz8gZWwuZGF0YXNldC5hc3NldCA/PyBhPy5hc3NldCxcbiAgICAgICAgICAgIGxhYmVsOiBgJHttb2RpZmllcnNbMF0gPz8gJyd9YCxcbiAgICAgICAgICAgIHVybDogYCR7YT8uYXNzZXQgPz8gZWwuZGF0YXNldD8udXJsID8/ICcnfWBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH1cbiAgICBjb25zdCBvblRvdWNoU3RhcnQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaG90c3BvdDp0b3VjaHN0YXJ0Jywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBkYXRhOiBldmFsdWF0ZShleHByZXNzaW9uKSxcbiAgICAgICAgICBsYWJlbHM6IG1vZGlmaWVycyxcbiAgICAgICAgICBlbFxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuc3R5bGUud2lkdGggPSBgJHtlbC5jbGllbnRXaWR0aH1weGBcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7ZWwuY2xpZW50SGVpZ2h0fXB4YFxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpXG5cbiAgICBjbGVhbnVwKCgpID0+IHtcbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spXG4gICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydClcbiAgICB9KVxuXG4gICAgaWYgKCFlbD8uc3R5bGU/LnBvc2l0aW9uKSB7XG4gICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICBlbC5wcmVwZW5kKGRpdilcbiAgfVxufVxuXG5cbiIsIlxuY29uc3QgdXRpbHMgPSB7XG4gIGdldFdlZWtEYXlTaG9ydE5hbWU6ICh3ZWVrRGF5OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBfXyA9IFtcbiAgICAgICdTdW4nLFxuICAgICAgJ01vbicsXG4gICAgICAnVHVlJyxcbiAgICAgICdXZW4nLFxuICAgICAgJ1RodScsXG4gICAgICAnRnJpJyxcbiAgICAgICdTYXQnLFxuICAgIF1cbiAgICByZXR1cm4gX19bd2Vla0RheV0gPz8gJydcbiAgfSxcbiAgZ2V0TW9udGhTaG9ydE5hbWU6IChtb250aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgX18gPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgICByZXR1cm4gX19bbW9udGhdID8/ICcnXG4gIH0sXG4gIGFzRE15KGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5nZXRXZWVrRGF5U2hvcnROYW1lKGRhdGUuZ2V0RGF5KCkpfSwgJHt0aGlzLmdldE1vbnRoU2hvcnROYW1lKGRhdGUuZ2V0TW9udGgoKSl9ICR7ZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpfWBcbiAgfSxcbiAgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdDogJ0RNeScgPSAnRE15Jykge1xuICAgIGlmICh0aGlzW2BhcyR7Zm9ybWF0fWBdKSB7XG4gICAgICByZXR1cm4gdGhpc1tgYXMke2Zvcm1hdH1gXShkYXRlKVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgPFBzLkFscGluZS5EaXJlY3RpdmU+e1xuICBuYW1lOiAnZGF0ZS1mb3JtYXQnLFxuICBoYW5kbGVyKGVsLCB7bW9kaWZpZXJzLGV4cHJlc3Npb259LCB7ZXZhbHVhdGV9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZihtb2RpZmllcnMubGVuZ3RoIDwgMSkge1xuICAgICAgbW9kaWZpZXJzWzBdID0gJ0RNeSdcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHtldmFsdWF0ZShleHByZXNzaW9uKX1gID8/IGVsLnRleHRDb250ZW50KVxuICAgICAgZWwuaW5uZXJUZXh0ID0gdXRpbHMuZm9ybWF0KGRhdGUsIG1vZGlmaWVyc1swXSBhcyBhbnkpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQWxwaW5lIGZyb20gJ2FscGluZWpzJ1xuaW1wb3J0IHNwb3QgZnJvbSBcIi4uL0RpcmVjdGl2ZXMvU3BvdC50c1wiO1xuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSBcIi4uL0RpcmVjdGl2ZXMvRGF0ZUZvcm1hdC50c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaW5lUHJvdmlkZXIgaW1wbGVtZW50cyBQcy5Qcm92aWRlci5JbnRlcmZhY2Uge1xuICBwcm90ZWN0ZWQgYWxwaW5lID0gQWxwaW5lXG5cbiAgYm9vdCh7ZGVidWd9OiBQcy5Qcm92aWRlci5Db250ZXh0KTogYW55IHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbUGFkU3F1YWRdOkFscGluZSBzZXJ2aWNlIEJPT1RFRC4nKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbHBpbmVcbiAgfVxuXG4gIGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImFscGluZVwiO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIoe2RlYnVnfTogUHMuUHJvdmlkZXIuQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ1tQYWRTcXVhZF06QWxwaW5lIHNlcnZpY2UgUkVHSVNURVJFRC4nKVxuICAgIH1cblxuICAgIHRoaXMuYWxwaW5lLmRpcmVjdGl2ZShzcG90Lm5hbWUsIHNwb3QuaGFuZGxlcilcbiAgICB0aGlzLmFscGluZS5kaXJlY3RpdmUoZGF0ZUZvcm1hdC5uYW1lLCBkYXRlRm9ybWF0LmhhbmRsZXIpXG4gIH1cbn0iXSwibmFtZXMiOlsic3BvdCIsImVsIiwiZXhwcmVzc2lvbiIsIm1vZGlmaWVycyIsImV2YWx1YXRlIiwiY2xlYW51cCIsIm9uQ2xpY2siLCJhIiwiX2EiLCJvblRvdWNoU3RhcnQiLCJkaXYiLCJ1dGlscyIsIndlZWtEYXkiLCJtb250aCIsImRhdGUiLCJmb3JtYXQiLCJkYXRlRm9ybWF0IiwiQWxwaW5lUHJvdmlkZXIiLCJfX3B1YmxpY0ZpZWxkIiwiQWxwaW5lIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFvQ0EsSUFBQTtBQUFBLEVBQ2xDLE1BQU07QUFBQSxFQUNOLFFBQVFDLEdBQUksRUFBQyxZQUFBQyxHQUFZLFdBQUFDLEtBQVksRUFBQyxVQUFBQyxHQUFVLFNBQUFDLEtBQVU7O0FBQ3BELFFBQUEsRUFBRUosYUFBYztBQUNsQjtBQUVGLFVBQU1LLElBQVUsTUFBTTs7QUFDZCxZQUFBQyxJQUFJSCxFQUFTRixDQUFVO0FBQ3BCLGVBQUEsY0FBYyxJQUFJLFlBQVksaUJBQWlCO0FBQUEsUUFDdEQsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0osT0FBT0QsRUFBRyxNQUFNQSxFQUFHLFFBQVEsVUFBU00sS0FBQSxnQkFBQUEsRUFBRztBQUFBLFlBQ3ZDLE9BQU8sR0FBR0osRUFBVSxDQUFDLEtBQUssRUFBRTtBQUFBLFlBQzVCLEtBQUssSUFBR0ksS0FBQSxnQkFBQUEsRUFBRyxZQUFTQyxJQUFBUCxFQUFHLFlBQUgsZ0JBQUFPLEVBQVksUUFBTyxFQUFFO0FBQUEsVUFDM0M7QUFBQSxVQUNBLElBQUFQO0FBQUEsUUFDRjtBQUFBLE1BQ0QsQ0FBQSxDQUFDO0FBQUEsSUFBQSxHQUVFUSxJQUFlLE1BQU07QUFDaEIsZUFBQSxjQUFjLElBQUksWUFBWSxzQkFBc0I7QUFBQSxRQUMzRCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsVUFDTixNQUFNTCxFQUFTRixDQUFVO0FBQUEsVUFDekIsUUFBUUM7QUFBQSxVQUNSLElBQUFGO0FBQUEsUUFDRjtBQUFBLE1BQ0QsQ0FBQSxDQUFDO0FBQUEsSUFBQSxHQUVFUyxJQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLElBQUFBLEVBQUksTUFBTSxRQUFRLEdBQUdULEVBQUcsV0FBVyxNQUNuQ1MsRUFBSSxNQUFNLFNBQVMsR0FBR1QsRUFBRyxZQUFZLE1BQ3JDUyxFQUFJLE1BQU0sV0FBVyxZQUVqQkEsRUFBQSxpQkFBaUIsU0FBU0osQ0FBTyxHQUNqQ0ksRUFBQSxpQkFBaUIsY0FBY0QsQ0FBWSxHQUUvQ0osRUFBUSxNQUFNO0FBQ1IsTUFBQUssRUFBQSxvQkFBb0IsU0FBU0osQ0FBTyxHQUNwQ0ksRUFBQSxvQkFBb0IsY0FBY0QsQ0FBWTtBQUFBLElBQUEsQ0FDbkQsSUFFSUQsSUFBQVAsS0FBQSxnQkFBQUEsRUFBSSxVQUFKLFFBQUFPLEVBQVcsYUFDZFAsRUFBRyxNQUFNLFdBQVcsYUFHdEJBLEVBQUcsUUFBUVMsQ0FBRztBQUFBLEVBQ2hCO0FBQ0YsR0NoRE1DLElBQVE7QUFBQSxFQUNaLHFCQUFxQixDQUFDQyxNQUNUO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQUEsRUFFUUEsQ0FBTyxLQUFLO0FBQUEsRUFFeEIsbUJBQW1CLENBQUNDLE1BQ1AsQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSyxFQUNwRkEsQ0FBSyxLQUFLO0FBQUEsRUFFdEIsTUFBTUMsR0FBWTtBQUNULFdBQUEsR0FBRyxLQUFLLG9CQUFvQkEsRUFBSyxRQUFRLENBQUMsS0FBSyxLQUFLLGtCQUFrQkEsRUFBSyxVQUFVLENBQUMsSUFBSUEsRUFBSyxZQUFBLEVBQWMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDN0k7QUFBQSxFQUNBLE9BQU9BLEdBQVlDLElBQWdCLE9BQU87QUFDeEMsV0FBSSxLQUFLLEtBQUtBLENBQU0sRUFBRSxJQUNiLEtBQUssS0FBS0EsQ0FBTSxFQUFFLEVBQUVELENBQUksSUFFMUI7QUFBQSxFQUNUO0FBQ0YsR0FDb0NFLElBQUE7QUFBQSxFQUNsQyxNQUFNO0FBQUEsRUFDTixRQUFRZixHQUFJLEVBQUMsV0FBQUUsR0FBVSxZQUFBRCxFQUFhLEdBQUEsRUFBQyxVQUFBRSxLQUFXO0FBQzFDLFFBQUVILGFBQWMsYUFHakI7QUFBQSxNQUFBRSxFQUFVLFNBQVMsTUFDcEJBLEVBQVUsQ0FBQyxJQUFJO0FBRWIsVUFBQTtBQUNJLGNBQUFXLHdCQUFXLEtBQUssR0FBR1YsRUFBU0YsQ0FBVSxDQUFDLE1BQU1ELEVBQUcsV0FBVztBQUNqRSxRQUFBQSxFQUFHLFlBQVlVLEVBQU0sT0FBT0csR0FBTVgsRUFBVSxDQUFDLENBQVE7QUFBQSxNQUFBLFFBQy9DO0FBQ047QUFBQSxNQUNGO0FBQUE7QUFBQSxFQUNGO0FBQ0Y7QUN6Q0EsTUFBcUJjLEVBQWdEO0FBQUEsRUFBckU7QUFDWSxJQUFBQyxFQUFBLGdCQUFTQztBQUFBQTtBQUFBQSxFQUVuQixLQUFLLEVBQUMsT0FBQUMsS0FBa0M7QUFDdEMsV0FBSUEsS0FDRixRQUFRLElBQUksbUNBQW1DLEdBRTFDLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxNQUFjO0FBQ0wsV0FBQTtBQUFBLEVBQ1Q7QUFBQSxFQUVBLE1BQU0sU0FBUyxFQUFDLE9BQUFBLEtBQTRDO0FBQzFELElBQUlBLEtBQ0YsUUFBUSxJQUFJLHVDQUF1QyxHQUdyRCxLQUFLLE9BQU8sVUFBVXBCLEVBQUssTUFBTUEsRUFBSyxPQUFPLEdBQzdDLEtBQUssT0FBTyxVQUFVZ0IsRUFBVyxNQUFNQSxFQUFXLE9BQU87QUFBQSxFQUMzRDtBQUNGOyJ9
