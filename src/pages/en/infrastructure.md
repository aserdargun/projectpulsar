---
layout: ../../layouts/PageLayout.astro
lang: en
translationKey: infrastructure
slug: "infrastructure"
title: "A local runtime you can reason about—and cost."
description: "Explore the Project PULSAR reference architecture and dated USD/Türkiye landed-cost scenarios for secure, sustainable open-weight AI."
navLabel: "Local runtime"
order: 3
draft: false
eyebrow: "Reference architecture and planning economics"
lead: "A transparent starting point for running strong open-weight language models inside an organization's own trust boundary—with architecture, capacity and cost assumptions exposed."
---

## Why local operation matters

Open-weight models make it possible to inspect the model artifact, choose the serving stack, control the network path and keep sensitive context inside an accountable environment. Local operation is not automatically secure or economical, however. The surrounding architecture determines whether permissions, evidence, updates and human authority survive real use.

Project PULSAR treats hardware as one replaceable layer inside a larger operating model. Identity, policy, routing, permitted context, evaluation, observability and release governance must remain stable while accelerators and models evolve.

## An open research baseline

The reference systems on this page are not product bundles or procurement recommendations. They are public research envelopes for comparing:

- model memory and concurrency needs;
- latency, throughput and quality under representative workloads;
- quantization and routing trade-offs;
- security and operational controls;
- energy, cooling and utilization;
- capital cost and Türkiye import cash flow.

The starting assumption uses 96 GB professional server accelerators because this creates a useful, modular memory unit for open-weight inference. Equivalent accelerators and future architectures should be compared against the same workload and governance tests.

## How to read the cost model

Reference CapEx is expressed in USD and includes the accelerator set, host platform, ECC memory, local NVMe, network/security components and an integration contingency. It excludes building works, financing, electricity, local reseller margin and contractual support unless stated.

For Türkiye, the calculator separates **net landed cost excluding import VAT** from **gross cash outlay including import VAT**. A 0% customs-duty input is only a planning default. Classification, origin and the current import regime must be confirmed before every order.

> Prices, tax rates and exchange rates expire. Record the calculation date, refresh the assumptions at least monthly and recalculate using the official exchange rate and tariff position on the customs declaration date.

## The decision rule

Do not buy the largest system that fits the budget. Select a small set of representative workloads, establish quality and latency thresholds, measure the smallest viable configuration and preserve an expansion path. Capacity earns its place through accepted output—not theoretical model size.
