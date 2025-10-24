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
    new TypingSpeedTest();
});

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
