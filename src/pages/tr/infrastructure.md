---
layout: ../../layouts/PageLayout.astro
lang: tr
translationKey: infrastructure
slug: "infrastructure"
title: "Anlaşılabilir ve maliyeti hesaplanabilir lokal çalışma sistemi."
description: "Güvenli ve sürdürülebilir açık-ağırlık AI için Project PULSAR referans mimarisini, tarihli USD ve Türkiye ithalat maliyeti senaryolarını inceleyin."
navLabel: "Lokal sistem"
order: 3
draft: false
eyebrow: "Referans mimari ve planlama ekonomisi"
lead: "Güçlü açık-ağırlık dil modellerini kurumun kendi güven sınırı içinde çalıştırmak için mimari, kapasite ve maliyet varsayımlarını görünür kılan şeffaf bir başlangıç noktası."
---

## Lokal işletim neden önemlidir?

Açık-ağırlık modeller; model dosyasını incelemeyi, servis yığınını seçmeyi, ağ yolunu kontrol etmeyi ve hassas bağlamı hesap verebilir bir ortamda tutmayı mümkün kılar. Ancak lokal işletim kendiliğinden güvenli veya ekonomik değildir. Gerçek kullanımda izinlerin, kanıtın, güncellemelerin ve insan yetkisinin korunup korunmayacağını çevresindeki mimari belirler.

Project PULSAR donanımı, daha büyük bir çalışma modelinin içindeki değiştirilebilir katmanlardan biri olarak ele alır. Hızlandırıcılar ve modeller değişirken kimlik, politika, yönlendirme, izinli bağlam, değerlendirme, gözlemlenebilirlik ve sürüm yönetişimi kalıcı olmalıdır.

## Açık araştırma başlangıç noktası

Bu sayfadaki referans sistemler ürün paketi veya satın alma tavsiyesi değildir. Aşağıdaki konuları karşılaştırmak için kamusal araştırma zarflarıdır:

- model belleği ve eşzamanlılık ihtiyacı;
- temsili iş yüklerinde gecikme, kapasite ve kalite;
- nicemleme ve yönlendirme dengeleri;
- güvenlik ve işletme kontrolleri;
- enerji, soğutma ve kullanım oranı;
- sermaye maliyeti ve Türkiye ithalat nakit akışı.

Başlangıç varsayımı, açık-ağırlık model çıkarımı için modüler ve anlamlı bir bellek birimi sağladığından 96 GB profesyonel sunucu hızlandırıcılarını kullanır. Eşdeğer hızlandırıcılar ve gelecekteki mimariler aynı iş yükü ve yönetişim testleriyle karşılaştırılmalıdır.

## Maliyet modeli nasıl okunmalı?

Referans CapEx; hızlandırıcı setini, sunucu platformunu, ECC belleği, lokal NVMe depolamayı, ağ/güvenlik bileşenlerini ve entegrasyon payını USD olarak kapsar. Aksi belirtilmedikçe bina işleri, finansman, elektrik, yerel satıcı marjı ve sözleşmeli destek dahil değildir.

Türkiye hesabı, **ithalat KDV'si hariç net maliyeti** ve **ithalat KDV'si dahil brüt nakit çıkışını** ayrı gösterir. %0 gümrük vergisi yalnızca planlama varsayımıdır. Her siparişten önce sınıflandırma, menşe ve güncel ithalat rejimi doğrulanmalıdır.

> Fiyat, vergi ve döviz kuru varsayımlarının ömrü sınırlıdır. Hesap tarihini kaydedin, varsayımları en az ayda bir güncelleyin ve gümrük beyannamesi tarihindeki resmî kur ile tarife pozisyonunu kullanarak yeniden hesaplayın.

## Karar kuralı

Bütçeye sığan en büyük sistemi satın almayın. Temsili iş yüklerinden küçük bir set seçin, kalite ve gecikme eşiklerini belirleyin, yeterli en küçük konfigürasyonu ölçün ve genişleme yolunu koruyun. Kapasite, teorik model büyüklüğüyle değil, kabul edilen çıktıyla yerini hak eder.
