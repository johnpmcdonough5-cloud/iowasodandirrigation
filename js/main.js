/* Cali-Cool Spray Foam — site interactions */
(function () {
  "use strict";

  /* ----- Mobile nav toggle ----- */
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    // Close menu when a link is tapped
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- Reveal on scroll ----- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ----- Animated stat counters ----- */
  var stats = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && stats.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var decimals = (target % 1 !== 0) ? 1 : 0;
        var start = null, dur = 1500;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(decimals) + suffix;
        }
        requestAnimationFrame(step);
        // Fallback: if requestAnimationFrame is throttled (e.g. background/hidden
        // tab), make sure the final value is shown anyway.
        setTimeout(function () {
          el.textContent = target.toFixed(decimals) + suffix;
        }, dur + 400);
        so.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach(function (el) { so.observe(el); });
  } else {
    // No IntersectionObserver: just show the final numbers.
    stats.forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var decimals = (target % 1 !== 0) ? 1 : 0;
      el.textContent = target.toFixed(decimals) + suffix;
    });
  }

  /* ----- FAQ: allow only one open at a time within a group ----- */
  var faqGroups = document.querySelectorAll("[data-faq]");
  faqGroups.forEach(function (group) {
    var items = group.querySelectorAll("details.faq__item");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) { if (other !== item) other.open = false; });
        }
      });
    });
  });

  /* ----- Contact / estimate form handling ----- */
  document.querySelectorAll("form[data-estimate]").forEach(function (form) {
    var alertBox = form.querySelector("[data-alert]");
    var endpoint = form.getAttribute("action") || "";
    var isPlaceholder = endpoint.indexOf("YOUR_FORM_ID") !== -1 || endpoint === "" || endpoint === "#";

    form.addEventListener("submit", function (ev) {
      // Honeypot: if filled, silently drop
      var hp = form.querySelector('input[name="company_website"]');
      if (hp && hp.value) { ev.preventDefault(); return; }

      if (isPlaceholder) {
        // No live endpoint configured yet — fall back to a mailto draft
        ev.preventDefault();
        var fd = new FormData(form);
        var lines = [];
        fd.forEach(function (v, k) {
          if (k === "company_website" || !v) return;
          var label = k.replace(/_/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); });
          lines.push(label + ": " + v);
        });
        var subject = encodeURIComponent("Free Estimate Request — Cali-Cool Spray Foam");
        var body = encodeURIComponent(lines.join("\n"));
        window.location.href = "mailto:info@calicoolsprayfoam.com?subject=" + subject + "&body=" + body;
        if (alertBox) {
          alertBox.classList.add("is-visible");
          alertBox.querySelector("[data-alert-text]").textContent =
            "Opening your email app to send the request. Prefer to call? Dial (619) 555-0142.";
        }
      }
      // If a real endpoint is set, let the browser submit normally to it.
    });
  });

  /* ----- Current year in footer ----- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
