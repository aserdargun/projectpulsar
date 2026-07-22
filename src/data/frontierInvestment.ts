export type BenchmarkKey =
  | "gpqa"
  | "sweVerified"
  | "swePro"
  | "terminal"
  | "hle"
  | "aaIndex";

export interface LocalizedText {
  en: string;
  tr: string;
}

export interface FrontierModel {
  maker: string;
  name: string;
  release: LocalizedText;
  availability: LocalizedText;
  totalParameters: string;
  activeParameters: string;
  architecture: string;
  context: string;
  multimodal: LocalizedText;
  license: LocalizedText;
  benchmarks: Partial<Record<BenchmarkKey, number>>;
  comparison: LocalizedText;
  weightGb: number | null;
  recommendedVramGb: number | null;
  hardwareClass: LocalizedText;
  nvidia: LocalizedText;
  amd: LocalizedText;
  quantized: LocalizedText;
  status: "base" | "pending" | "available" | "restricted";
}

export const benchmarkLabels: Record<BenchmarkKey, string> = {
  gpqa: "GPQA-D",
  sweVerified: "SWE-b Verified",
  swePro: "SWE-b Pro",
  terminal: "Terminal-Bench 2.1",
  hle: "HLE (tools)",
  aaIndex: "AA Intelligence Index"
};

export const frontierModels: FrontierModel[] = [
  {
    maker: "Anthropic",
    name: "Claude Opus 4.8",
    release: { en: "28 May 2026", tr: "28 May 2026" },
    availability: { en: "CLOSED — API only", tr: "KAPALI — yalnız API" },
    totalParameters: "undisclosed",
    activeParameters: "undisclosed",
    architecture: "undisclosed (thinking)",
    context: "200K",
    multimodal: { en: "Yes", tr: "Evet" },
    license: { en: "Proprietary API", tr: "Tescilli API" },
    benchmarks: { gpqa: 93.6, sweVerified: 88.6, swePro: 69.2, terminal: 74.6, hle: 57.9, aaIndex: 57 },
    comparison: {
      en: "BASE MODEL — every delta on this page is measured against this row.",
      tr: "BAZ ALINAN MODEL — bu sayfadaki tüm farklar bu satıra göre hesaplanır."
    },
    weightGb: null,
    recommendedVramGb: null,
    hardwareClass: { en: "Hosted reference", tr: "Barındırılan referans" },
    nvidia: { en: "Not self-hostable", tr: "Self-host edilemez" },
    amd: { en: "Not self-hostable", tr: "Self-host edilemez" },
    quantized: { en: "Not applicable", tr: "Uygulanamaz" },
    status: "base"
  },
  {
    maker: "Moonshot AI (moonshotai)",
    name: "Kimi K3",
    release: { en: "16 Jul 2026", tr: "16 Tem 2026" },
    availability: { en: "Pending → 27 Jul", tr: "Beklemede → 27 Tem" },
    totalParameters: "2.8T",
    activeParameters: "~50B (16/896)",
    architecture: "MoE (Stable LatentMoE)",
    context: "1M",
    multimodal: { en: "Yes — vision", tr: "Evet — görsel" },
    license: { en: "Modified MIT — planned", tr: "Modified-MIT — planlı" },
    benchmarks: { terminal: 88.3, aaIndex: 57.1 },
    comparison: {
      en: "Matches or exceeds Opus on Terminal-Bench and AA Index; strongest open candidate, weights pending.",
      tr: "Terminal-Bench ve AA İndeksi'nde Opus'a eşit/üstün; en güçlü açık aday, ağırlık bekleniyor."
    },
    weightGb: 2800,
    recommendedVramGb: 3750,
    hardwareClass: { en: "Rack / multi-node", tr: "Rack / çok-node" },
    nvidia: { en: "GB300 NVL72 or 2 × 8-GPU B300 nodes", tr: "GB300 NVL72 veya 2 × 8-GPU B300 node" },
    amd: { en: "2 × 8-GPU MI355X nodes", tr: "2 × 8-GPU MI355X node" },
    quantized: { en: "~1.4 TB → 8 × B300 is tight", tr: "~1,4 TB → 8 × B300 sıkışık" },
    status: "pending"
  },
  {
    maker: "Alibaba Qwen (qwen)",
    name: "Qwen 3.8 Max (Preview)",
    release: { en: "19 Jul 2026 — preview", tr: "19 Tem 2026 — önizleme" },
    availability: { en: "Hosted preview; weights, date and license unavailable", tr: "Hosted önizleme; ağırlık, tarih ve lisans yok" },
    totalParameters: "2.4T",
    activeParameters: "undisclosed",
    architecture: "MoE? — no config",
    context: "~1M (984K)",
    multimodal: { en: "Vision, video, documents", tr: "Görsel, video, belge" },
    license: { en: "Unclear", tr: "Belirsiz" },
    benchmarks: {},
    comparison: {
      en: "Producer positioning is not accompanied by a published benchmark table, model card or license. Current downloadable reference: Qwen3.5-397B-A17B.",
      tr: "Üretici iddiasına yayımlanmış benchmark tablosu, model kartı veya lisans eşlik etmiyor. Bugünkü indirilebilir referans: Qwen3.5-397B-A17B."
    },
    weightGb: 2400,
    recommendedVramGb: 3250,
    hardwareClass: { en: "Rack / multi-node — uncertain", tr: "Rack / çok-node — belirsiz" },
    nvidia: { en: "GB300 NVL72 or 2 × 8-GPU B300 nodes", tr: "GB300 NVL72 veya 2 × 8-GPU B300 node" },
    amd: { en: "2 × 8-GPU MI355X nodes", tr: "2 × 8-GPU MI355X node" },
    quantized: { en: "~1.2 TB → 8 × B300 / MI355X", tr: "~1,2 TB → 8 × B300 / MI355X" },
    status: "pending"
  },
  {
    maker: "DeepSeek (deepseek-ai)",
    name: "DeepSeek V4-Pro",
    release: { en: "24 Apr 2026", tr: "24 Nis 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "1.6T",
    activeParameters: "49B",
    architecture: "MoE (new architecture)",
    context: "1M",
    multimodal: { en: "No — text", tr: "Hayır — metin" },
    license: { en: "MIT", tr: "MIT" },
    benchmarks: { sweVerified: 80.6, aaIndex: 44 },
    comparison: { en: "Behind Opus on SWE Verified; open-model price/performance leader.", tr: "SWE Verified'da Opus'un gerisinde; açık model fiyat/performans lideri." },
    weightGb: 1600,
    recommendedVramGb: 2150,
    hardwareClass: { en: "Maximum node", tr: "Maksimum node" },
    nvidia: { en: "8 × B300 or 2 × 8 × H200", tr: "8 × B300 veya 2 × 8 × H200" },
    amd: { en: "8 × MI355X / 8 × MI325X", tr: "8 × MI355X / 8 × MI325X" },
    quantized: { en: "~800 GB → 8 × H200", tr: "~800 GB → 8 × H200" },
    status: "available"
  },
  {
    maker: "Xiaomi (XiaomiMiMo)",
    name: "MiMo-V2.5-Pro",
    release: { en: "22 Apr 2026", tr: "22 Nis 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "1.02T",
    activeParameters: "42B",
    architecture: "MoE (hybrid attention)",
    context: "1M",
    multimodal: { en: "Vision and video", tr: "Görsel ve video" },
    license: { en: "MIT", tr: "MIT" },
    benchmarks: { swePro: 57.2, aaIndex: 54 },
    comparison: { en: "Below Opus on SWE Pro; agentic coding focus and lower cost.", tr: "SWE Pro'da Opus'un altında; ajan/kod odaklı ve düşük maliyetli." },
    weightGb: 1020,
    recommendedVramGb: 1400,
    hardwareClass: { en: "Maximum node", tr: "Maksimum node" },
    nvidia: { en: "8 × B200", tr: "8 × B200" },
    amd: { en: "8 × MI325X", tr: "8 × MI325X" },
    quantized: { en: "~510 GB → 8 × H100", tr: "~510 GB → 8 × H100" },
    status: "available"
  },
  {
    maker: "inclusionAI (Ant Group)",
    name: "Ring-2.6-1T",
    release: { en: "23 Apr 2026", tr: "23 Nis 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "1T",
    activeParameters: "63B",
    architecture: "MoE (MLA + Linear, reasoning)",
    context: "262K",
    multimodal: { en: "No — text", tr: "Hayır — metin" },
    license: { en: "MIT", tr: "MIT" },
    benchmarks: { gpqa: 88.27 },
    comparison: { en: "Reasoning flagship; AIME '26 95.83, GPQA 88.27 and PinchBench 87.60.", tr: "Muhakeme modeli; AIME '26 95,83, GPQA 88,27 ve PinchBench 87,60." },
    weightGb: 1000,
    recommendedVramGb: 1350,
    hardwareClass: { en: "Maximum node", tr: "Maksimum node" },
    nvidia: { en: "8 × B200", tr: "8 × B200" },
    amd: { en: "8 × MI325X", tr: "8 × MI325X" },
    quantized: { en: "~500 GB → 8 × H100", tr: "~500 GB → 8 × H100" },
    status: "available"
  },
  {
    maker: "Thinking Machines",
    name: "Inkling",
    release: { en: "15 Jul 2026", tr: "15 Tem 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "975B",
    activeParameters: "41B",
    architecture: "MoE (encoder-free)",
    context: "1M",
    multimodal: { en: "Vision and audio", tr: "Görsel ve ses" },
    license: { en: "Apache 2.0", tr: "Apache 2.0" },
    benchmarks: { gpqa: 87.2, sweVerified: 77.6, swePro: 54.3, terminal: 63.8, hle: 46 },
    comparison: { en: "Below Opus on most tests; strongest customization base in the source dataset.", tr: "Çoğu testte Opus'un altında; kaynak veri setindeki en güçlü özelleştirme tabanı." },
    weightGb: 975,
    recommendedVramGb: 1300,
    hardwareClass: { en: "Large single node", tr: "Tek büyük node" },
    nvidia: { en: "8 × H200 for medium context or 8 × B200", tr: "Orta bağlamda 8 × H200 veya 8 × B200" },
    amd: { en: "8 × MI300X", tr: "8 × MI300X" },
    quantized: { en: "NVFP4 ~490 GB → 8 × H100 / 4 × B200", tr: "NVFP4 ~490 GB → 8 × H100 / 4 × B200" },
    status: "available"
  },
  {
    maker: "Z.ai (zai-org)",
    name: "GLM-5.2",
    release: { en: "13 Jun 2026", tr: "13 Haz 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "753B",
    activeParameters: "40B",
    architecture: "MoE (IndexShare + MTP)",
    context: "1M",
    multimodal: { en: "No — text", tr: "Hayır — metin" },
    license: { en: "MIT", tr: "MIT" },
    benchmarks: { gpqa: 91.2, sweVerified: 84.2, swePro: 62.1, terminal: 82.7, hle: 54.7, aaIndex: 51 },
    comparison: { en: "Closest available open model to Opus; ahead on Terminal-Bench and strong in coding.", tr: "Opus'a en yakın yayımlanmış açık model; Terminal-Bench'te önde ve kodlamada güçlü." },
    weightGb: 744,
    recommendedVramGb: 1050,
    hardwareClass: { en: "Large single node", tr: "Tek büyük node" },
    nvidia: { en: "8 × H200 — ideal fit", tr: "8 × H200 — ideal sığma" },
    amd: { en: "8 × MI300X", tr: "8 × MI300X" },
    quantized: { en: "~370 GB → 4 × H200", tr: "~370 GB → 4 × H200" },
    status: "available"
  },
  {
    maker: "Mistral AI",
    name: "Mistral Large 3",
    release: { en: "2 Dec 2025", tr: "2 Ara 2025" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "675B",
    activeParameters: "41B",
    architecture: "Sparse MoE, vision-fused",
    context: "256K",
    multimodal: { en: "Vision — verify", tr: "Görsel — doğrula" },
    license: { en: "Apache 2.0", tr: "Apache 2.0" },
    benchmarks: { gpqa: 44 },
    comparison: { en: "Non-reasoning; strength is European languages, Apache 2.0 and single-node target.", tr: "Reasoning dışı; güçlü yanı Avrupa dilleri, Apache 2.0 ve tek-node hedefi." },
    weightGb: 675,
    recommendedVramGb: 950,
    hardwareClass: { en: "Large single node", tr: "Tek büyük node" },
    nvidia: { en: "8 × H200", tr: "8 × H200" },
    amd: { en: "8 × MI300X", tr: "8 × MI300X" },
    quantized: { en: "NVFP4 ~340 GB → 8 × H100 / 4 × H200", tr: "NVFP4 ~340 GB → 8 × H100 / 4 × H200" },
    status: "available"
  },
  {
    maker: "NVIDIA",
    name: "Nemotron 3 Ultra",
    release: { en: "4 Jun 2026", tr: "4 Haz 2026" },
    availability: { en: "Weights, data and recipe available", tr: "Ağırlık, veri ve recipe yayında" },
    totalParameters: "550B",
    activeParameters: "55B",
    architecture: "MoE (Mamba-Transformer)",
    context: "1M",
    multimodal: { en: "No", tr: "Hayır" },
    license: { en: "NVIDIA Open Model", tr: "NVIDIA Open Model" },
    benchmarks: { aaIndex: 48 },
    comparison: { en: "One of the fastest open references at 300+ tok/s; AA Index 48.", tr: "300+ tok/s ile en hızlı açık referanslardan; AA İndeksi 48." },
    weightGb: 550,
    recommendedVramGb: 750,
    hardwareClass: { en: "Large single node", tr: "Tek büyük node" },
    nvidia: { en: "8 × H100 FP8 or 8 × H200", tr: "8 × H100 FP8 veya 8 × H200" },
    amd: { en: "8 × MI325X", tr: "8 × MI325X" },
    quantized: { en: "NVFP4 ~275 GB → 4 × H200 / 4 × B200", tr: "NVFP4 ~275 GB → 4 × H200 / 4 × B200" },
    status: "available"
  },
  {
    maker: "Tencent (Tencent-Hunyuan)",
    name: "Hunyuan Hy3",
    release: { en: "6 Jul 2026", tr: "6 Tem 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "295B",
    activeParameters: "21B",
    architecture: "MoE (192 experts + 3.8B MTP)",
    context: "256K",
    multimodal: { en: "No", tr: "Hayır" },
    license: { en: "Apache 2.0", tr: "Apache 2.0" },
    benchmarks: { gpqa: 90.4, sweVerified: 78, hle: 53.2 },
    comparison: { en: "Very strong for its size; easiest large model to host in the source dataset.", tr: "Boyutuna göre çok güçlü; kaynak veri setindeki en kolay barındırılan büyük model." },
    weightGb: 300,
    recommendedVramGb: 430,
    hardwareClass: { en: "Accessible — 1 to 4 GPU", tr: "Erişilebilir — 1–4 GPU" },
    nvidia: { en: "4 × H200 or 2 × B300", tr: "4 × H200 veya 2 × B300" },
    amd: { en: "4 × MI300X", tr: "4 × MI300X" },
    quantized: { en: "4-bit GGUF ~150 GB → 1 × B300 / MI355X", tr: "4-bit GGUF ~150 GB → 1 × B300 / MI355X" },
    status: "available"
  },
  {
    maker: "MiniMax (MiniMaxAI)",
    name: "MiniMax M3",
    release: { en: "1 Jun 2026", tr: "1 Haz 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "~230B",
    activeParameters: "9.8B",
    architecture: "MoE (sparse MSA)",
    context: "1M",
    multimodal: { en: "Vision and video", tr: "Görsel ve video" },
    license: { en: "Custom / restricted", tr: "Özel / kısıtlı" },
    benchmarks: { swePro: 59, terminal: 66, aaIndex: 44 },
    comparison: { en: "Accessible and multimodal, but commercial use requires license review.", tr: "Erişilebilir ve multimodal; ticari kullanımda lisans incelemesi gerekir." },
    weightGb: 230,
    recommendedVramGb: 330,
    hardwareClass: { en: "Accessible — 1 to 4 GPU", tr: "Erişilebilir — 1–4 GPU" },
    nvidia: { en: "2–4 × H200 or 2 × B300", tr: "2–4 × H200 veya 2 × B300" },
    amd: { en: "2 × MI325X", tr: "2 × MI325X" },
    quantized: { en: "~115 GB → 1 × H200 / B300", tr: "~115 GB → 1 × H200 / B300" },
    status: "restricted"
  },
  {
    maker: "StepFun",
    name: "Step 3.7 Flash",
    release: { en: "29 May 2026", tr: "29 May 2026" },
    availability: { en: "Available on Hugging Face", tr: "Hugging Face'te yayında" },
    totalParameters: "198B",
    activeParameters: "11B",
    architecture: "MoE (vision-language)",
    context: "256K",
    multimodal: { en: "Vision, GUI, documents", tr: "Görsel, GUI, belge" },
    license: { en: "Apache 2.0", tr: "Apache 2.0" },
    benchmarks: { sweVerified: 76.3, swePro: 56.3, hle: 47.2, aaIndex: 30 },
    comparison: { en: "Fast at 376 tok/s; the 4-bit build fits a 128 GB accelerator according to the source dataset.", tr: "376 tok/s ile hızlı; kaynak veri setine göre 4-bit sürüm 128 GB hızlandırıcıya sığar." },
    weightGb: 198,
    recommendedVramGb: 280,
    hardwareClass: { en: "Accessible — 1 to 2 GPU", tr: "Erişilebilir — 1–2 GPU" },
    nvidia: { en: "2 × H200 or 1 × B300", tr: "2 × H200 veya 1 × B300" },
    amd: { en: "1 × MI355X", tr: "1 × MI355X" },
    quantized: { en: "IQ4 ~105 GB → 1 × H200 / 128 GB unified memory", tr: "IQ4 ~105 GB → 1 × H200 / 128 GB birleşik bellek" },
    status: "available"
  }
];

export interface GpuOption {
  id: string;
  vendor: "NVIDIA" | "AMD" | "rack";
  name: string;
  architecture: string;
  vramGb: number;
  bandwidthTb: number | null;
  tdpW: number;
  fp8: number;
  fp4: number | null;
  purchaseUsd: number;
  cloudHourlyUsd: number | null;
  note: LocalizedText;
}

export const gpuOptions: GpuOption[] = [
  { id: "h100", vendor: "NVIDIA", name: "NVIDIA H100 SXM", architecture: "Hopper", vramGb: 80, bandwidthTb: 3.35, tdpW: 700, fp8: 1.98, fp4: null, purchaseUsd: 30000, cloudHourlyUsd: 2, note: { en: "HBM3; mature entry point", tr: "HBM3; olgun giriş" } },
  { id: "h200", vendor: "NVIDIA", name: "NVIDIA H200 SXM", architecture: "Hopper", vramGb: 141, bandwidthTb: 4.8, tdpW: 700, fp8: 1.98, fp4: null, purchaseUsd: 33000, cloudHourlyUsd: 1.9, note: { en: "HBM3e; best availability; inference workhorse", tr: "HBM3e; en iyi bulunurluk; çıkarım ana atı" } },
  { id: "b200", vendor: "NVIDIA", name: "NVIDIA B200 SXM", architecture: "Blackwell", vramGb: 192, bandwidthTb: 8, tdpW: 1000, fp8: 4.5, fp4: 9, purchaseUsd: 40000, cloudHourlyUsd: 5, note: { en: "HBM3e; native FP4", tr: "HBM3e; doğal FP4" } },
  { id: "b300", vendor: "NVIDIA", name: "NVIDIA B300 (Blackwell Ultra)", architecture: "Blackwell Ultra", vramGb: 288, bandwidthTb: 8, tdpW: 1400, fp8: 7, fp4: 15, purchaseUsd: 40000, cloudHourlyUsd: 9.16, note: { en: "Maximum memory and compute; liquid cooling required", tr: "Maksimum bellek ve hesaplama; sıvı soğutma gerekli" } },
  { id: "mi300x", vendor: "AMD", name: "AMD MI300X", architecture: "CDNA3", vramGb: 192, bandwidthTb: 5.3, tdpW: 750, fp8: 2.61, fp4: null, purchaseUsd: 16000, cloudHourlyUsd: 1.85, note: { en: "Mature AMD option; lowest entry price", tr: "Olgun AMD seçeneği; en düşük giriş fiyatı" } },
  { id: "mi325x", vendor: "AMD", name: "AMD MI325X", architecture: "CDNA3", vramGb: 256, bandwidthTb: 6, tdpW: 1000, fp8: 2.61, fp4: null, purchaseUsd: 21000, cloudHourlyUsd: 2.2, note: { en: "Lowest purchase $/GB in the dataset", tr: "Veri setindeki en düşük alım $/GB" } },
  { id: "mi355x", vendor: "AMD", name: "AMD MI355X", architecture: "CDNA4", vramGb: 288, bandwidthTb: 8, tdpW: 1400, fp8: 5, fp4: 10, purchaseUsd: 25000, cloudHourlyUsd: 2.75, note: { en: "FP4/FP6; liquid cooling", tr: "FP4/FP6; sıvı soğutma" } },
  { id: "gb300", vendor: "rack", name: "NVIDIA GB300 NVL72", architecture: "Blackwell Ultra", vramGb: 20736, bandwidthTb: null, tdpW: 120000, fp8: 504, fp4: 1080, purchaseUsd: 3850000, cloudHourlyUsd: null, note: { en: "72 × B300 + 36 Grace; single 20 TB NVLink domain", tr: "72 × B300 + 36 Grace; tek 20 TB NVLink alanı" } }
];

export interface InvestmentConfiguration {
  id: string;
  vendor: "AMD" | "NVIDIA";
  name: string;
  gpu: string;
  vramTb: number;
  capexUsd: number;
  powerKw: number;
  cloudMonthlyUsd: number;
  note: LocalizedText;
}

export const investmentConfigurations: InvestmentConfiguration[] = [
  { id: "amd-mi325x-2", vendor: "AMD", name: "2 × MI325X node", gpu: "16 × MI325X (256 GB)", vramTb: 4.1, capexUsd: 500000, powerKw: 22, cloudMonthlyUsd: 27000, note: { en: "Lowest CapEx; 4.1 TB usable envelope; mature ROCm path", tr: "En düşük CapEx; 4,1 TB rahat; olgun ROCm yolu" } },
  { id: "amd-mi355x-2", vendor: "AMD", name: "2 × MI355X node", gpu: "16 × MI355X (288 GB)", vramTb: 4.6, capexUsd: 580000, powerKw: 30, cloudMonthlyUsd: 32000, note: { en: "CDNA4/FP4; similar memory at roughly 70% of the B300 preset CapEx", tr: "CDNA4/FP4; B300 presetinin yaklaşık %70 CapEx'iyle benzer bellek" } },
  { id: "amd-mi300x-3", vendor: "AMD", name: "3 × MI300X node", gpu: "24 × MI300X (192 GB)", vramTb: 4.6, capexUsd: 560000, powerKw: 24, cloudMonthlyUsd: 32000, note: { en: "Most mature and available AMD preset; air-cooled", tr: "En olgun ve bulunur AMD preseti; hava soğutmalı" } },
  { id: "nvidia-h200-4", vendor: "NVIDIA", name: "4 × HGX H200", gpu: "32 × H200 (141 GB)", vramTb: 4.5, capexUsd: 1320000, powerKw: 44, cloudMonthlyUsd: 35000, note: { en: "Best availability and software support; more nodes and power", tr: "En iyi bulunurluk ve yazılım desteği; daha çok node ve güç" } },
  { id: "nvidia-b300-2", vendor: "NVIDIA", name: "2 × HGX B300", gpu: "16 × B300 (288 GB)", vramTb: 4.6, capexUsd: 820000, powerKw: 30, cloudMonthlyUsd: 107000, note: { en: "Dense, newer FP4 path; high cloud rent shortens modeled payback", tr: "Yoğun ve yeni FP4 yolu; yüksek bulut kirası model geri dönüşünü kısaltır" } },
  { id: "nvidia-gb300", vendor: "NVIDIA", name: "GB300 NVL72 rack", gpu: "72 × B300 (288 GB)", vramTb: 20, capexUsd: 3850000, powerKw: 120, cloudMonthlyUsd: 115000, note: { en: "Premium single NVLink domain for 2.8T MoE, long context and multi-user service", tr: "2,8T MoE, uzun bağlam ve çok kullanıcılı servis için premium tek NVLink alanı" } }
];

export const hardwareExtras = [
  {
    name: "DeepSeek V4-Flash",
    weightGb: 284,
    recommendedVramGb: 400,
    hardwareClass: { en: "Accessible — 1 to 4 GPU", tr: "Erişilebilir — 1–4 GPU" },
    nvidia: { en: "4 × H200 or 2 × B300", tr: "4 × H200 veya 2 × B300" },
    amd: { en: "2 × MI325X", tr: "2 × MI325X" },
    quantized: { en: "~142 GB → 1 × H200", tr: "~142 GB → 1 × H200" }
  }
] as const;

export const sourceVerdicts = {
  en: [
    ["Absolute open frontier — wait", "Kimi K3; weights planned for 27 July and multi-node cost"],
    ["Strongest practical today", "GLM-5.2; closest open reference to Opus and a large single-node fit"],
    ["Reasoning", "Ring-2.6-1T; GPQA 88.27 and AIME '26 95.83"],
    ["Budget / speed", "Hunyuan Hy3 or Step 3.7 Flash; materially smaller serving envelope"],
    ["Europe / GDPR option", "Mistral Large 3; Apache 2.0 and European-language focus"],
    ["Watch", "Qwen 3.8 Max preview; no released weights, license or benchmark table in the supplied dataset"]
  ],
  tr: [
    ["Mutlak açık zirve — bekle", "Kimi K3; 27 Temmuz için planlanan ağırlık ve çok-node maliyeti"],
    ["Bugün pratik en güçlü", "GLM-5.2; Opus'a en yakın açık referans ve tek büyük node uyumu"],
    ["Muhakeme", "Ring-2.6-1T; GPQA 88,27 ve AIME '26 95,83"],
    ["Bütçe / hız", "Hunyuan Hy3 veya Step 3.7 Flash; belirgin biçimde daha küçük servis zarfı"],
    ["Avrupa / GDPR", "Mistral Large 3; Apache 2.0 ve Avrupa dilleri odağı"],
    ["İzle", "Qwen 3.8 Max önizlemesi; sağlanan veri setinde yayımlanmış ağırlık, lisans veya benchmark tablosu yok"]
  ]
} as const;
