import { c as create_ssr_component, d as get_store_value, o as onDestroy, f as add_styles, e as escape, v as validate_component, m as missing_component, h as spread, j as escape_object, k as merge_ssr_styles, l as add_attribute, b as subscribe, p as each } from "../../chunks/index2.js";
import { z } from "zod";
import "trpc-sveltekit";
import { d as derived, w as writable } from "../../chunks/index3.js";
const GithubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"1.2em"}" height="${"1.2em"}" viewBox="${"0 0 24 24"}" class="${"inline-block mr-2 mb-[0.15rem]"}"><g fill="${"none"}"><path d="${"M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"}"></path><path fill="${"currentColor"}" d="${"M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.77 6.77 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.343 9.343 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.77 6.77 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9.081 9.081 0 0 0-2.125 1.045A11.432 11.432 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9.08 9.08 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A3.986 3.986 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14Z"}"></path></g></svg>`;
});
const SendIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"1.2em"}" height="${"1.2em"}" viewBox="${"0 0 512 512"}" class="${"inline-block mr-2 mb-[0.15rem]"}"><path fill="${"currentColor"}" d="${"M474.444 19.857a20.336 20.336 0 0 0-21.592-2.781L33.737 213.8v38.066l176.037 70.414L322.69 496h38.074l120.3-455.4a20.342 20.342 0 0 0-6.62-20.743ZM337.257 459.693L240.2 310.37l149.353-163.582l-23.631-21.576L215.4 290.069L70.257 232.012L443.7 56.72Z"}"></path></svg>`;
});
const SignOutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"1.2em"}" height="${"1.2em"}" viewBox="${"0 0 256 256"}" class="${"inline-block mr-2 mb-[0.15rem]"}"><path fill="${"currentColor"}" d="${"m220.5 131.9l-.3.3l-41.9 42a6.1 6.1 0 0 1-4.3 1.8a6 6 0 0 1-4.2-10.2l31.7-31.8H104a6 6 0 0 1 0-12h97.5l-31.7-31.8a5.8 5.8 0 0 1 0-8.4a5.9 5.9 0 0 1 8.5 0l41.9 42l.3.3l.2.2a3.5 3.5 0 0 1 .5.8h.1a6.1 6.1 0 0 1 0 5.6h-.1a3.5 3.5 0 0 1-.5.8ZM104 210H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h56a6 6 0 0 0 0-12H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h56a6 6 0 0 0 0-12Z"}"></path></svg>`;
});
function writableDerived(origins, derive, reflect, initial) {
  var childDerivedSetter, originValues, blockNextDerive = false;
  var reflectOldValues = "withOld" in reflect;
  var wrappedDerive = (got, set) => {
    childDerivedSetter = set;
    if (reflectOldValues) {
      originValues = got;
    }
    if (!blockNextDerive) {
      let returned = derive(got, set);
      if (derive.length < 2) {
        set(returned);
      } else {
        return returned;
      }
    }
    blockNextDerive = false;
  };
  var childDerived = derived(origins, wrappedDerive, initial);
  var singleOrigin = !Array.isArray(origins);
  var sendUpstream = (setWith) => {
    if (singleOrigin) {
      blockNextDerive = true;
      origins.set(setWith);
    } else {
      setWith.forEach((value, i) => {
        blockNextDerive = true;
        origins[i].set(value);
      });
    }
    blockNextDerive = false;
  };
  if (reflectOldValues) {
    reflect = reflect.withOld;
  }
  var reflectIsAsync = reflect.length >= (reflectOldValues ? 3 : 2);
  var cleanup = null;
  function doReflect(reflecting) {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    if (reflectOldValues) {
      var returned = reflect(reflecting, originValues, sendUpstream);
    } else {
      var returned = reflect(reflecting, sendUpstream);
    }
    if (reflectIsAsync) {
      if (typeof returned == "function") {
        cleanup = returned;
      }
    } else {
      sendUpstream(returned);
    }
  }
  var tryingSet = false;
  function update2(fn) {
    var isUpdated, mutatedBySubscriptions, oldValue, newValue;
    if (tryingSet) {
      newValue = fn(get_store_value(childDerived));
      childDerivedSetter(newValue);
      return;
    }
    var unsubscribe = childDerived.subscribe((value) => {
      if (!tryingSet) {
        oldValue = value;
      } else if (!isUpdated) {
        isUpdated = true;
      } else {
        mutatedBySubscriptions = true;
      }
    });
    newValue = fn(oldValue);
    tryingSet = true;
    childDerivedSetter(newValue);
    unsubscribe();
    tryingSet = false;
    if (mutatedBySubscriptions) {
      newValue = get_store_value(childDerived);
    }
    if (isUpdated) {
      doReflect(newValue);
    }
  }
  return {
    subscribe: childDerived.subscribe,
    set(value) {
      update2(() => value);
    },
    update: update2
  };
}
const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    remove(toastId);
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
function update(toast2) {
  if (toast2.id) {
    clearFromRemoveQueue(toast2.id);
  }
  toasts.update(($toasts) => $toasts.map((t) => t.id === toast2.id ? { ...t, ...toast2 } : t));
}
function add(toast2) {
  toasts.update(($toasts) => [toast2, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast2) {
  if (get_store_value(toasts).find((t) => t.id === toast2.id)) {
    update(toast2);
  } else {
    add(toast2);
  }
}
function dismiss(toastId) {
  toasts.update(($toasts) => {
    if (toastId) {
      addToRemoveQueue(toastId);
    } else {
      $toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      });
    }
    return $toasts.map((t) => t.id === toastId || toastId === void 0 ? { ...t, visible: false } : t);
  });
}
function remove(toastId) {
  toasts.update(($toasts) => {
    if (toastId === void 0) {
      return [];
    }
    return $toasts.filter((t) => t.id !== toastId);
  });
}
function startPause(time) {
  pausedAt.set(time);
}
function endPause(time) {
  let diff;
  pausedAt.update(($pausedAt) => {
    diff = time - ($pausedAt || 0);
    return null;
  });
  toasts.update(($toasts) => $toasts.map((t) => ({
    ...t,
    pauseDuration: t.pauseDuration + diff
  })));
}
const defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
function useToasterStore(toastOptions = {}) {
  const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
    ...toastOptions,
    ...toastOptions[t.type],
    ...t,
    duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
    style: [toastOptions.style, toastOptions[t.type]?.style, t.style].join(";")
  })), ($toasts) => $toasts);
  return {
    toasts: mergedToasts,
    pausedAt
  };
}
const isFunction = (valOrFunction) => typeof valOrFunction === "function";
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
const genId = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
})();
const prefersReducedMotion = (() => {
  let shouldReduceMotion;
  return () => {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
const createToast = (message, type = "blank", opts) => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite"
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId()
});
const createHandler = (type) => (message, options) => {
  const toast2 = createToast(message, type, options);
  upsert(toast2);
  return toast2.id;
};
const toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
  dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
  promise.then((p) => {
    toast.success(resolveValue(msgs.success, p), {
      id,
      ...opts,
      ...opts?.success
    });
    return p;
  }).catch((e) => {
    toast.error(resolveValue(msgs.error, e), {
      id,
      ...opts,
      ...opts?.error
    });
  });
  return promise;
};
const toast$1 = toast;
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts: toasts2, pausedAt: pausedAt2 } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt2.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts2.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast$1.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast$1.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts: toasts2, handlers };
}
const CheckmarkIcon_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "div.svelte-1vib967{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);-webkit-animation:svelte-1vib967-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation:svelte-1vib967-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;-webkit-animation-delay:100ms;animation-delay:100ms}div.svelte-1vib967::after{content:'';box-sizing:border-box;-webkit-animation:svelte-1vib967-checkmarkAnimation 0.2s ease-out forwards;animation:svelte-1vib967-checkmarkAnimation 0.2s ease-out forwards;opacity:0;-webkit-animation-delay:200ms;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@-webkit-keyframes svelte-1vib967-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1vib967-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@-webkit-keyframes svelte-1vib967-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}@keyframes svelte-1vib967-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: null
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `


<div class="${"svelte-1vib967"}"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const CheckmarkIcon$1 = CheckmarkIcon;
const ErrorIcon_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-14jc2sj{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);-webkit-animation:svelte-14jc2sj-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation:svelte-14jc2sj-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;-webkit-animation-delay:100ms;animation-delay:100ms}div.svelte-14jc2sj::after,div.svelte-14jc2sj::before{content:'';-webkit-animation:svelte-14jc2sj-firstLineAnimation 0.15s ease-out forwards;animation:svelte-14jc2sj-firstLineAnimation 0.15s ease-out forwards;-webkit-animation-delay:150ms;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-14jc2sj:before{-webkit-animation:svelte-14jc2sj-secondLineAnimation 0.15s ease-out forwards;animation:svelte-14jc2sj-secondLineAnimation 0.15s ease-out forwards;-webkit-animation-delay:180ms;animation-delay:180ms;transform:rotate(90deg)}@-webkit-keyframes svelte-14jc2sj-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-14jc2sj-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@-webkit-keyframes svelte-14jc2sj-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-14jc2sj-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes svelte-14jc2sj-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}@keyframes svelte-14jc2sj-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: null
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$6);
  return `


<div class="${"svelte-14jc2sj"}"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const ErrorIcon$1 = ErrorIcon;
const LoaderIcon_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-el8rh1{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);-webkit-animation:svelte-el8rh1-rotate 1s linear infinite;animation:svelte-el8rh1-rotate 1s linear infinite}@-webkit-keyframes svelte-el8rh1-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes svelte-el8rh1-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$5);
  return `


<div class="${"svelte-el8rh1"}"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const LoaderIcon$1 = LoaderIcon;
const ToastIcon_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".indicator.svelte-1yutmpl{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1yutmpl{position:absolute}.animated.svelte-1yutmpl{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;-webkit-animation:svelte-1yutmpl-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation:svelte-1yutmpl-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@-webkit-keyframes svelte-1yutmpl-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}@keyframes svelte-1yutmpl-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: null
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$4);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="${"animated svelte-1yutmpl"}">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="${"indicator svelte-1yutmpl"}">${validate_component(LoaderIcon$1, "LoaderIcon").$$render($$result, Object.assign(iconTheme), {}, {})}
		${type !== "loading" ? `<div class="${"status svelte-1yutmpl"}">${type === "error" ? `${validate_component(ErrorIcon$1, "ErrorIcon").$$render($$result, Object.assign(iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon$1, "CheckmarkIcon").$$render($$result, Object.assign(iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const ToastIcon$1 = ToastIcon;
const ToastMessage_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".message.svelte-o805t1{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: null
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$3);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-o805t1" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`}
</div>`;
});
const ToastMessage$1 = ToastMessage;
const ToastBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@-webkit-keyframes svelte-jj17sd-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-jj17sd-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@-webkit-keyframes svelte-jj17sd-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-jj17sd-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@-webkit-keyframes svelte-jj17sd-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-jj17sd-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes svelte-jj17sd-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}@keyframes svelte-jj17sd-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-jj17sd{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-jj17sd{opacity:0}.enter.svelte-jj17sd{-webkit-animation:svelte-jj17sd-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;animation:svelte-jj17sd-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-jj17sd{-webkit-animation:svelte-jj17sd-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;animation:svelte-jj17sd-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-jj17sd{-webkit-animation:svelte-jj17sd-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;animation:svelte-jj17sd-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-jj17sd{-webkit-animation:svelte-jj17sd-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;animation:svelte-jj17sd-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: null
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css$2);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-jj17sd"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage$1, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon$1, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon: ToastIcon$1, ToastMessage: ToastMessage$1, toast: toast2 }) : `
			${validate_component(ToastIcon$1, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})}
			${validate_component(ToastMessage$1, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}
		`}`}
</div>`;
});
const ToastBar$1 = ToastBar;
const ToastWrapper_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-1pakgpd{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-1pakgpd{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-1pakgpd{z-index:9999}.active.svelte-1pakgpd>*{pointer-events:auto}",
  map: null
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0)
    $$bindings.setHeight(setHeight);
  $$result.css.add(css$1);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || toast2.position?.includes("right") && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-1pakgpd",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage$1, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : `
			${validate_component(ToastBar$1, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})}
		`}`}
</div>`;
});
const ToastWrapper$1 = ToastWrapper;
const Toaster_svelte_svelte_type_style_lang = "";
const css = {
  code: ".toaster.svelte-jyff3d{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: null
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts: toasts2, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts2, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0)
    $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0)
    $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0)
    $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  $$result.css.add(css);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-jyff3d"}"${add_attribute("style", containerStyle, 0)}>${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper$1, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
const Toaster$1 = Toaster;
const SvelteIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg viewBox="${"0 0 15 15"}" class="${"inline-block mb-2 lg:w-[3.5rem] lg:h-[3.5rem] w-[2.5rem] h-[2.5rem]"}"><path fill="${"none"}" stroke="${"currentColor"}" d="${"m9.625 8.357l-5.088 3.18m2.968-1.855a3.5 3.5 0 0 1-3.71-5.937l4.241-2.65A3.5 3.5 0 0 1 12.405 6.5M7.536 5.296a3.5 3.5 0 0 1 3.71 5.936l-4.24 2.65A3.5 3.5 0 0 1 2.614 8.5m2.8-1.88l5.09-3.179"}"></path></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col lg:w-1/3 md:w-2/3"}"><p class="${"text-zinc-200 text-xs md:text-sm"}">made with ${escape(`<3`)} using
		<a href="${"https://kit.svelte.dev"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">SvelteKit</a>
		•
		<a href="${"https://tailwindcss.com"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">Tailwind CSS</a>
		•
		<a href="${"https://authjs.dev"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">Auth.js</a>
		•
		<a href="${"https://trpc.io"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">tRPC</a>
		•
		<a href="${"https://prisma.io"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">Prisma</a>
		•
		<a href="${"https://supabase.com"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">Supabase</a>
		//
		<a href="${"https://github.com/asrvd/sveltekit-guestbook"}" class="${"text-zinc-400 hover:text-zinc-200 underline underline-offset-2 decoration-wavy"}">source code</a></p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  z.object({
    text: z.string().min(1, { message: "Message is empty!" }).max(100, {
      message: "Message should not be more than 100 characters!"
    }),
    authorName: z.string().min(1, { message: "User is not logged in!" }),
    authorId: z.string().min(1, { message: "User is not logged in!" })
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="${"min-w-screen min-h-screen p-6 bg-zinc-900 flex flex-col justify-center items-center"}"><div class="${"lg:w-1/3 md:w-2/3"}"><h2 class="${"text-zinc-200 lg:text-[3.5rem] text-[2.5rem] font-extrabold"}">${validate_component(SvelteIcon, "SvelteIcon").$$render($$result, {}, {}, {})}
			GuestBook
		</h2>

		${data.session?.user ? `<div class="${"flex flex-col gap-4 dark:bg-zinc-800 bg-zinc-200 p-4 rounded-lg shadow-xl"}"><textarea class="${"w-full h-32 p-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 text-sm focus:border-none border-none ring-0"}">${""}</textarea>
				<div class="${"flex gap-4 justify-evenly items-center w-auto"}"><button class="${"w-full px-6 py-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 hover:shadow-xl duration-200"}">${validate_component(SendIcon, "SendIcon").$$render($$result, {}, {}, {})}
						${escape("Send It")}</button>
					<button class="${"w-full max-w-max px-6 py-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 hover:shadow-xl duration-200"}">${validate_component(SignOutIcon, "SignOutIcon").$$render($$result, {}, {}, {})}
						Sign Out
					</button></div></div>` : `<div class="${"flex flex-col rounded-lg dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 p-4 gap-2 shadow-xl"}"><div><h3 class="${"dark:text-zinc-200 text-zinc-800 m-0"}">Leave a Message 👇</h3>
					<p class="${"dark:text-zinc-300 text-zinc-700 m-0 text-sm"}">You need to be signed in to post a message.
					</p></div>
				<div class="${"flex gap-2"}"><button class="${"max-w-max rounded-lg dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "}">${validate_component(GithubIcon, "GithubIcon").$$render($$result, {}, {}, {})}
						Sign In
					</button></div></div>`}

		${data.messages ? `<div class="${"flex flex-col py-6"}">${each(data.messages, (message) => {
    return `<div class="${"flex flex-col gap-2 dark:hover:bg-zinc-800/40 hover:bg-zinc-300/40 hover:shadow-xl duration-200 p-4 rounded-lg"}"><p class="${"dark:text-zinc-200 text-zinc-800 text-sm lg:text-base md:text-base m-0 break-all"}">${escape(message.text)}</p>
						<div class="${"flex justify-start items-center gap-4 dark:text-zinc-400 text-zinc-700 text-xs"}"><p class="${"m-0"}">by ${escape(message.authorName)}</p>
							•
							<p class="${"m-0"}">on${escape(" ")}
								${escape(Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(message.createdAt)))}
							</p></div>
					</div>`;
  })}</div>` : ``}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>

${validate_component(Toaster$1, "Toaster").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
