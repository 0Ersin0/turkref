# TurkRef v1.0

Manuel RST ve Gönderim (Coreference) Etiketleme Tezgahı

TurkRef, Türkçe dilbilimi araştırmaları ve Doğal Dil İşleme (NLP) projeleri için geliştirilmiş, Söylem Yapısı Teorisi (Rhetorical Structure Theory - RST) ve Gönderim (Coreference) odaklı gelişmiş bir manuel işaretleme tezgahıdır. Ham metinleri yapılandırılmış veri setlerine dönüştürmek için %100 gizlilik odaklı, sunucusuz (Zero-Backend) ve bellek kararlılığı yüksek bir mimari sunar.

---

## Dağıtım ve Hızlı Başlangıç

1. Web Sürümü (Live Demo)
Uygulamayı hiçbir şey indirmeden doğrudan tarayıcınızda test edebilirsiniz:
Link: https://0Ersin0.github.io/turkref

2. Desktop (EXE) Sürümü
Tam izole ve taşınabilir deneyim için derlenmiş masaüstü sürümü:
- Releases sekmesinden TurkRef-Portable.exe dosyasını indirin.
- Not: Uygulama henüz dijital olarak imzalanmadığı için Windows SmartScreen uyarı verebilir. "Ek Bilgi -> Yine de Çalıştır" diyerek güvenle açabilirsiniz.

---

## Temel Özellikler (v1.0 Kararlı Sürüm)

- Çift Analiz Modu (RST & Coreference): Hem cümle seviyesinde RST hiyerarşisi hem de kelime seviyesinde Gönderim (Anaphora, Cataphora, vb.) bağlamlarını haritalandırma.
- V8 Performans Sigortası: Büyük veri maratonlarında (1000+ makale) tarayıcı belleğinin şişmesini ve kilitlenmesini engelleyen agresif çöp toplama (Garbage Collection Flush) mekanizması.
- Gelişmiş UX: Ctrl+Z (Geri Al) desteği, dinamik SVG bağlam okları ve TR / EN arayüz seçeneği.
- Çoklu Sekme Excel Çıktısı: İşaretlenen verileri türlerine göre ayırarak tek bir Excel (.xlsx) dosyasında RST_Analysis ve Coreference_Analysis sekmeleri halinde yapılandırılmış olarak dışa aktarma.

---

## Mimari Vizyon, Güvenlik ve 3. Taraf Bağımlılık Uyarıları

Akademik verilerin gizliliği kritiktir. TurkRef, "Zero-Backend" felsefesiyle çalışır. Girdiğiniz metinler asla bir dış sunucuya iletilmez, tamamen tarayıcınızın anlık belleğinde (RAM) işlenir. Electron katmanında aktif olan contextIsolation ve katı CSP (connect-src 'none') kuralları sayesinde yerel işletim sisteminiz siber saldırılara karşı tamamen izole edilmiştir.

KRİTİK UYARI VE BAĞIMLILIK NOTLARI (v1.0):
TurkRef v1.0 sürümü bağımsız bir web/masaüstü istemcisidir ancak arayüzün ve veri motorunun çalışabilmesi için aşağıda belirtilen 3. taraf kütüphaneler ve bağdaşıklıklar (CDN hatları) aktif olarak kullanılmaktadır:

1. SheetJS (XLSX): Verilerin Excel formatına dönüştürülmesini sağlar.
2. LeaderLine: RST hiyerarşik bağ oklarının ekranda dinamik olarak çizilmesini sağlar.
3. FontAwesome: Arayüz ikonları için dış kaynaklı CDN üzerinden kullanılmaktadır.

Güvenlik ve Gizlilik Etkisi:
Bu kütüphaneler uygulamanın v1.0 sürümünde dış CDN sağlayıcıları (Cloudflare, jsDelivr vb.) üzerinden dinamik olarak çağrılmaktadır. Google Fonts ve Inter/Lora yazı tipleri ise v1.0 sürümünde konsol kirliliği yaratmamak adına fonts.css içerisinde yorum satırına alınmış olup sistem varsayılan fontları (fallback) aktiftir. Uygulama verilerinizi asla dışarı sızdırmaz; ancak uygulamanın İLK AÇILIŞI esnasında bu aktif CDN sağlayıcıları standart ağ isteklerinden kaynaklı olarak kullanıcı IP adreslerini kendi log sistemlerinde tutabilirler. Tamamen internete kapalı (Air-Gapped) sistemlerde çalışacak olan v2.0 güncellemesinde tüm bu bağımlılıklar yerel kod olarak uygulamanın içine gömülecektir.


---

## Akademik Atıf (Citation) Zorunluluğu

TurkRef'in akademik çalışmalarda (makale, tez, bildiri vb.) veri etiketleme aracı olarak kullanılması durumunda, aşağıdaki formatlardan biriyle projeye ve geliştirici ekibe atıf yapılması zorunludur:

APA 7 Formatı:
Bozkurt, F., Özüdoğru, E., Duran, R. B., & Taşcı, T. A. (2026). TurkRef (Versiyon 1.0): Türkçe Metinler İçin RST ve Gönderim Tabanlı Görsel Analiz ve İşaretleme Tezgahı [Yazılım]. EO Digital Lab. https://github.com/0Ersin0/turkref

BibTeX Formatı:
@software{turkref2026,
  author = {Bozkurt, Ferdi and Özüdoğru, Ersin and Duran, Rabia Betül and Taşcı, Taha Alper},
  title = {TurkRef v1.0: Advanced RST & Coreference Tagging Workbench for Turkish},
  year = {2026},
  publisher = {EO Digital Lab},
  url = {https://github.com/0Ersin0/turkref}
}

---

## Tam Sorumluluk Reddi Beyanı (Full Legal Disclaimer)

BU YAZILIM GELİŞTİRİCİ EKİBİ VE EO DIGITAL LAB TARAFINDAN "OLDUĞU GİBİ" (AS IS) SUNULMUŞTUR. YAZILIMIN TİCARİLEŞTİRİLEBİLİRLİĞİ, BELİRLİ BİR AMACA UYGUNLUĞU VEYA İHLAL EDİLMEZSE OLMASI DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE, AÇIK VEYA ZIMNİ HİÇBİR GARANTİ VERİLMEMEKTEDİR.

Geliştirici ekip (Ersin Ö., Doç. Dr. Ferdi B., Rabia Betül D., Taha Alper T.) ve EO Digital Lab;
1. Yazılımın kullanımı veya kullanılamaması sırasında meydana gelebilecek herhangi bir doğrudan, dolaylı, arızi, özel veya netice kabilinden doğan zararlardan (veri kaybı, veri bozulması, akademik çalışma veya tez aksaklıkları, bilgisayar sistemi arızaları, kâr kaybı veya iş kesintisi dahil ancak bunlarla sınırlı olmamak üzere),
2. İşaretlenen dilbilimsel bağlantıların, RST oklarının veya Gönderim etiketlerinin bilimsel doğruluğundan ya da kullanıcı hatalarından kaynaklanan yanlış akademik sonuçlardan,
3. Uygulamanın entegre çalıştığı 3. taraf uzak CDN sağlayıcılarının (Cloudflare, jsDelivr vb.) uygulayabileceği gizlilik, veri, erişim veya ağ politikalarından,

HUKUKİ TEORİYE (SÖZLEŞME, KUSURSUZ SORUMLULUK VEYA HAKSIZ FİİL DAHİL) BAKILMAKSIZIN VE BU TÜR BİR ZARARIN OLASILIĞI ÖNCEDEN BİLDİRİLMİŞ OLSA DAHİ HİÇBİR ŞEKİLDE YASAL, MADDİ YA DA CEZAİ OLARAK SORUMLU TUTULAMAZ. Tüm kullanım ve test riski tamamen son kullanıcıya aittir.

---

## Geliştirici Ekip ve Katkıda Bulunanlar

- Yazılım Mimarı & Geliştirici: Ersin Ö. (EO Digital Lab)
- Akademik Danışman & Metodoloji: Doç. Dr. Ferdi B.
- Dilbilimsel Analiz & Veri Etiketleme: Rabia Betül D.
- Dilbilimsel Analiz & Veri Etiketleme: Taha Alper T.

---
Copyright (c) 2026 EO Digital Lab. Apache License 2.0 ile korunmaktadır.