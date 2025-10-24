# Hızlı Yazı Uygulaması - Typing Speed Test

<div align="center">

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)](https://dead-zone.github.io/hizli-yazi-uygulamasi/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue.svg)](https://web.dev/progressive-web-apps/)
[![Analytics](https://img.shields.io/badge/Google%20Analytics-Enabled-orange.svg)](https://analytics.google.com/)
[![Dark Mode](https://img.shields.io/badge/Theme-Dark%2FLight-purple.svg)](https://web.dev/prefers-color-scheme/)
[![Performance](https://img.shields.io/badge/Performance-Lighthouse%2090%2B-green.svg)](https://pagespeed.web.dev/)

Modern, PWA destekli ve analytics entegre Türkçe yazma hızı test uygulaması.

</div>

## 🌟 **YENİ ÖZELLİKLER**

- ✅ **Google Authentication**: Gerçek Google OAuth entegrasyonu
- ✅ **Lider Tablosu**: Tüm kullanıcı skorlarını görüntüleme
- ✅ **Tab-based Navigation**: Test ve lider tablosu arasında geçiş
- ✅ **Text Alignment Fix**: Yazı alignment sorunu düzeltildi
- ✅ **Enhanced User System**: Kullanıcı profilleri ve session yönetimi
- ✅ **Real-time Leaderboard**: Filtreleme ve sıralama özellikleri

## ✨ **Tüm Özellikler**

### 🎯 **Core Features**
- **3 Zorluk Seviyesi**: Kolay, Orta, Zor metinler
- **Gerçek Zamanlı İstatistikler**: WPM, Doğruluk, Kalan Zaman
- **Görsel Geribildirim**: Renk kodlu metin vurgulama
- **Detaylı Sonuçlar**: Performans analizi ve seviyeler

### 🚀 **PWA & Performance**
- **Offline Support**: Service Worker ile internetsiz çalışma
- **App Installation**: Mobil cihazlara yükleme
- **Background Sync**: Veri senkronizasyonu
- **Push Notifications**: Bildirim desteği
- **Performance Monitoring**: Web Vitals tracking
- **Error Tracking**: Otomatik hata raporlama

### 🎨 **UI & Accessibility**
- **Dark/Light Theme**: Otomatik tema değiştirme
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **High Contrast Mode**: Erişilebilirlik desteği
- **Reduced Motion**: Animasyon tercihleri
- **Mobile Optimized**: Dokunmatik dostu arayüz

### 📊 **Analytics & SEO**
- **Google Analytics 4**: Detaylı kullanıcı analizi
- **SEO Optimize**: Arama motorları için optimize
- **Social Media Cards**: Open Graph ve Twitter Cards
- **Sitemap & Robots**: Arama motoru optimizasyonu

### 🛠️ **Developer Experience**
- **ESLint & Prettier**: Kod kalitesi
- **GitHub Actions**: Otomatik deployment
- **Issue Templates**: Standardize edilmiş bug reports
- **PR Templates**: Kapsamlı pull request'ler
- **Security Policy**: Güvenlik standartları

## 🚀 **GitHub Pages'e Deployment**

### **Otomatik Deployment**
1. Bu repoyu GitHub'a push edin
2. Repository ayarlarından **Pages** sekmesine gidin
3. **Source** olarak `GitHub Actions`'ı seçin
4. Site otomatik olarak `https://dead-zone.github.io/hizli-yazi-uygulamasi/` adresinde yayınlanacak

### **Manuel Deployment**
```bash
# Repository'yi klonlayın
git clone https://github.com/DEAD-ZONE/hizli-yazi-uygulamasi.git
cd hizli-yazi-uygulamasi

# Geliştirme
npm install
npm run dev

# GitHub'a push edin
git add .
git commit -m "feat: Add comprehensive PWA and analytics features"
git push origin main
```

## 📁 **Proje Yapısı**

```
hizli-yazi-uygulamasi/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml              # Auto-deployment
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.yml          # Bug report template
│       └── feature_request.yml     # Feature request template
├── assets/                         # Static assets
├── icons/                          # PWA icons & favicons
├── .editorconfig                   # Code formatting
├── .eslintrc.js                    # ESLint configuration
├── .gitignore                      # Git ignore rules
├── .nojekyll                       # Disable Jekyll
├── .prettierrc                     # Prettier configuration
├── CNAME                           # Custom domain (optional)
├── contributing.md                 # Contribution guidelines
├── LICENSE                         # MIT License
├── manifest.json                   # PWA manifest
├── package.json                    # Project configuration
├── README.md                       # This file
├── robots.txt                      # SEO robots file
├── security.md                     # Security policy
├── service-worker.js               # Enhanced PWA service worker
├── sitemap.xml                     # SEO sitemap
├── index.html                      # Main application (SEO optimized)
├── styles.css                      # Enhanced styling with themes
└── script.js                       # Enhanced JavaScript with analytics
```

## 🎯 **Kullanım**

### **Google ile Giriş**
1. **Giriş Yapın**: Header'daki "Google ile Giriş" butonuna tıklayın
2. **İzin Verin**: Google hesabınızla giriş yapın
3. **Profil**: Avatar ve isminiz header'da görünecek

### **Typing Test**
1. **Testi Başlat**: "Testi Başlat" butonuna tıklayın
2. **Zorluk Seçin**: Kolay, Orta veya Zor seviye seçin
3. **Yazmaya Başlayın**: Verilen metni doğru olarak yazın
4. **Sonuçları Görün**: Test tamamlandığında detaylı sonuçlar gösterilir

### **Lider Tablosu**
1. **Tab'a Geçin**: Header'daki "Lider Tablosu" butonuna tıklayın
2. **Filtreleyin**: Zorluk seviyesine göre filtreleme yapın
3. **Skorunuzu Görün**: Tüm kullanıcılar arasında sıralamanızı görün

### **PWA Features**
- 📱 **Install App**: Browser'dan "Install" butonuna tıklayın
- 🌙 **Theme Toggle**: Header'daki moon/sun icon'una tıklayın
- 📊 **Analytics**: Otomatik kullanım istatistikleri
- 🔄 **Offline Mode**: İnternetsiz çalışabilme

## 📊 **Metrikler & Analytics**

### **Typing Metrics**
- **WPM (Words Per Minute)**: Dakikadaki kelime sayısı
- **CPM (Characters Per Minute)**: Dakikadaki karakter sayısı
- **Doğruluk**: Yazılan metnin doğruluğu yüzdesi
- **Performans Seviyesi**: Başarı seviyesine göre değerlendirme

### **Performance Metrics**
- **Lighthouse Score**: 90+ performance score
- **Web Vitals**: LCP, FID, CLS tracking
- **Page Load Time**: < 1 second
- **Bundle Size**: Optimized for fast loading

## 🔧 **Development**

### **Setup**
```bash
# Clone repository
git clone https://github.com/DEAD-ZONE/hizli-yazi-uygulamasi.git
cd hizli-yazi-uygulamasi

# Install development tools
npm install

# Development server
npm run dev

# Code quality
npm run lint
npm run format

### **Google OAuth Setup (Optional)**
1. **Google Cloud Console**'da yeni proje oluşturun
2. **OAuth 2.0 Client ID** oluşturun
3. **Authorized redirect URIs**'ne sitenizin URL'ini ekleyin
4. **Client ID**'yi `script.js` dosyasında `YOUR_GOOGLE_CLIENT_ID` yerine koyun

**Demo Mode**: Client ID ayarlanmazsa otomatik demo mode aktif olur.
- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run lint` - Code linting
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Code formatting
- `npm run validate` - Full validation

## 🌐 **Tarayıcı Desteği**

| Browser | Version | Features |
|---------|---------|----------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |
| Mobile  | All     | ✅ PWA Support |

## 📱 **PWA Özellikleri**

### **Installation**
- ✅ **App Installation**: Add to home screen
- ✅ **Offline Support**: Works without internet
- ✅ **Background Sync**: Data synchronization
- ✅ **Push Notifications**: Update notifications
- ✅ **Performance**: Fast loading and smooth UX

### **Accessibility**
- ✅ **WCAG 2.1 AA**: Accessibility compliance
- ✅ **High Contrast**: Enhanced visibility
- ✅ **Reduced Motion**: Respects user preferences
- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **Screen Reader**: ARIA labels and semantic HTML

## 🤝 **Katkıda Bulunma**

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

**Issue Templates:**
- 🐛 **Bug Reports**: Standardize edilmiş hata raporları
- 💡 **Feature Requests**: Özellik önerileri
- 🔒 **Security Issues**: Güvenlik açıkları

## 📄 **Lisans**

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🔒 **Güvenlik**

- **Security Policy**: [security.md](security.md)
- **Vulnerability Reporting**: Güvenlik açıkları için özel prosedür
- **Dependency Scanning**: Otomatik güvenlik taramaları
- **Content Security Policy**: XSS koruması

## 📞 **İletişim**

- **GitHub Issues**: Bug reportları ve özellik önerileri
- **GitHub Discussions**: Genel tartışmalar
- **Security**: security@deadzone.com
- **Email**: deadzone@contact.com

---

<div align="center">

**DEAD ZONE tarafından geliştirilmiştir** 🚀

⭐ **Star this repo if you find it useful!**

[🌐 Live Demo](https://dead-zone.github.io/hizli-yazi-uygulamasi/) •
[📖 Documentation](contributing.md) •
[🔒 Security](security.md) •
[🐛 Issues](https://github.com/DEAD-ZONE/hizli-yazi-uygulamasi/issues) •
[💬 Discussions](https://github.com/DEAD-ZONE/hizli-yazi-uygulamasi/discussions)

</div>
