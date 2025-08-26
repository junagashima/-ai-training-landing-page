# AI研修ランディングページ

## Project Overview
- **Name**: 中小企業のはじめてのAI導入研修LP
- **Goal**: 中小企業向けAI導入研修の集客とお問い合わせ獲得
- **Company**: 眼から鱗合同会社
- **Features**: 
  - SEO・AI検索エンジン最適化
  - レスポンシブデザイン
  - FAQ機能
  - 社長向けレッスンへのクロスセル導線
  - formrun問い合わせフォーム統合

## 🌐 URLs
- **Production**: https://capable-pika-371604.netlify.app
- **社長向けレッスン**: https://effervescent-boba-783ef1.netlify.app
- **Development**: ローカルサーバー (port 3000)
- **GitHub**: （連携準備中）

## 🎯 対象キーワード
中小企業、AI導入、はじめて、生産性向上、業務効率、デジタル化、AI研修

## 🚀 主要機能

### ✅ 実装済み機能
- **レスポンシブデザイン**: PC/タブレット/スマホ対応
- **動画セクション**: 研修紹介動画埋め込み
- **FAQアコーディオン**: AI検索エンジン対応の質問回答
- **SEO最適化**: メタタグ、構造化データ、sitemap.xml、robots.txt
- **AI検索対応**: ChatGPT、Claude、Perplexity等のbot許可
- **フォーム統合**: formrun (@junagashima-k3UwT7jHyBUdLMsuV9wJ)
- **スムーズスクロール**: アニメーション・インタラクション
- **社長向けレッスンバナー**: クロスセル導線（3箇所配置）

### 🔄 バナー導線
1. **ヘッダーナビ**: 常時アクセス可能
2. **メインバナー**: ソリューション後の戦略的配置
3. **ミニバナー**: 講師紹介後のコンパクト誘導

## 📁 File Structure
```
webapp/
├── index.html              # メインページ
├── css/style.css           # スタイルシート（SEO + バナー対応）
├── js/script.js            # JavaScript（FAQ + アニメーション）
├── images/                 # 画像ファイル
│   ├── hero-bg.jpg        # ヒーロー背景（AI生成）
│   ├── business-worried.jpg # 悩む経営者（ユーザー提供）
│   ├── woman-aha.jpg      # 解決イメージ（AI生成）
│   ├── training-participants.jpg # 研修風景（AI生成）
│   └── instructor.jpg     # 講師写真（ユーザー提供）
├── videos/
│   └── training-intro.mp4  # 研修紹介動画（68MB）
├── sitemap.xml             # SEO用サイトマップ
├── robots.txt              # 検索エンジン・AI bot設定
├── .gitignore              # Git除外ファイル設定
├── package.json            # プロジェクト設定
└── README.md               # このファイル
```

## 🔧 Technical Architecture
- **Framework**: Static HTML/CSS/JavaScript
- **Styling**: Custom CSS + TailwindCSS (CDN) + Font Awesome
- **Forms**: formrun integration with iframe embed
- **SEO**: Schema.org structured data, meta optimization
- **Performance**: Optimized fonts, lazy loading, compressed assets

## 💡 SEO & AI Search Optimization

### Schema.org Structured Data
- EducationalOrganization
- Course information
- FAQ Question/Answer pairs
- ContactPoint details

### AI Search Engine Support
- ChatGPT-User, GPTBot: ✅ Allowed
- Claude-Web: ✅ Allowed  
- PerplexityBot: ✅ Allowed
- Bingbot: ✅ Allowed

### Target Keywords Integration
- Meta title: 中小企業のはじめてのAI導入｜業務効率・デジタル化・生産性向上のAI研修
- Meta description: キーワード自然配置
- Content optimization: ヒーロー、FAQ、バナー等に戦略的配置

## 🖥️ Development

### Local Development
```bash
# Navigate to project
cd /home/user/webapp

# Start local server
python3 -m http.server 3000

# Access at http://localhost:3000
```

### Git Management
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub (after setup)
git push origin main
```

## 🚀 Deployment Options

### Option 1: Manual Netlify Upload
1. Download project backup
2. Extract webapp folder contents
3. Drag & drop to Netlify deploy area

### Option 2: GitHub + Netlify Integration (推奨)
1. Setup GitHub authentication
2. Push code to GitHub repository
3. Connect Netlify to GitHub repo
4. Enable automatic deploys on push

## 📊 Performance & Analytics

### Current Status
- ✅ Mobile-friendly design
- ✅ Fast loading (optimized assets)
- ✅ SEO optimized
- ✅ Cross-browser compatible
- ⏳ Google Analytics (ready for setup)

### Monitoring Ready
- Google Search Console integration ready
- formrun analytics available
- Netlify analytics available

## 🎨 Design System

### Color Palette
- Primary Gradient: #667eea → #764ba2
- Secondary Gradient: #f093fb → #f5576c
- Text: #333 (dark), rgba(255,255,255,0.8) (light)
- Background: #fff, #f8f9fa

### Typography
- Font Family: Noto Sans JP (Google Fonts)
- Weights: 400, 500, 700, 900
- Responsive sizing: 16px base, scaled for mobile

### Icons
- Font Awesome 6.4.0
- Consistent styling across sections
- Semantic usage for better accessibility

## 📞 Contact Integration

### formrun Configuration
- **Form ID**: @junagashima-k3UwT7jHyBUdLMsuV9wJ
- **Response Time**: 3営業日以内
- **Features**: 自動返信、CSV export、通知設定
- **Security**: Domain allowlist configured

### Contact Methods
- Primary: formrun contact form
- Alternative: Company website link
- YouTube: Channel link provided

## 🔄 Update History
- **2024-08-20**: Initial LP creation
- **2024-08-21**: SEO optimization implementation
- **2024-08-21**: FAQ section addition
- **2024-08-21**: AI search engine optimization
- **2024-08-21**: CEO lesson cross-sell banners
- **2024-08-21**: GitHub integration preparation

## 📋 Future Enhancements
- [ ] Google Analytics integration
- [ ] A/B testing setup for banners
- [ ] Blog/news section addition
- [ ] Customer testimonials section
- [ ] Advanced tracking (heatmaps, etc.)
- [ ] Multi-language support (if needed)

## ⚠️ Important Notes
- Video file (68MB) may need optimization for better performance
- formrun domain allowlist must include deployment URL
- All external links open in new tabs
- Mobile-first responsive design approach

---

**© 2024 眼から鱗合同会社. All Rights Reserved.**

**Project Status**: ✅ Production Ready | 🔄 GitHub Integration Pending