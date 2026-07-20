---
layout: ../../layouts/PageLayout.astro
lang: en
translationKey: models
slug: "models"
title: "Adapt open models. Keep the evidence."
description: "Compare verifiable open-weight model references and explore a governed local LoRA and QLoRA fine-tuning workflow with Unsloth."
navLabel: "Models"
order: 4
draft: false
eyebrow: "Open-weight models and local fine-tuning"
lead: "Project PULSAR treats model selection and adaptation as reproducible engineering: choose by workload, tune only when evidence supports it, and keep data rights, evaluations and rollback attached to every release."
---

## Why model choice is a portfolio decision

There is no universally strongest model. A model is strong for an organization when it satisfies the actual workload’s quality, latency, language, modality, license, privacy and operating-cost requirements inside an enforceable trust boundary.

Project PULSAR therefore separates **local adaptation candidates** from **frontier references**. A compact model may be the right system for a high-volume structured task; a frontier-scale mixture-of-experts model may remain a shared evaluation target until its infrastructure envelope is justified.

## What fine-tuning should change

Fine-tuning can make behavior more consistent: task format, domain terminology, response structure, classification boundaries or tool-calling patterns. It should not replace permission-aware retrieval for changing facts or private records.

The safest progression is prompt and tool design, governed retrieval, LoRA, QLoRA and only then more invasive training. Each step must outperform the simpler baseline on held-out quality and safety evaluations.

## The PULSAR research position

Open weights create valuable freedom to inspect, evaluate, host and adapt model artifacts. They do not remove licensing duties, dataset rights, privacy risk, operational ownership or the need for human authority.

Model names and availability are also versioned evidence. This page records its verification date and links to official model cards. A future Kimi K3 release will enter the reference set only after official weights, model card, license and checksums can be independently verified.
