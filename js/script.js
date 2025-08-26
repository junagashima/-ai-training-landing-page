/**
 * AI研修LP - JavaScriptインタラクション
 * スムーススクロール、スクロールアニメーション、その他のインタラクティブ機能
 */

(function() {
    'use strict';

    // ================================================
    // スムーススクロール
    // ================================================
    $(document).ready(function() {
        // ページ内リンクのスムーススクロール
        $('a[href^="#"]').on('click', function(e) {
            const href = $(this).attr('href');
            
            // #のみ、または空の場合は処理しない
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            
            const target = $(href);
            if (target.length) {
                const headerHeight = $('.header').outerHeight();
                const position = target.offset().top - headerHeight - 20;
                
                $('html, body').animate({
                    scrollTop: position
                }, 800, 'swing');
            }
        });
    });

    // ================================================
    // ヘッダーのスクロール制御
    // ================================================
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const floatingCta = document.getElementById('floating-cta');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // スクロール方向の判定
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 下スクロール時（ヘッダーを隠す）
            header.style.transform = 'translateY(-100%)';
        } else {
            // 上スクロール時（ヘッダーを表示）
            header.style.transform = 'translateY(0)';
        }
        
        // ヘッダーの背景色変更
        if (scrollTop > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
        
        // 固定追尾ボタンの表示制御
        if (floatingCta) {
            if (scrollTop > 500) {
                floatingCta.classList.add('show');
            } else {
                floatingCta.classList.remove('show');
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // ================================================
    // スクロールアニメーション
    // ================================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // 監視対象要素の取得
    const animateElements = document.querySelectorAll('.problem-item, .solution-item, .program-day, .effect-card, .achievement-item');
    
    // Intersection Observerの作成
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 各要素にアニメーションクラスを追加して監視開始
    animateElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // カウントアップアニメーション削除（価格は通常表示）

    // ================================================
    // ツールチップ
    // ================================================
    const toolBadges = document.querySelectorAll('.tool-badge');
    toolBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.style.color = 'white';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = '#f0f0f0';
            this.style.color = '#333';
        });
    });

    // ================================================
    // モバイルメニュー（将来的な実装用）
    // ================================================
    function initMobileMenu() {
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-button';
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        
        // モバイル時のみ表示
        if (window.innerWidth <= 768) {
            // メニューボタンの追加処理
        }
    }

    // ================================================
    // フォーム送信前の確認
    // ================================================
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // formrunのiframe内フォームの場合は特別な処理は不要
            console.log('フォームが送信されました');
        });
    }

    // ================================================
    // 画像の遅延読み込み
    // ================================================
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // ================================================
    // ページトップへ戻るボタン
    // ================================================
    function initBackToTop() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 100;
        `;
        
        document.body.appendChild(button);
        
        // スクロール時の表示制御
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        // クリック時の処理
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ================================================
    // パララックス効果（ヒーロー画像）
    // ================================================
    function initParallax() {
        const heroImage = document.querySelector('.hero-image-wrapper');
        if (!heroImage) return;
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // ================================================
    // FAQ アコーディオン機能
    // ================================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 現在のアイテムが開いているかチェック
            const isActive = item.classList.contains('active');
            
            // 全てのFAQアイテムを閉じる
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // クリックされたアイテムが閉じていた場合は開く
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ================================================
    // アコーディオン（その他用）
    // ================================================
    function initAccordion() {
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            if (header && content) {
                header.addEventListener('click', function() {
                    item.classList.toggle('active');
                    
                    if (item.classList.contains('active')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = '0';
                    }
                });
            }
        });
    }

    // ================================================
    // タブ切り替え（将来的な実装）
    // ================================================
    function initTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // すべてのタブをリセット
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // クリックされたタブをアクティブに
                button.classList.add('active');
                if (tabContents[index]) {
                    tabContents[index].classList.add('active');
                }
            });
        });
    }

    // ================================================
    // 初期化処理
    // ================================================
    document.addEventListener('DOMContentLoaded', function() {
        // 各機能の初期化
        initMobileMenu();
        lazyLoadImages();
        initBackToTop();
        initParallax();
        initAccordion();
        initTabs();
        
        // コンソールログ
        console.log('AI研修LPが正常に読み込まれました。');
    });

    // ================================================
    // ウィンドウリサイズ時の処理
    // ================================================
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // リサイズ完了後の処理
            if (window.innerWidth <= 768) {
                // モバイル表示の調整
            } else {
                // デスクトップ表示の調整
            }
        }, 250);
    });

})();