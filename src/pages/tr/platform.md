---
layout: ../../layouts/PageLayout.astro
lang: tr
translationKey: platform
slug: "platform"
title: "Güvenilir zekâ için bir kontrol düzlemi."
description: "Project PULSAR'ın kavramsal katmanlarını keşfedin: politika, yönlendirme, bağlam, modeller, doğrulama ve gözlemlenebilirlik."
navLabel: "Platform"
order: 2
draft: false
eyebrow: "Kavramsal mimari"
lead: "PULSAR kalıcı kontrol düzlemini değiştirilebilir model, araç ve bilgi sistemlerinden ayırır; niyetten sonuca kadar tek bir kontrollü yol oluşturur."
---

## Değişen zekânın çevresindeki kalıcı katman

Platform, birbirinden ayrılamayan tek bir yığın yerine açık sınırları olan katmanlar olarak tasarlanır. Her katmanın belirli bir sorumluluğu ve sonraki katmanla gözlemlenebilir bir sözleşmesi vardır.

### Erişim ve politika

İstekler kimlikle başlar. Çalışma katmanı kimin veya neyin istekte bulunduğunu, isteğin amacını, izinli veri sınırını, kullanılabilecek araçları ve görevin risk sınıfını değerlendirir.

### Gateway ve yönlendirme

Tutarlı uygulama arayüzü kota, istek doğrulama ve iz bağlamı uygular. Router daha sonra görev türü, kalite, gecikme, maliyet ve risk sinyallerine göre uygun yetenek yolunu seçer.

### Bağlam ve araçlar

Bilgi erişimi yalnız isteği yapan kimliğin kullanma yetkisi olan bilgiyi ekler. Araç çağrıları açık izin listeleri, sınırlandırılmış çalışma ve onay noktalarıyla yürütülür. Bağlam; kaynak ve izin bilgisini ileri taşır.

### Model çalışma katmanı

Fast, Medium ve Frontier yetenek katmanları farklı hız ve derinlik dengeleri sunar. Bunlar planlama kavramlarıdır; sabit parametre sayıları veya kalıcı model atamaları değildir.

### Doğrulama ve gözlemlenebilirlik

Çıktılar kaynak kullanımı, politika uyumu ve belirsizlik açısından kontrol edilebilir. Çalışma katmanı; hangi yolun seçildiğini, hangi kanıtın kullanıldığını ve nerede insan incelemesi gerektiğini açıklayacak bağlamı kaydeder.

## Değiştirilebilirlik bir özelliktir

Modeller, bilgi erişim motorları, serving katmanları ve depolama teknolojileri değişmeye devam edecektir. PULSAR bu değişimi beklenen bir durum olarak ele alır. Açık arayüzler, sürümlenmiş sözleşmeler ve değerlendirme kapıları bileşenlerin güven sınırını bozmadan gelişmesini sağlar.

## İki düzlem, tek sorumluluk

**Kontrol düzlemi** politika, kimlik, yönlendirme, model yaşam döngüsü, değerlendirme ve hizmet sağlığını yönetir. **Veri düzlemi** istekleri çalıştırır, izinli bağlamı getirir, onaylı araçları çağırır ve model çıktısını sunar.

Bu ayrım sahipliği netleştirir ve etkili değişikliklerin canlı iş yüklerine ulaşmadan açık doğrulama kapılarından geçmesini sağlar.
