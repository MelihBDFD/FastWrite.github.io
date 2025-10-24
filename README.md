# Hızlı Yazı Uygulaması - Typing Speed Test

<div align="center">

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)](https://dead-zone.github.io/hizli-yazi-uygulamasi/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue.svg)](https://web.dev/progressive-web-apps/)

Modern ve güzel arayüzlü Türkçe yazma hızı test uygulaması.

</div>

## ✨ Özellikler

- **3 Zorluk Seviyesi**: Kolay, Orta, Zor metinler
- **Gerçek Zamanlı İstatistikler**: WPM, Doğruluk, Kalan Zaman
- **Görsel Geribildirim**: Renk kodlu metin vurgulama
- **Detaylı Sonuçlar**: Performans analizi ve seviyeler
- **PWA Desteği**: Offline çalışabilme ve uygulama olarak yükleme
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimize**: Arama motorları için optimize edilmiş
- **Modern UI**: Gradientler, animasyonlar ve glass morphism

## 🚀 GitHub Pages'e Deployment

### Otomatik Deployment
1. Bu repoyu GitHub'a push edin
2. Repository ayarlarından **Pages** sekmesine gidin
3. **Source** olarak `GitHub Actions`'ı seçin
4. Site otomatik olarak `https://dead-zone.github.io/hizli-yazi-uygulamasi/` adresinde yayınlanacak

### Manuel Deployment
```bash
# Repository'yi klonlayın
git clone https://github.com/DEAD-ZONE/hizli-yazi-uygulamasi.git
cd hizli-yazi-uygulamasi

# GitHub'a push edin
git add .
git commit -m "Initial commit"
git push origin main
```

## 📁 Proje Yapısı

```
hizli-yazi-uygulamasi/
├── .github/workflows/          # GitHub Actions
│   └── deploy.yml             # Auto-deployment
├── assets/                    # Static assets
├── icons/                     # PWA icons
├── .editorconfig             # Code formatting
├── .gitignore               # Git ignore rules
├── .nojekyll               # Disable Jekyll
├── CNAME                   # Custom domain (optional)
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                # MIT License
├── manifest.json          # PWA manifest
├── package.json           # Project configuration
├── README.md             # This file
├── robots.txt            # SEO robots file
├── SECURITY.md           # Security policy
├── service-worker.js     # PWA service worker
├── sitemap.xml          # SEO sitemap
├── index.html           # Main application
├── styles.css          # Styling
└── script.js           # Application logic
```

## 🎯 Nasıl Kullanılır

1. **Testi Başlat**: "Testi Başlat" butonuna tıklayın
2. **Zorluk Seçin**: Kolay, Orta veya Zor seviye seçin
3. **Yazmaya Başlayın**: Verilen metni doğru olarak yazın
4. **Sonuçları Görün**: Test tamamlandığında detaylı sonuçlar gösterilir

## 📊 Metrikler

- **WPM (Words Per Minute)**: Dakikadaki kelime sayısı
- **CPM (Characters Per Minute)**: Dakikadaki karakter sayısı
- **Doğruluk**: Yazılan metnin doğruluğu yüzdesi
- **Performans Seviyesi**: Başarı seviyesine göre değerlendirme

## 🔧 Geliştirme

### Local Development
```bash
# Clone repository
git clone https://github.com/DEAD-ZONE/hizli-yazi-uygulamasi.git

# Navigate to project
cd hizli-yazi-uygulamasi

# Start local server
python -m http.server 8000
# or
npx live-server

# Open browser
http://localhost:8000
```

### Code Quality
- **ESLint**: Code linting
- **EditorConfig**: Consistent formatting
- **PWA**: Progressive Web App features
- **SEO**: Search engine optimization
- **Performance**: Optimized loading

## 🌐 Tarayıcı Desteği

| Browser | Version |
|---------|---------|
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 12+     |
| Edge    | 79+     |

## 📱 PWA Özellikleri

- ✅ **Offline Support**: Service Worker ile offline çalışabilme
- ✅ **Install Prompt**: Uygulamayı cihaza yükleme
- ✅ **App Manifest**: PWA metadata
- ✅ **Performance**: Lighthouse score optimization
- ✅ **Security**: HTTPS ve security headers

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

Detaylar için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🔒 Güvenlik

Güvenlik açıkları için [SECURITY.md](SECURITY.md) dosyasına bakın veya security@deadzone.com adresine e-posta gönderin.

## 📞 İletişim

- **GitHub Issues**: Bug reportları ve özellik önerileri
- **GitHub Discussions**: Genel tartışmalar
- **Email**: deadzone@contact.com

---

<div align="center">

**DEAD ZONE tarafından geliştirilmiştir** 🚀

[🌐 Live Demo](https://dead-zone.github.io/hizli-yazi-uygulamasi/) •
[📖 Documentation](CONTRIBUTING.md) •
[🔒 Security](SECURITY.md)

</div>
