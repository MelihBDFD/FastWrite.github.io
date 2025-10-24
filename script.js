class TypingSpeedTest {
    constructor() {
        this.textInput = document.getElementById('textInput');
        this.textContent = document.getElementById('textContent');
        this.startBtn = document.getElementById('startBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.wpmDisplay = document.getElementById('wpm');
        this.accuracyDisplay = document.getElementById('accuracy');
        this.timeDisplay = document.getElementById('time');
        this.results = document.getElementById('results');
        this.difficultySelect = document.getElementById('difficulty');
        
        this.textSamples = {
            easy: [
                "Hızlı yazma pratiği yapmak için bu metni kullanabilirsiniz. Kolay seviye metinler genellikle kısa ve basit kelimelerden oluşur.",
                "Bugün hava çok güzel. Güneş parlıyor ve kuşlar şarkı söylüyor. Parkta yürümek istiyorum.",
                "Bilgisayar kullanmak eğlencelidir. Yeni şeyler öğrenmek her zaman iyidir. Pratik yapmak başarı getirir.",
                "Merhaba, benim adım Ali. İstanbul'da yaşıyorum. Her gün okula gidiyorum ve kitap okuyorum.",
                "Sabah kalktım, kahvaltı yaptım. Sonra dışarı çıktım ve arkadaşlarımla buluştum. Günüm güzel geçti.",
                "Teknoloji hayatımızı kolaylaştırır. Telefon ve bilgisayar olmadan yaşayamayız. Her şey dijital oldu.",
                "Spor yapmak sağlığımız için çok önemlidir. Her gün egzersiz yapmalıyız. Sağlıklı beslenmeliyiz.",
                "Müzik dinlemek ruh halimi iyileştirir. Sevdiğim şarkıları dinleyerek çalışırım. Müzik evrensel dildir."
            ],
            medium: [
                "Yazma hızınızı geliştirmek için düzenli pratik yapmak çok önemlidir. Klavyenizi etkili bir şekilde kullanmayı öğrenmek, günlük işlerinizi hızlandıracaktır. Farklı parmaklarınızı kullanarak tüm tuşlara eşit şekilde basmayı deneyin.",
                "Teknoloji hayatımızın her alanında önemli bir rol oynamaktadır. İnternet sayesinde dünyadaki bilgilerle anında bağlantı kurabiliyoruz. Sosyal medya platformları insanları birbirine yaklaştırmaktadır.",
                "Eğitim sistemi sürekli değişim göstermektedir. Online eğitim platformları geleneksel yöntemlerin yerini almaya başlamıştır. Öğrenciler artık evlerinden derslere katılabilmektedir.",
                "İş hayatında iletişim becerileri çok değerlidir. E-posta yazmak, toplantı yapmak ve sunum hazırlamak önemli yetkinliklerdir. Profesyonel olmak için sürekli kendimizi geliştirmeliyiz.",
                "Çevre koruması günümüzün en önemli konularından biridir. Geri dönüşüm yapmak, enerji tasarrufu sağlamak ve doğal kaynakları korumak hepimizin sorumluluğudur.",
                "Sanat ve kültür toplumların kimliğini oluşturur. Müzeler, tiyatrolar ve konserler insanların ruhsal gelişimine katkı sağlar. Sanat olmadan hayat renksiz kalır.",
                "Seyahat etmek ufkumuzu genişletir. Farklı kültürleri tanımak, yeni insanlarla tanışmak ve farklı mutfakları denemek hayat deneyimlerimizi zenginleştirir.",
                "Bilim ve araştırma insanlığın ilerlemesini sağlar. Yeni buluşlar ve keşifler sayesinde hayat standartlarımız yükselir. Merak etmek ve soru sormak bilimin temelidir."
            ],
            hard: [
                "Klavye kullanımında ustalaşmak, dikkat ve koordinasyon gerektiren karmaşık bir beceridir. Ergonomik klavye düzenlemeleri, uzun süreli yazma seanslarında fiziksel stresi azaltmak için tasarlanmıştır. QWERTY düzeninin kökeni daktilo makinelerine dayanmaktadır.",
                "Yapay zeka teknolojileri, doğal dil işleme alanında devrim yaratmaktadır. Makine öğrenmesi algoritmaları, büyük veri setlerinden anlamlı bilgiler çıkarmak için kullanılır. Derin öğrenme modelleri, karmaşık problemleri çözmede etkili olmaktadır.",
                "Kuantum bilgisayarlar, klasik bilgisayarların çözemediği problemleri çözme potansiyeline sahiptir. Süperpozisyon ve dolanıklık prensipleri, paralel işlem yapmayı mümkün kılar. Bu teknoloji, şifreleme ve optimizasyon alanlarında çığır açacaktır.",
                "Blockchain teknolojisi, merkezi olmayan veri saklama yöntemleri sunarak finans sektörünü dönüştürmüştür. Kripto para birimleri ve akıllı sözleşmeler bu teknolojinin uygulamaları arasında yer alır. Güvenlik ve şeffaflık blockchain'in temel özellikleridir.",
                "Nöroplastisite, beynin öğrenme ve uyum sağlama yeteneğini ifade eder. Yeni beceriler öğrenmek, sinir yollarını güçlendirir ve bilişsel fonksiyonları geliştirir. Yaşam boyu öğrenme, beyin sağlığını korumanın en etkili yollarından biridir.",
                "Sürdürülebilir kalkınma, gelecek nesillere yaşanabilir bir dünya bırakmak için gereklidir. Yenilenebilir enerji kaynakları, atık yönetimi ve yeşil teknolojiler bu amaca hizmet eder. Bireysel ve toplumsal sorumluluk bilinciyle hareket etmek şarttır.",
                "Psikoloji bilimi, insan davranışlarını ve zihinsel süreçleri inceler. Bilişsel davranışçı terapi, duygu durum bozukluklarının tedavisinde etkili bir yöntemdir. Mindfulness ve meditasyon teknikleri, stres yönetimi için kullanılır.",
                "Geleceğin meslekleri, yapay zeka ve otomasyon teknolojileriyle şekillenecektir. Yazılım geliştirme, veri bilimi ve dijital pazarlama gibi alanlar giderek önem kazanmaktadır. Sürekli öğrenme ve adaptasyon yeteneği kritik öneme sahiptir."
            ]
        };

        this.currentText = '';
        this.currentIndex = 0;
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.timeLeft = 60;
        this.isTestActive = false;
        this.errors = 0;
        this.totalChars = 0;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadNewText();
        this.updateDisplay();
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startTest());
        this.restartBtn.addEventListener('click', () => this.restartTest());
        this.textInput.addEventListener('input', (e) => this.handleInput(e));
        this.difficultySelect.addEventListener('change', () => this.loadNewText());
    }

    loadNewText() {
        const difficulty = this.difficultySelect.value;
        const texts = this.textSamples[difficulty];
        this.currentText = texts[Math.floor(Math.random() * texts.length)];
        this.textContent.textContent = this.currentText;
        this.currentIndex = 0;
        this.errors = 0;
        this.totalChars = 0;
        this.updateDisplay();
        this.renderText();
    }

    renderText() {
        const textArray = this.currentText.split('');
        const highlightedText = textArray.map((char, index) => {
            if (index < this.currentIndex) {
                if (this.userInput && this.userInput[index] !== char) {
                    return `<span class="highlight-incorrect">${char}</span>`;
                } else {
                    return `<span class="highlight-correct">${char}</span>`;
                }
            } else if (index === this.currentIndex) {
                return `<span class="highlight-current">${char}</span>`;
            } else {
                return char;
            }
        }).join('');

        this.textContent.innerHTML = highlightedText;
    }

    startTest() {
        this.isTestActive = true;
        this.startTime = Date.now();
        this.timeLeft = 60;
        this.currentIndex = 0;
        this.errors = 0;
        this.totalChars = 0;
        this.userInput = '';

        this.textInput.disabled = false;
        this.textInput.focus();
        this.textInput.value = '';
        this.startBtn.disabled = true;
        this.restartBtn.disabled = false;

        this.loadNewText();
        this.startTimer();
        this.updateDisplay();
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();

            if (this.timeLeft <= 0) {
                this.endTest();
            }
        }, 1000);
    }

    handleInput(e) {
        if (!this.isTestActive) return;

        const input = e.target.value;
        this.userInput = input;
        this.totalChars = input.length;

        // Calculate current index based on correct characters
        let correctIndex = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === this.currentText[i]) {
                correctIndex = i + 1;
            } else {
                break;
            }
        }

        this.currentIndex = Math.max(this.currentIndex, correctIndex);

        // Count errors (characters that don't match)
        this.errors = 0;
        for (let i = 0; i < Math.min(input.length, this.currentText.length); i++) {
            if (input[i] !== this.currentText[i]) {
                this.errors++;
            }
        }

        this.updateDisplay();
        this.renderText();

        // Check if test is complete
        if (input.length >= this.currentText.length) {
            const allCorrect = input === this.currentText;
            if (allCorrect) {
                this.endTest();
            }
        }
    }

    updateDisplay() {
        // Update stats
        const wpm = this.calculateWPM();
        const accuracy = this.calculateAccuracy();

        this.wpmDisplay.textContent = Math.round(wpm);
        this.accuracyDisplay.textContent = `${Math.round(accuracy)}%`;
        this.timeDisplay.textContent = `${this.timeLeft}s`;

        // Update text input styling
        if (this.errors > 0) {
            this.textInput.className = 'text-input incorrect';
        } else if (this.totalChars > 0) {
            this.textInput.className = 'text-input correct';
        } else {
            this.textInput.className = 'text-input';
        }
    }

    calculateWPM() {
        if (!this.startTime || this.totalChars === 0) return 0;
        
        const timeElapsed = (Date.now() - this.startTime) / 1000 / 60; // minutes
        const wordsTyped = this.totalChars / 5; // standard: 5 characters per word
        return wordsTyped / timeElapsed;
    }

    calculateAccuracy() {
        if (this.totalChars === 0) return 100;
        const correctChars = this.totalChars - this.errors;
        return (correctChars / this.totalChars) * 100;
    }

    endTest() {
        this.isTestActive = false;
        this.endTime = Date.now();
        clearInterval(this.timer);

        this.textInput.disabled = true;
        this.startBtn.disabled = false;

        this.showResults();
    }

    showResults() {
        const finalWpm = this.calculateWPM();
        const finalAccuracy = this.calculateAccuracy();
        const cpm = finalWpm * 5; // characters per minute
        const performance = this.getPerformanceLevel(finalWpm);

        // Update results display
        document.getElementById('finalWpm').textContent = Math.round(finalWpm);
        document.getElementById('finalAccuracy').textContent = `${Math.round(finalAccuracy)}%`;
        document.getElementById('finalCpm').textContent = Math.round(cpm);
        document.getElementById('totalChars').textContent = this.totalChars;
        document.getElementById('performanceText').textContent = performance.text;

        // Update performance bar
        const performanceBar = document.getElementById('performanceFill');
        performanceBar.style.width = `${performance.percentage}%`;
        performanceBar.style.background = performance.color;

        this.results.style.display = 'block';

        // Smooth scroll to results
        this.results.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    getPerformanceLevel(wpm) {
        if (wpm >= 60) {
            return { 
                text: 'Mükemmel! Profesyonel seviyedesiniz!', 
                percentage: 100, 
                color: 'linear-gradient(90deg, #10b981, #059669)' 
            };
        } else if (wpm >= 45) {
            return { 
                text: 'Çok İyi! Hızlı bir yazarsınız!', 
                percentage: 80, 
                color: 'linear-gradient(90deg, #3b82f6, #2563eb)' 
            };
        } else if (wpm >= 30) {
            return { 
                text: 'İyi! Ortalama üstü hız!', 
                percentage: 60, 
                color: 'linear-gradient(90deg, #f59e0b, #d97706)' 
            };
        } else if (wpm >= 15) {
            return { 
                text: 'Geliştirilebilir. Pratik yapmaya devam edin!', 
                percentage: 40, 
                color: 'linear-gradient(90deg, #ef4444, #dc2626)' 
            };
        } else {
            return { 
                text: 'Başlangıç seviyesindesiniz. Düzenli pratik ile gelişeceksiniz!', 
                percentage: 20, 
                color: 'linear-gradient(90deg, #7c2d12, #991b1b)' 
            };
        }
    }

    restartTest() {
        this.results.style.display = 'none';
        this.startTest();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedTypingSpeedTest();

    // Register Service Worker for PWA support
    registerServiceWorker();

    // Check for app updates
    checkForUpdates();

    // Initialize analytics
    initAnalytics();

    // Initialize push notifications
    initPushNotifications();

    // Initialize performance monitoring
    initPerformanceMonitoring();

    // Initialize theme system
    initThemeSystem();
});

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('[App] Service Worker registered successfully:', registration.scope);

                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    showUpdateNotification();
                                }
                            });
                        }
                    });
                })
                .catch(error => {
                    console.log('[App] Service Worker registration failed:', error);
                });
        });
    }
}

// Check for app updates
function checkForUpdates() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.addEventListener('controllerchange', () => {
                window.location.reload();
            });
        });
    }
}

// Show update notification
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #6366f1, #8b5cf6);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            z-index: 10000;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
        ">
            <i class="fas fa-sync-alt" style="margin-right: 8px;"></i>
            Yeni güncelleme mevcut! Tıklayarak yenileyin.
        </div>
    `;

    notification.onclick = () => {
        window.location.reload();
    };

    document.body.appendChild(notification);

    // Auto-reload after 10 seconds
    setTimeout(() => {
        window.location.reload();
    }, 10000);
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install button
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.innerHTML = `
        <i class="fas fa-download"></i>
        Uygulamayı Yükle
    `;
    installBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(45deg, #10b981, #059669);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
        z-index: 9999;
        transition: all 0.3s ease;
    `;

    installBtn.onmouseover = () => {
        installBtn.style.transform = 'translateY(-2px)';
        installBtn.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
    };

    installBtn.onmouseout = () => {
        installBtn.style.transform = 'translateY(0)';
        installBtn.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.3)';
    };

    installBtn.onclick = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
            installBtn.remove();
        });
    };

    document.body.appendChild(installBtn);
}

// Analytics initialization
function initAnalytics() {
    // Check if analytics should be loaded (respect privacy)
    if (localStorage.getItem('analytics-consent') === 'true' || !localStorage.getItem('analytics-consent')) {
        loadGoogleAnalytics();
        trackPageView();
    }

    // Listen for analytics consent changes
    window.addEventListener('storage', (e) => {
        if (e.key === 'analytics-consent') {
            if (e.newValue === 'true') {
                loadGoogleAnalytics();
            } else {
                disableAnalytics();
            }
        }
    });
}

// Google Analytics 4 setup
function loadGoogleAnalytics() {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with actual GA4 ID
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
        app_name: 'Hızlı Yazı',
        app_version: '1.1.0',
        send_page_view: false
    });

    window.gtag = gtag;
    console.log('[Analytics] Google Analytics loaded');
}

// Track page views
function trackPageView() {
    if (window.gtag) {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
}

// Track typing test events
function trackTypingEvent(eventName, data) {
    if (window.gtag) {
        gtag('event', eventName, {
            event_category: 'typing_test',
            event_label: data.difficulty || 'unknown',
            value: data.wpm || 0,
            custom_parameters: data
        });
    }

    // Also cache for offline sync
    cacheAnalyticsEvent(eventName, data);
}

// Cache analytics events for offline sync
async function cacheAnalyticsEvent(eventName, data) {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'UPDATE_ANALYTICS',
            payload: {
                event: eventName,
                data: data,
                timestamp: Date.now(),
                url: window.location.href
            }
        });
    }
}

// Disable analytics
function disableAnalytics() {
    window.gtag = null;
    window.dataLayer = [];
    localStorage.removeItem('ga-session');
    console.log('[Analytics] Analytics disabled');
}

// Push notifications initialization
async function initPushNotifications() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            console.log('[Notifications] Permission granted');
            subscribeToPushNotifications();
        } else {
            console.log('[Notifications] Permission denied');
        }
    }
}

// Subscribe to push notifications
async function subscribeToPushNotifications() {
    try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
                'BKxQzBRl4oWJ6uE1mVzRm7nO2dP3h4k5L6M8N9P0Q1R2S3T4U5V6W7X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0'
            )
        });

        console.log('[Notifications] Subscribed to push notifications:', subscription);

        // Send subscription to server (implement server-side handling)
        await sendSubscriptionToServer(subscription);

        // Track subscription event
        trackTypingEvent('push_notification_subscribed', {
            endpoint: subscription.endpoint
        });

    } catch (error) {
        console.error('[Notifications] Push subscription failed:', error);
    }
}

// Convert VAPID key
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Send subscription to server
async function sendSubscriptionToServer(subscription) {
    try {
        // This would be implemented on your server
        const response = await fetch('/api/push-subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscription)
        });

        if (response.ok) {
            console.log('[Notifications] Subscription sent to server');
        }
    } catch (error) {
        console.error('[Notifications] Failed to send subscription:', error);
        // Cache for later sync
        cacheAnalyticsEvent('push_subscription_failed', { error: error.message });
    }
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Web Vitals monitoring
    if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                trackPerformanceMetric('LCP', entry.startTime);
            }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                trackPerformanceMetric('FID', entry.processingStart - entry.startTime);
            }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            if (clsValue > 0) {
                trackPerformanceMetric('CLS', clsValue);
            }
        }).observe({ entryTypes: ['layout-shift'] });
    }

    // Track page load performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                trackPerformanceMetric('page_load_time', perfData.loadEventEnd - perfData.loadEventStart);
                trackPerformanceMetric('dom_ready_time', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
            }
        }, 0);
    });
}

// Track performance metrics
function trackPerformanceMetric(metricName, value) {
    if (window.gtag) {
        gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: metricName,
            value: Math.round(value)
        });
    }

    console.log(`[Performance] ${metricName}: ${value}ms`);

    // Cache for offline sync
    cacheAnalyticsEvent('performance_metric', {
        metric: metricName,
        value: value,
        timestamp: Date.now()
    });
}

// Error tracking
window.addEventListener('error', (event) => {
    trackError('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack
    });
});

window.addEventListener('unhandledrejection', (event) => {
    trackError('unhandled_promise_rejection', {
        reason: event.reason?.toString(),
        promise: event.promise?.toString()
    });
});

// Track errors
function trackError(errorType, data) {
    console.error(`[Error Tracking] ${errorType}:`, data);

    if (window.gtag) {
        gtag('event', 'exception', {
            description: `${errorType}: ${data.message || data.reason}`,
            fatal: false
        });
    }

    cacheAnalyticsEvent('error', {
        type: errorType,
        data: data,
        timestamp: Date.now()
    });
}

// User engagement tracking
let sessionStartTime = Date.now();
let typingTestsCompleted = 0;
let totalTypingTime = 0;

function trackUserEngagement(action, data = {}) {
    const sessionDuration = Date.now() - sessionStartTime;

    trackTypingEvent('user_engagement', {
        action: action,
        session_duration: sessionDuration,
        tests_completed: typingTestsCompleted,
        total_typing_time: totalTypingTime,
        ...data
    });
}

// Enhanced typing test tracking
class EnhancedTypingSpeedTest extends TypingSpeedTest {
    constructor() {
        super();
        this.testStartTime = null;
        this.sessionId = generateSessionId();
    }

    startTest() {
        super.startTest();
        this.testStartTime = Date.now();

        trackTypingEvent('test_started', {
            difficulty: this.difficultySelect.value,
            session_id: this.sessionId
        });

        trackUserEngagement('test_started', {
            difficulty: this.difficultySelect.value
        });
    }

    endTest() {
        super.endTest();

        const testDuration = Date.now() - this.testStartTime;
        totalTypingTime += testDuration;
        typingTestsCompleted++;

        trackTypingEvent('test_completed', {
            difficulty: this.difficultySelect.value,
            session_id: this.sessionId,
            test_duration: testDuration,
            tests_completed: typingTestsCompleted
        });

        trackUserEngagement('test_completed', {
            difficulty: this.difficultySelect.value,
            test_duration: testDuration
        });
    }

    restartTest() {
        trackTypingEvent('test_restarted', {
            session_id: this.sessionId
        });

        super.restartTest();
    }
}

// Generate unique session ID
function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Privacy settings
function showPrivacySettings() {
    const consent = confirm(
        'Analytics ve performans takibine izin veriyor musunuz?\n\n' +
        'Bu veriler uygulamanın geliştirilmesine yardımcı olur.\n' +
        'İstediğiniz zaman ayarları değiştirebilirsiniz.'
    );

    localStorage.setItem('analytics-consent', consent.toString());
    return consent;
}

// Initialize theme system
function initThemeSystem() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Add theme toggle button to header
    addThemeToggleButton();

    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a2e' : '#6366f1');
    }

    // Track theme change
    trackTypingEvent('theme_changed', { theme: theme });
}

// Add theme toggle button
function addThemeToggleButton() {
    const header = document.querySelector('.header');
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.title = 'Tema değiştir';
    themeToggle.setAttribute('aria-label', 'Tema değiştir');

    themeToggle.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 10px;
        color: var(--text-primary);
        cursor: pointer;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;

    themeToggle.onmouseover = () => {
        themeToggle.style.background = 'rgba(255, 255, 255, 0.15)';
        themeToggle.style.transform = 'scale(1.05)';
    };

    themeToggle.onmouseout = () => {
        themeToggle.style.background = 'rgba(255, 255, 255, 0.1)';
        themeToggle.style.transform = 'scale(1)';
    };

    themeToggle.onclick = toggleTheme;

    // Insert after logo
    const logo = header.querySelector('.logo');
    header.insertBefore(themeToggle, logo.nextSibling);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Update button icon
    const themeToggle = document.querySelector('.theme-toggle i');
    themeToggle.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Add some additional styling for better text highlighting
const style = document.createElement('style');
style.textContent = `
    .text-content {
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    .highlight-correct {
        color: #10b981;
        background: rgba(16, 185, 129, 0.2);
    }

    .highlight-incorrect {
        color: #ef4444;
        background: rgba(239, 68, 68, 0.2);
        text-decoration: underline;
    }

    .highlight-current {
        background: rgba(99, 102, 241, 0.3);
        border-left: 2px solid #6366f1;
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(style);
