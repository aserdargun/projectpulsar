  // @ts-nocheck -- progressively enhanced DOM controls; server-rendered values remain the fallback.
  const money = (locale, value) => new Intl.NumberFormat(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
  const number = (locale, value, digits = 1) => new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value);

  document.querySelectorAll("[data-fit-calculator]").forEach((calculator) => {
    const locale = calculator.dataset.locale || "en-US";
    const model = calculator.querySelector("[data-fit-model]");
    const gpu = calculator.querySelector("[data-fit-gpu]");
    const count = calculator.querySelector("[data-fit-count]");
    const result = (name) => calculator.querySelector(`[data-fit-result="${name}"]`);
    const update = () => {
      const required = Number(model.value);
      const installed = Number(gpu.value) * Math.max(1, Number(count.value));
      const headroom = installed - required;
      result("required").textContent = `~${number(locale, required, 0)} GB`;
      result("installed").textContent = `${number(locale, installed, 0)} GB`;
      result("status").textContent = headroom >= 0
        ? `${locale === "tr-TR" ? "SIĞIYOR" : "FITS"} — ${number(locale, headroom, 0)} GB ${locale === "tr-TR" ? "pay" : "headroom"}`
        : `${locale === "tr-TR" ? "SIĞMIYOR" : "DOES NOT FIT"} — ${number(locale, Math.abs(headroom), 0)} GB ${locale === "tr-TR" ? "eksik" : "short"}`;
      result("status").parentElement.classList.toggle("is-fit", headroom >= 0);
      result("status").parentElement.classList.toggle("is-miss", headroom < 0);
    };
    calculator.querySelectorAll("input, select").forEach((input) => input.addEventListener("input", update));
    update();
  });

  document.querySelectorAll("[data-investment-calculator]").forEach((calculator) => {
    const locale = calculator.dataset.locale || "en-US";
    const investmentConfigurations = JSON.parse(calculator.dataset.investmentConfigurations || "[]");
    const field = (name) => calculator.querySelector(`[data-investment-field="${name}"]`);
    const result = (name) => calculator.querySelector(`[data-investment-result="${name}"]`);
    const update = () => {
      const config = investmentConfigurations.find((item) => item.id === field("configuration").value) || investmentConfigurations[0];
      const electricityRate = Math.max(0, Number(field("electricity").value));
      const hours = Math.max(1, Number(field("hours").value));
      const annualElectricity = config.powerKw * hours * electricityRate;
      const netMonthly = config.cloudMonthlyUsd - annualElectricity / 12;
      const payback = netMonthly > 0 ? config.capexUsd / netMonthly : null;
      result("gpu").textContent = config.gpu;
      result("vram").textContent = `${number(locale, config.vramTb)} TB`;
      result("power").textContent = `${number(locale, config.powerKw, 0)} kW`;
      result("capex").textContent = money(locale, config.capexUsd);
      result("annual-electricity").textContent = money(locale, annualElectricity);
      result("cloud").textContent = money(locale, config.cloudMonthlyUsd);
      result("net-monthly").textContent = money(locale, netMonthly);
      result("payback").textContent = payback === null ? "—" : number(locale, payback);
      result("note").textContent = config.note[locale === "tr-TR" ? "tr" : "en"];
    };
    calculator.querySelectorAll("input, select").forEach((input) => input.addEventListener("input", update));
    update();
  });
